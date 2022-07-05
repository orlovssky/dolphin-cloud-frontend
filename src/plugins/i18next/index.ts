import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getValue } from "services/utils/common/localStorage.utils";

import cnCommon from "./locales/cn/common.json";
import enCommon from "./locales/en/common.json";
import ruCommon from "./locales/ru/common.json";

i18n.use(initReactI18next).init({
  lng: getValue("dolphin-locale") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
  ns: ["common"],
  defaultNS: "common",
  resources: {
    en: { common: enCommon },
    ru: { common: ruCommon },
    cn: { common: cnCommon },
  },
});

export default i18n;
