import { createI18n } from "vue-i18n";

const messages = {
  en: {
    navbar: {
      home: "Home",
      aboutme: "About me",
    },
    home: {
      title: "Projects",
    },
  },
  /* ************************************ */
  /* ******  ITALIANO******************** */
  /* ************************************ */
  it: {
    navbar: {
      home: "Home",
      aboutme: "About me",
    },
    home: {
      title: "Progetti",
    }
  },
};

const i18n = createI18n({
  locale: localStorage.getItem("language") || "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;
