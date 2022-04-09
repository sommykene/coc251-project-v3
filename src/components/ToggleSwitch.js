import React, { useState } from "react";
import { color } from "../assets/colors/colors";

function ToggleSwitch() {
  const [language, setLanguage] = useState({
    en: true,
    enig: false,
    ig: false,
  });

  return (
    <div style={styles.container}>
      <div style={styles.toggle}>
        <span style={styles.dot}></span>
        <span style={styles.active}></span>
        <span style={styles.dot}></span>
      </div>
      <div style={styles.lang}>
        <span>EN</span>
        <span>EN/IG</span>
        <span>IG</span>
      </div>
    </div>
  );
}

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
