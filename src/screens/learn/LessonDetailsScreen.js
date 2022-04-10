import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { color } from "../../assets/colors/colors";
import NavigationCard from "../../components/NavigationCard";
import ProfileCard from "../../components/ProfileCard";
import LessonCard from "./components/LessonCard";
import DetailsCard from "./components/DetailsCard";
import BottomColorStrip from "../../components/BottomColorStrip";
import { Spacer } from "../../components/utils";

function LessonDetailsScreen() {
  const { t, i18n } = useTranslation("common");
  const [tab, setTab] = useState("viewtopics");
  const page = "learn";

  const handleTabChange = (name) => {
    setTab(name);
  };

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <div style={{ flex: 1 }}>
        <ProfileCard />
        <Spacer height="20px" />
        <NavigationCard page={page} />
        <Spacer height="20px" />
        <LevelDisplay />
        <BottomColorStrip page={page} />
      </div>

      {/* MAIN BODY */}
      <div style={{ flex: 4 }}>
        <span className="pagetitle balsamiq-ig">{t("igbolessons")}</span>
        <Spacer height="20px" />
        <LessonCard
          title={"Greeting - Ndewoo"}
          description={true}
          tab={tab}
          setTab={(tabname) => handleTabChange(tabname)}
        />
        <Spacer height="40px" />
        {/* TABS */}
        <p className="subtitle balsamiq-ig">{t(tab)}</p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          {tab !== "lessonnotes" ? (
            <>
              <DetailsCard title={"Greeting"} page="viewtopics" />
              <DetailsCard title={"Introduction"} page="viewtopics" />
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const LevelDisplay = () => {
  return (
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
      <Spacer height="3px" />
      <span style={{ fontSize: "20px" }}>Beginner</span>
    </div>
  );
};

export default LessonDetailsScreen;
