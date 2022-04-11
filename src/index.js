import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import "./assets/fonts/BalsamiqSans-Regular-Igbo.otf";
import "./assets/fonts/BalsamiqSans-Regular.ttf";

// import "./i18n";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_en from "./translations/en/common.json";
import common_ig from "./translations/ig/common.json";
import common_enig from "./translations/enig/common.json";
import LoginScreen from "./screens/auth/LoginScreen";
import SignUpScreen from "./screens/auth/SignUpScreen";

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
    <Router>
      <I18nextProvider i18n={i18next}>
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
        </Routes>
      </I18nextProvider>
    </Router>
  </React.StrictMode>
);
