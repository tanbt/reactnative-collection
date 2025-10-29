import { TOptionsBase } from "i18next";
import { useTranslation } from "react-i18next";

import { en } from "./translate/en";

export function useDefaultTranslation() {
  const { t } = useTranslation();

  return (
    enValue: string,
    options?: TOptionsBase & object & { [key: string]: string | number }
  ) => {
    let key = null;

    let count = 0;
    for (const k in en) {
      if ((en as any)[k] === enValue) {
        count++;
        key = k;
      }
    }

    if (!key || count === 0) {
      throw new Error(`Invalid translation at content: ${enValue}`);
    }
    if (count > 1) {
      console.error(`There is duplicated translation for content: ${enValue}`);
    }
    return options ? t(key, options) : t(key);
  };
}

/**
 * Hook to get the current locale string for date formatting
 * @returns Locale string (e.g., "en-US", "vi-VN", "fi-FI")
 */
export function useLocale(): string {
  const { i18n } = useTranslation();
  
  // Map language codes to full locale strings
  const localeMap: { [key: string]: string } = {
    en: "en-US",
    vi: "vi-VN",
    fi: "fi-FI",
  };
  
  return localeMap[i18n.language] || "en-US";
}
