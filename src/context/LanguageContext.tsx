import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS, Translations } from '../data/translations';

type Language = 'en' | 'ne';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const STORAGE_KEY = 'paban_portfolio_lang';

// Helper to determine initial language safely across all environments
const getInitialLanguage = (): Language => {
  // 1. Check URL query param first (?lang=en or ?lang=ne)
  try {
    if (typeof window !== 'undefined' && window.location.search) {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'ne' || urlLang === 'en') return urlLang;
    }
  } catch {
    // ignore
  }

  // 2. Check localStorage
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'ne' || saved === 'en') return saved;
  } catch {
    // ignore
  }

  // 3. Check sessionStorage
  try {
    const savedSession = sessionStorage.getItem(STORAGE_KEY);
    if (savedSession === 'ne' || savedSession === 'en') return savedSession;
  } catch {
    // ignore
  }

  // 4. Check document.cookie
  try {
    if (typeof document !== 'undefined' && document.cookie) {
      const match = document.cookie.match(/(?:^|;\s*)paban_portfolio_lang=([a-z]{2})/);
      if (match && (match[1] === 'ne' || match[1] === 'en')) {
        return match[1] as Language;
      }
    }
  } catch {
    // ignore
  }

  // Default to English when a visitor first visits
  return 'en';
};

// Safe helper to write to all available storage layers
const persistLanguage = (lang: Language) => {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // ignore
  }
  try {
    sessionStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // ignore
  }
  try {
    document.cookie = `${STORAGE_KEY}=${lang}; path=/; max-age=31536000; SameSite=Lax`;
  } catch {
    // ignore
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    persistLanguage(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => {
      const nextLang: Language = prev === 'en' ? 'ne' : 'en';
      persistLanguage(nextLang);
      return nextLang;
    });
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = TRANSLATIONS[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
