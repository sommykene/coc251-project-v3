import React, { useEffect } from "react";
import EnglishWordsList from "./components/EnglishWordsList";
import sound from "../../assets/sound.wav";
import { color } from "../../assets/colors/colors";
import TranslationGrid from "../../components/TranslationsGrid";
import { icon } from "../../assets/images";
import BottomColorStrip from "../../components/BottomColorStrip";
import { useTranslation } from "react-i18next";
import VocabDisplay from "./components/VocabDisplay";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import LeaveButton from "../../components/LeaveButton";
import HomeButton from "../../components/HomeButton";
import ProgressBar from "../../components/ProgressBar";

const data = [
  { english: "Welcome", igbo: "nnọọ", sound: sound },
  { english: "Good Morning", igbo: "ụtụtụ ọma", sound: sound },
  { english: "Welcome", igbo: "nnọọ", sound: sound },
  { english: "Good Morning", igbo: "ụtụtụ ọma", sound: sound },
  { english: "Welcome", igbo: "nnọọ", sound: sound },
  { english: "Good Morning", igbo: "ụtụtụ ọma", sound: sound },
  { english: "Welcome", igbo: "nnọọ", sound: sound },
  { english: "Good Morning", igbo: "ụtụtụ ọma", sound: sound },
];

function LessonLayoutPage() {
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
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={icon.prev} />
        </div>
        <div
          style={{
            flex: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <EnglishWordsList data={data} /> */}
          <VocabDisplay />
          {/* <TranslationGrid data={data} /> */}
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={icon.next} />
        </div>
      </div>
      <HomeButton />
      <LeaveButton link="/learn/1/details?tab=viewlessons" />
    </div>
  );
}

export default LessonLayoutPage;
