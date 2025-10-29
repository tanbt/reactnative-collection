import "intl-pluralrules";
import { getLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./translate/en";
import { vi } from "./translate/vi";
import { fi } from "./translate/fi";

const supportedLanguages = ["en", "vi", "fi"];
export const DEFAULT_LANGUAGE = "en";

function getLanguageCode() {
  // This happens when run unit test
  if (!getLocales() || getLocales().length === 0 || !getLocales()[0]) {
    return DEFAULT_LANGUAGE;
  }

  const systemLan = getLocales()[0].languageCode || DEFAULT_LANGUAGE;
  if (supportedLanguages.includes(systemLan)) {
    return systemLan;
  }

  return DEFAULT_LANGUAGE;
}

const systemLan = getLanguageCode() || DEFAULT_LANGUAGE;
export const isVietnamese = () => systemLan === "vi";

export const i18nSetup = (appLan = "en") =>
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      vi: { translation: vi },
      fi: { translation: fi },
    },
    lng: appLan,
    fallbackLng: "en",
  });
