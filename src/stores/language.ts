import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type Language = 'en' | 'es';

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  detectLanguage: () => Language;
}

// Browser language detection
const detectBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('es')) return 'es';
  return 'en';
};

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: 'en',
      setLanguage: (lang) => set({ language: lang }),
      detectLanguage: () => {
        const stored = get().language;
        if (stored) return stored;
        return detectBrowserLanguage();
      },
    }),
    {
      name: 'aunova-language',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
