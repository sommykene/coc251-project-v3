import React from "react";
import { useTranslation } from "react-i18next";

import ProfileCard from "../../components/ProfileCard";

import LearnIcon from "../../assets/images/icons/learn_icon_large.png";
import PracticeIcon from "../../assets/images/icons/practice_icon_large.png";
import VocabIcon from "../../assets/images/icons/vocab_icon_large.png";
import CultureIcon from "../../assets/images/icons/culture_icon_large.png";

import { color } from "../../assets/colors/colors";
import "./HomeScreen.css";
import WordOfTheDayCard from "./componenets/WordOfTheDayCard";

function HomeScreen() {
  const { t, i18n } = useTranslation("common");

  return (
    <div id="homescreen" className="balsamiq-ig">
      {/* ROWONE */}
      <div style={{ marginBottom: "30px" }} className="rowone">
        {/* Profile */}
        <div style={{ flex: 1 }}>
          <ProfileCard />
        </div>

        {/* learn */}
        <div style={{ flex: 2 }}>
          <div
            style={{ backgroundColor: color.teal }}
            className="section-cards"
          >
            <img style={{ height: "150px", width: "150px" }} src={LearnIcon} />
            <span style={{ fontSize: "24pt", color: "white" }}>
              {t("learn")}
            </span>
          </div>
        </div>

        {/* Practice */}
        <div style={{ flex: 2 }}>
          <div
            style={{ backgroundColor: color.duckegg }}
            className="section-cards"
          >
            <img
              style={{ height: "150px", width: "150px" }}
              src={PracticeIcon}
            />
            <span style={{ fontSize: "24pt" }}>{t("practice")}</span>
          </div>
        </div>
      </div>

      {/* ROWTWO */}
      <div className="rowtwo">
        {/* vocabulary */}
        <div style={{ flex: 2 }}>
          <div
            style={{ backgroundColor: color.yellow }}
            className="section-cards"
          >
            <img style={{ height: "150px", width: "150px" }} src={VocabIcon} />
            <span style={{ fontSize: "24pt" }}>{t("vocab")}</span>
          </div>
        </div>

        {/* word of the day */}
        <div style={{ flex: 1.5 }}>
          <WordOfTheDayCard />
        </div>

        {/* culture */}
        <div style={{ flex: 2 }}>
          <div style={{ backgroundColor: color.red }} className="section-cards">
            <img
              style={{ height: "150px", width: "150px" }}
              src={CultureIcon}
            />
            <span style={{ fontSize: "24pt", color: "white" }}>
              {t("culture")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
