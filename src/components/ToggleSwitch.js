import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { color } from "../assets/colors/colors";
import "./stylesheet.css";

function ToggleSwitch() {
  const { t, i18n } = useTranslation("common");

  const [language, setLanguage] = useState("enig");

  useEffect(() => {
    handleLanguageChange(language);
  }, []);

  const handleLanguageChange = (lang) => {
    // const lang = e.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };
  return (
    <div style={styles.container}>
      <div style={styles.toggle}>
        <Radio
          selected={language === "en"}
          value="en"
          onChange={(lang) => handleLanguageChange(lang)}
        />
        <Radio
          selected={language === "enig"}
          value="enig"
          onChange={(lang) => handleLanguageChange(lang)}
        />
        <Radio
          selected={language === "ig"}
          value="ig"
          onChange={(lang) => handleLanguageChange(lang)}
        />
      </div>
      <div style={styles.lang}>
        <span>EN</span>
        <span>EN/IG</span>
        <span>IG</span>
      </div>
    </div>
  );
}

const Radio = ({ selected, onChange, value }) => {
  return (
    <div
      onClick={() => {
        onChange(value);
      }}
      className={`lang-radio ${selected && "selected-lang-radio"}`}
    />
  );
};

const styles = {
  container: {
    width: "50%",
  },
  toggle: {
    border: `3px ${color.duckegg} solid`,
    borderRadius: "50px",
    padding: "5px",
    display: "flex",
    justifyContent: "space-between",
  },
  dot: {
    height: "15px",
    width: "15px",
    border: `1px ${color.black} solid`,
    borderRadius: "50%",
    display: "inline-block",
  },
  active: {
    height: "15px",
    width: "15px",
    borderRadius: "50%",
    display: "inline-block",
    backgroundColor: color.black,
  },
  lang: {
    display: "flex",
    justifyContent: "space-between",
    color: color.teal,
    paddingLeft: "6px",
    paddingRight: "6px",
  },
};

export default ToggleSwitch;
