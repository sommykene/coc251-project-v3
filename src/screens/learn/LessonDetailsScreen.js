import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { color } from "../../assets/colors/colors";
import NavigationCard from "../../components/NavigationCard";
import ProfileCard from "../../components/ProfileCard";
import LessonCard from "./components/LessonCard";
import DetailsCard from "./components/DetailsCard";

function LessonDetailsScreen() {
  const { t, i18n } = useTranslation("common");
  const [tab, setTab] = useState("viewtopics");

  const handleTabChange = (name) => {
    setTab(name);
  };

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
        <br />
        <br />
        <LessonCard
          title={"Greeting - Ndewoo"}
          description={true}
          tab={tab}
          setTab={(tabname) => handleTabChange(tabname)}
        />
        <br />
        <br />
        {/* TABS */}
        <p style={{ fontSize: "20px", margin: "0" }} className="balsamiq-ig">
          {t(tab)}
        </p>

        {/* VIEW TOPICS */}
        {tab === "viewtopics" && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            <DetailsCard title={"Greeting"} page="viewtopics" />
            <DetailsCard title={"Introduction"} page="viewtopics" />
          </div>
        )}

        {/* LESSON NOTES */}
        {tab === "lessonnotes" && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            <DetailsCard
              title={"Greeting"}
              page="lessonnotes"
              description={true}
            />
            <DetailsCard
              title={"Introduction"}
              page="lessonnotes"
              description={true}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default LessonDetailsScreen;
