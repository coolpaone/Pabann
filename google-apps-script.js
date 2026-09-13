/**
 * Google Apps Script for Contact Form Submissions
 * 
 * Instructions:
 * 1. In your Google Sheet, click Extensions > Apps Script.
 * 2. Delete any code in Code.gs and replace it with this entire script.
 * 3. Click Save (floppy disk icon).
 * 4. Click Deploy > New deployment.
 * 5. Select type: "Web app".
 * 6. Set:
 *    - Description: "Website Contact Form Webhook"
 *    - Execute as: "Me (<your-email>)"
 *    - Who has access: "Anyone" (allows your Vercel serverless function to POST data without exposing passwords)
 * 7. Click Deploy, Authorize access, and copy the Web App URL!
 */

// Optional: Change this if your sheet tab has a custom name (e.g. "Submissions" or "Sheet1")
var SHEET_NAME = "Sheet1";

function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait up to 30 seconds for other concurrent executions to finish
  try {
    lock.waitLock(30000);
  } catch (err) {
    return createJsonResponse({
      success: false,
      error: "Server is currently busy. Please try again in a few moments."
    }, 429);
  }

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return createJsonResponse({
        success: false,
        error: "Empty or invalid payload received."
      }, 400);
    }

    // Parse incoming payload
    var data = {};
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseErr) {
      // Fallback if URL-encoded form data was passed
      data = e.parameter || {};
    }

    // 1. Honeypot check (anti-spam)
    if (data.hp && String(data.hp).trim().length > 0) {
      // Quietly succeed to fool bots without adding spam to your sheet
      return createJsonResponse({
        success: true,
        message: "Submission received."
      }, 200);
    }

    // 2. Validate required fields
    var name = (data.name || "").toString().trim();
    var email = (data.email || "").toString().trim();
    var message = (data.message || "").toString().trim();
    var subject = (data.subject || "").toString().trim();

    if (!name || name.length < 2) {
      return createJsonResponse({
        success: false,
        error: "Name must be at least 2 characters long."
      }, 400);
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return createJsonResponse({
        success: false,
        error: "A valid email address is required."
      }, 400);
    }

    if (!message || message.length < 5) {
      return createJsonResponse({
        success: false,
        error: "Message must be at least 5 characters long."
      }, 400);
    }

    // 3. Open the Google Spreadsheet
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.getSheets()[0];

    // 4. Auto-initialize Header Row if sheet is completely empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Message"]);
      // Format header row with styling
      var headerRange = sheet.getRange(1, 1, 1, 4);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#0c142c");
      headerRange.setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }

    // 5. Generate current timestamp
    var timestamp = new Date();

    // If a subject was provided in the contact form, prepend it cleanly to the message
    var fullMessage = subject ? ("[" + subject + "]\n" + message) : message;

    // 6. Append row to Google Sheet (Never overwrites existing entries)
    sheet.appendRow([
      timestamp,
      name,
      email,
      fullMessage
    ]);

    return createJsonResponse({
      success: true,
      message: "Row added successfully."
    }, 200);

  } catch (error) {
    return createJsonResponse({
      success: false,
      error: "Apps Script error: " + error.toString()
    }, 500);
  } finally {
    // Release the concurrency lock
    lock.releaseLock();
  }
}

// Handle GET requests (useful for quickly checking if the Web App is online in a browser)
function doGet(e) {
  return createJsonResponse({
    status: "active",
    message: "Google Apps Script Contact Form Webhook is online and ready for POST requests."
  }, 200);
}

function createJsonResponse(data, statusCode) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
