// Serverless endpoint for Google Sheets integration via Google Apps Script
// Designed for Vercel Serverless Functions and local dev middleware

interface ContactRequestBody {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  hp?: string; // Honeypot field for bot detection
}

// In-memory rate limiting & duplicate prevention
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const recentSubmissions = new Map<string, number>();

function cleanOldEntries() {
  const now = Date.now();
  for (const [key, val] of rateLimitMap.entries()) {
    if (val.resetAt < now) {
      rateLimitMap.delete(key);
    }
  }
  for (const [key, timestamp] of recentSubmissions.entries()) {
    if (now - timestamp > 60000) {
      recentSubmissions.delete(key);
    }
  }
}

// Robust body extraction supporting Vercel Serverless and Node environments
async function parseJsonBody(req: any): Promise<ContactRequestBody> {
  if (req.body) {
    if (typeof req.body === 'string') {
      try {
        return JSON.parse(req.body);
      } catch {
        return {};
      }
    }
    return req.body;
  }

  // Handle stream if body isn't pre-parsed
  if (typeof req.on === 'function') {
    return new Promise((resolve) => {
      let raw = '';
      req.on('data', (chunk: any) => {
        raw += chunk;
      });
      req.on('end', () => {
        try {
          resolve(JSON.parse(raw || '{}'));
        } catch {
          resolve({});
        }
      });
      req.on('error', () => resolve({}));
    });
  }

  return {};
}

function sendResponse(
  res: any,
  status: number,
  data: { success: boolean; message?: string; error?: string }
) {
  if (res && typeof res.status === 'function') {
    return res.status(status).json(data);
  }
  if (res && typeof res.writeHead === 'function') {
    res.writeHead(status, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
    return;
  }
  // Web standard Response fallback
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export default async function handler(req: any, res?: any) {
  // Enforce POST method
  const method = req.method || (req as Request)?.method;
  if (method !== 'POST') {
    return sendResponse(res, 405, {
      success: false,
      error: 'Method not allowed. Only POST requests are accepted.',
    });
  }

  cleanOldEntries();

  // Extract client IP for rate limiting
  const forwardedFor =
    req.headers?.['x-forwarded-for'] ||
    req.headers?.['x-real-ip'] ||
    req.socket?.remoteAddress ||
    'anonymous';
  const clientIp = Array.isArray(forwardedFor)
    ? forwardedFor[0]
    : String(forwardedFor).split(',')[0].trim();

  // Rate Limiting: Max 5 submissions per 10 minutes per IP
  const now = Date.now();
  const rateRecord = rateLimitMap.get(clientIp) || { count: 0, resetAt: now + 10 * 60 * 1000 };
  if (rateRecord.resetAt > now && rateRecord.count >= 5) {
    const minutesLeft = Math.ceil((rateRecord.resetAt - now) / 60000);
    return sendResponse(res, 429, {
      success: false,
      error: `Too many submissions from this connection. Please wait ${minutesLeft} minute(s) before trying again.`,
    });
  }

  // Parse payload
  const body = await parseJsonBody(req);
  const { name, email, subject, message, hp } = body;

  // 1. Bot Honeypot detection
  // If the hidden 'hp' field is filled in, pretend success to discard bot without notifying spammer
  if (hp && hp.trim().length > 0) {
    return sendResponse(res, 200, {
      success: true,
      message: 'Thanks! Your message has been sent successfully.',
    });
  }

  // 2. Strict Input Validation
  const cleanName = (name || '').trim();
  const cleanEmail = (email || '').trim();
  const cleanSubject = (subject || '').trim();
  const cleanMessage = (message || '').trim();

  if (!cleanName || cleanName.length < 2) {
    return sendResponse(res, 400, {
      success: false,
      error: 'Please provide a valid name (at least 2 characters).',
    });
  }
  if (cleanName.length > 100) {
    return sendResponse(res, 400, {
      success: false,
      error: 'Name is too long (maximum 100 characters).',
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!cleanEmail || !emailRegex.test(cleanEmail)) {
    return sendResponse(res, 400, {
      success: false,
      error: 'Please provide a valid email address.',
    });
  }
  if (cleanEmail.length > 150) {
    return sendResponse(res, 400, {
      success: false,
      error: 'Email is too long (maximum 150 characters).',
    });
  }

  if (!cleanMessage || cleanMessage.length < 5) {
    return sendResponse(res, 400, {
      success: false,
      error: 'Please write a message with at least 5 characters.',
    });
  }
  if (cleanMessage.length > 3000) {
    return sendResponse(res, 400, {
      success: false,
      error: 'Message exceeds the maximum limit of 3,000 characters.',
    });
  }

  if (cleanSubject.length > 150) {
    return sendResponse(res, 400, {
      success: false,
      error: 'Subject is too long (maximum 150 characters).',
    });
  }

  // 3. Duplicate submission prevention (within 60s)
  const submissionKey = `${clientIp}-${cleanName}-${cleanEmail}-${cleanMessage.slice(0, 50)}`;
  const lastSubTime = recentSubmissions.get(submissionKey);
  if (lastSubTime && now - lastSubTime < 60000) {
    return sendResponse(res, 429, {
      success: false,
      error: 'Duplicate message detected. Please wait a minute before resending.',
    });
  }

  // 4. Retrieve Google Apps Script Web App URL from server environment
  const appsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
  if (!appsScriptUrl || !appsScriptUrl.startsWith('https://script.google.com/macros/s/')) {
    console.error(
      'GOOGLE_APPS_SCRIPT_URL is not configured or invalid. Check Vercel environment variables.'
    );
    return sendResponse(res, 503, {
      success: false,
      error:
        'The server is not yet configured with the Google Apps Script Web App URL (GOOGLE_APPS_SCRIPT_URL). Please set it in Vercel settings.',
    });
  }

  // 5. Dispatch to Google Apps Script Web App
  try {
    const payload = {
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      message: cleanMessage,
    };

    const response = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(payload),
      redirect: 'follow', // Google Apps Script redirects to script.googleusercontent.com
    });

    const responseText = await response.text();
    let responseData: any = {};
    try {
      responseData = JSON.parse(responseText);
    } catch {
      responseData = { text: responseText };
    }

    if (!response.ok || (responseData && responseData.success === false)) {
      console.error('Google Apps Script returned an error:', response.status, responseText);
      return sendResponse(res, 502, {
        success: false,
        error: responseData?.error || 'Something went wrong. Please try again.',
      });
    }

    // Update rate limiting & duplicate cache on successful dispatch
    rateRecord.count += 1;
    rateLimitMap.set(clientIp, rateRecord);
    recentSubmissions.set(submissionKey, now);

    return sendResponse(res, 200, {
      success: true,
      message: 'Thanks! Your message has been sent successfully.',
    });
  } catch (err: any) {
    console.error('Failed to reach Google Apps Script Web App:', err);
    return sendResponse(res, 500, {
      success: false,
      error: 'Something went wrong. Please try again.',
    });
  }
}
