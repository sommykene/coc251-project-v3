import React, { useEffect } from "react";
import EnglishWordsList from "./components/EnglishWordsList";
import sound from "../../../assets/sound.wav";
import { color } from "../../../assets/colors/colors";
import TranslationGrid from "../../../components/TranslationsGrid";
import { icon } from "../../../assets/images";
import BottomColorStrip from "../../../components/BottomColorStrip";
import { useTranslation } from "react-i18next";
import VocabDisplay from "./components/VocabDisplay";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.svg";

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
      <LeaveButton />
    </div>
  );
}

const LeaveButton = () => {
  const { t, i18n } = useTranslation("common");
  useEffect(() => {
    i18n.changeLanguage("enig");
  }, []);

  return (
    <Link to="/learn/1/details?tab=viewlessons">
      <div
        className="balsamiq-ig"
        style={{
          position: "absolute",
          bottom: "50px",
          right: "50px",
          width: "fit-content",
          backgroundColor: color.red,
          color: color.white,
          padding: "10px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <img style={{ height: "20px" }} src={icon.backarrow.white} />
        <span>{t("leave")}</span>
      </div>
    </Link>
  );
};

const HomeButton = () => {
  const { t, i18n } = useTranslation("common");
  useEffect(() => {
    i18n.changeLanguage("enig");
  }, []);

  return (
    <Link to="/">
      <div
        className="balsamiq-ig"
        style={{
          position: "absolute",
          bottom: "50px",
          left: "50px",
          width: "fit-content",
          backgroundColor: color.white,
          color: color.black,
          padding: "10px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <img style={{ height: "20px" }} src={Logo} />
        <span>{t("home")}</span>
      </div>
    </Link>
  );
};

const ProgressBar = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "60px",
        right: "60px",
        top: 20,
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <p
          style={{
            flex: 1.5,
          }}
          className="subtitle balsamiq-ig"
        >
          Greeting (Ndewdoo)
        </p>
        <div
          style={{
            height: "15px",
            backgroundColor: color.green,
            borderRadius: "50px",
            flex: 1,
          }}
        ></div>
        <div
          style={{
            height: "15px",
            backgroundColor: color.green,
            borderRadius: "50px",
            flex: 0.5,
          }}
        ></div>
        <div
          style={{
            height: "15px",
            backgroundColor: color.green,
            borderRadius: "50px",
            flex: 0.5,
          }}
        ></div>
        <div
          style={{
            height: "15px",
            backgroundColor: color.green,
            borderRadius: "50px",
            flex: 0.5,
          }}
        ></div>
        <div
          style={{
            height: "15px",
            backgroundColor: color.red,
            borderRadius: "50px",
            flex: 0.5,
          }}
        ></div>
        <div
          style={{
            height: "15px",
            backgroundColor: color.yellow,
            borderRadius: "50px",
            flex: 0.5,
          }}
        ></div>
        <div
          style={{
            height: "15px",
            backgroundColor: color.lightgrey,
            borderRadius: "50px",
            flex: 0.5,
          }}
        ></div>
        <div
          style={{
            height: "15px",
            backgroundColor: color.lightgrey,
            borderRadius: "50px",
            flex: 1,
          }}
        ></div>
      </div>
    </div>
  );
};

export default LessonLayoutPage;
