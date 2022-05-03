import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { color } from "../../assets/colors/colors";
import Sidebar from "../../components/Sidebar";
import { Spacer } from "../../components/utils";
import TopicCard from "./components/TopicCard";
import BottomColorStrip from "../../components/BottomColorStrip";
import useAuth from "../../services/AuthProvider";
import { getTopics, getUserLevel } from "../../firebaseapi/firestore";

function LearnHomeScreen() {
  const { t, i18n } = useTranslation("common");
  const page = "learn";
  const { currentUser } = useAuth();
  const [levelName, setLevelName] = useState("");
  const [topicsList, setTopicsList] = useState([]);

  useEffect(() => {
    const getCurrentLevel = async (levelID) => {
      let name = await getUserLevel(levelID);
      setLevelName(name);
    };
    const getLevelTopics = async (levelID) => {
      let topics = await getTopics(levelID);
      setTopicsList(topics);
    };

    getCurrentLevel(currentUser.levelID);
    getLevelTopics(currentUser.levelID);
  }, []);

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <div style={{ flex: 1 }}>
        <Sidebar page={page} />
        <Spacer height="20px" />
        <BottomColorStrip page={page} />
      </div>

      {/* MAIN BODY */}
      <div style={{ flex: 4, paddingBottom: "50px" }}>
        <div style={styles.main}>
          <div>
            <span className="pagetitle balsamiq-ig">{t("igbolessons")}</span>
          </div>
          <span
            style={{ color: color.darkgrey }}
            className="subtitle balsamiq-ig"
          >
            Level: {levelName}
          </span>
        </div>
        <p
          className="balsamiq-ig"
          style={{ fontStyle: "italic", color: color.darkgrey }}
        >
          All lessons are taught in Central Igbo
        </p>
        <div style={styles.content}>
          {topicsList.map((topic) => {
            return (
              <TopicCard
                key={topic.topicID}
                topicID={topic.topicID}
                title={topic.name}
                description={topic.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
const styles = {
  main: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "20px",
  },
};
export default LearnHomeScreen;
