import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { color } from "../../assets/colors/colors";
import Sidebar from "../../components/Sidebar";
import { Spacer } from "../../components/utils";
import TopicCard from "./components/TopicCard";
import BottomColorStrip from "../../components/BottomColorStrip";
import { lessonsData } from "../../data/lessonsData";

function LearnHomeScreen() {
  const { t, i18n } = useTranslation("common");
  const page = "learn";

  const topicCard = lessonsData.map((lessons) => {
    return (
      <TopicCard
        key={lessons.topicid}
        topicid={lessons.topicid}
        title={lessons.title}
      />
    );
  });

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <div style={{ flex: 1 }}>
        <Sidebar page={page} />
        <Spacer height="20px" />
        <BottomColorStrip page={page} />
      </div>

      {/* MAIN BODY */}
      <div style={{ flex: 4 }}>
        <span className="pagetitle balsamiq-ig">{t("igbolessons")}</span>
        <div style={styles.main}>{topicCard}</div>
      </div>
    </div>
  );
}
const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "20px",
  },
};
export default LearnHomeScreen;
