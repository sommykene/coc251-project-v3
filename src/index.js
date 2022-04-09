import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./assets/fonts/BalsamiqSans-Regular-Igbo.otf";
import "./assets/fonts/BalsamiqSans-Regular.ttf";

// import "./i18n";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_en from "./translations/en/common.json";
import common_ig from "./translations/ig/common.json";
import common_enig from "./translations/enig/common.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      common: common_en,
    },
    enig: {
      common: common_enig,
    },
    ig: {
      common: common_ig,
    },
  },
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
