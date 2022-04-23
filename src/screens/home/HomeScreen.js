import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import ProfileCard from "../../components/ProfileCard";
import WordOfTheDayCard from "./componenets/WordOfTheDayCard";

import { color } from "../../assets/colors/colors";
import "./HomeScreen.css";
import { icon } from "../../assets/images";
import { AddFiles } from "../../firebaseapi/firestore";

function HomeScreen() {
  const { t, i18n } = useTranslation("common");
  const navigate = useNavigate();

  return (
    <div id="homescreen" className="balsamiq-ig">
      {/* ROWONE */}
      <div style={{ marginBottom: "30px" }} className="rowone">
        {/* Profile */}
        <div style={{ flex: 1 }}>
          <ProfileCard home={true} />
        </div>
        <button type="button" onClick={AddFiles}>
          Click Me!
        </button>
        {/* learn */}
        <div style={{ flex: 2 }}>
          <Link to="/learn">
            <div style={{ backgroundColor: color.learn }} className="card">
              <img
                style={{ height: "150px", width: "150px" }}
                src={icon.learn.large}
              />
              <span style={{ fontSize: "24pt", color: color.white }}>
                {t("learn")}
              </span>
            </div>
          </Link>
        </div>

        {/* Practice */}
        <div style={{ flex: 2 }}>
          <Link to="/practice">
            <div style={{ backgroundColor: color.practice }} className="card">
              <img
                style={{ height: "150px", width: "150px" }}
                src={icon.practice.large}
              />
              <span style={{ fontSize: "24pt", color: color.black }}>
                {t("practice")}
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* ROWTWO */}
      <div className="rowtwo">
        {/* vocabulary */}
        <div style={{ flex: 2 }}>
          <Link to="/vocab">
            <div style={{ backgroundColor: color.vocab }} className="card">
              <img
                style={{ height: "150px", width: "150px" }}
                src={icon.vocab.large}
              />
              <span style={{ fontSize: "24pt", color: color.black }}>
                {t("vocab")}
              </span>
            </div>
          </Link>
        </div>

        {/* word of the day */}
        <div style={{ flex: 1.5 }}>
          <WordOfTheDayCard />
        </div>

        {/* culture */}
        <div style={{ flex: 2 }}>
          <Link to="/culture">
            <div style={{ backgroundColor: color.culture }} className="card">
              <img
                style={{ height: "150px", width: "150px" }}
                src={icon.culture.large}
              />
              <span style={{ fontSize: "24pt", color: color.white }}>
                {t("culture")}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
