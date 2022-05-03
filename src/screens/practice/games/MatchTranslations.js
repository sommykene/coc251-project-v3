import React from "react";
import { icon } from "@assets/images";
import BottomColorStrip from "@components/BottomColorStrip";
import LeaveButton from "@components/LeaveButton";
import HomeButton from "@components/HomeButton";
import ProgressBar from "@components/ProgressBar";
import { Spacer } from "@components/utils";
import { color } from "@assets/colors/colors";
import { useTranslation } from "react-i18next";
import TranslationRowDisplay from "../components/TranslationRowDisplay";

const Main = () => {
  const { t, i18n } = useTranslation("common");
  const selected = 6;

  return (
    <div style={{ display: "flex", height: "100%" }}>
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
        <p className="subtitle" style={{ color: color.darkgrey }}>
          Match the English Words/Phrases to the Igbo Audio
        </p>
        <Spacer height="40px" />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            width: "60%",
            justifyContent: "space-evenly",
          }}
        >
          <TranslationRowDisplay vocab={{ english: "welcome", igbo: "nnọọ" }} />
          <TranslationRowDisplay
            vocab={{ english: "how are you?", igbo: "kedu ka ị mere?" }}
          />
          <TranslationRowDisplay vocab={{ english: "welcome", igbo: "nnọọ" }} />
          <TranslationRowDisplay vocab={{ english: "welcome", igbo: "nnọọ" }} />
          <TranslationRowDisplay vocab={{ english: "welcome", igbo: "nnọọ" }} />
          <TranslationRowDisplay vocab={{ english: "welcome", igbo: "nnọọ" }} />
        </div>
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

function MatchTranslations() {
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

export default MatchTranslations;
