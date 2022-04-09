import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { color } from "../../assets/colors/colors";
import NavigationCard from "../../components/NavigationCard";
import ProfileCard from "../../components/ProfileCard";
import LessonCard from "./components/LessonCard";

function LearnHomeScreen() {
  const { t, i18n } = useTranslation("common");

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <div style={{ flex: 1 }}>
        <ProfileCard />
        <br />
        <NavigationCard page={"learn"} />
        <br />
        <div
          style={{
            border: `1.5px ${color.teal} solid`,
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <span
            className="balsamiq-ig"
            style={{ color: color.darkgrey, fontSize: "20px" }}
          >
            Level
          </span>
          <br />
          <span style={{ fontSize: "20px" }}>Beginner</span>
        </div>
      </div>

      {/* MAIN BODY */}
      <div style={{ flex: 4 }}>
        <span className="pagetitle balsamiq-ig">{t("igbolessons")}</span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <LessonCard title={"Greeting - Ndewoo"} />
          <LessonCard title={"Greeting - Ndewoo"} />
          <LessonCard title={"Greeting - Ndewoo"} />
          <LessonCard title={"Greeting - Ndewoo"} />
          <LessonCard title={"Greeting - Ndewoo"} />
        </div>
      </div>
    </div>
  );
}

export default LearnHomeScreen;
