import React, { useState } from "react";
import { icon } from "../../../assets/images";
import BottomColorStrip from "../../../components/BottomColorStrip";
import LeaveButton from "../../../components/LeaveButton";
import HomeButton from "../../../components/HomeButton";
import ProgressBar from "../../../components/ProgressBar";
import { Spacer } from "../../../components/utils";
import { color } from "../../../assets/colors/colors";
import { useTranslation } from "react-i18next";
import AudioDisplay from "../components/AudioDisplay";
import IgboLetterButtons from "../components/IgboLetterButtons";
import TextDisplay from "../components/TextDisplay";

const Main = () => {
  const { t, i18n } = useTranslation("common");
  const selected = 6;
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSpecialLetters = (letter) => {
    setValue(value + letter);
  };

  return (
    <div style={{ display: "flex", height: "100%", paddingBottom: "50px" }}>
      <div style={{ flex: 1 }}></div>
      <div
        style={{
          flex: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <TextDisplay text="Welcome" width="60%" />
        <Spacer height="10px" />
        <p className="subtitle" style={{ color: color.darkgrey }}>
          Translate the word or phrase
        </p>
        <div style={{ flex: 1 }}></div>
        <input
          type="text"
          style={styles.input}
          value={value}
          onChange={handleChange}
        />
        <Spacer height="40px" />
        <IgboLetterButtons
          addInput={(letter) => handleSpecialLetters(letter)}
        />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {selected && (
          <>
            <img src={icon.check} />
            <p className="balsamiq-ig subtitle">{t("check")}</p>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  input: {
    backgroundColor: "transparent",
    color: color.black,
    outline: "none",
    outlineStyle: "none",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: `3px ${color.darkgrey} solid`,
    padding: "3px 10px",
    width: "80%",
    height: "100px",
    fontSize: "25px",
    textAlign: "center",
  },
};

function TranslateText() {
  return (
    <div
      style={{
        height: "100%",
        padding: "50px 0",
      }}
    >
      <BottomColorStrip page={"learn"} />
      <ProgressBar />
      <Main />
      <HomeButton />
      <LeaveButton link="/practice" />
    </div>
  );
}

export default TranslateText;
