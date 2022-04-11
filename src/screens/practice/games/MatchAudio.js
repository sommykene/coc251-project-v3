import React from "react";
import { icon } from "../../../assets/images";
import BottomColorStrip from "../../../components/BottomColorStrip";
import LeaveButton from "../../../components/LeaveButton";
import HomeButton from "../../../components/HomeButton";
import ProgressBar from "../../../components/ProgressBar";
import TextDisplay from "../components/TextDisplay";
import AudioDisplay from "../components/AudioDisplay";
import { Spacer } from "../../../components/utils";
import { color } from "../../../assets/colors/colors";
import { useTranslation } from "react-i18next";

function MatchAudio() {
  const { t, i18n } = useTranslation("common");
  const selected = 6;

  return (
    <div
      style={{
        height: "100%",
        padding: "50px 0",
      }}
    >
      <BottomColorStrip page={"learn"} />
      <ProgressBar />
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flex: 1 }}></div>
        <div
          style={{
            flex: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextDisplay text="Welcome" width="60%" />
          <Spacer height="20px" />
          <p className="subtitle" style={{ color: color.darkgrey }}>
            Select the Igbo audio to match the word or phrase
          </p>
          <Spacer height="50px" />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              width: "60%",
              justifyContent: "space-evenly",
            }}
          >
            <div style={{ flexBasis: "calc(50% - 40px)" }}>
              <AudioDisplay text={"ụtụtụ ọma"} showanswers={true} />
            </div>
            <div style={{ flexBasis: "calc(50% - 40px)" }}>
              <AudioDisplay
                selected={true}
                text={"ka ọ dị"}
                showanswers={true}
              />
            </div>
            <div style={{ flexBasis: "calc(50% - 40px)" }}>
              <AudioDisplay text={"nnọọ"} showanswers={true} />
            </div>
            <div style={{ flexBasis: "calc(50% - 40px)" }}>
              <AudioDisplay text={"kedu ka ị mere"} showanswers={true} />
            </div>
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
      <HomeButton />
      <LeaveButton link="/practice" />
    </div>
  );
}

export default MatchAudio;
