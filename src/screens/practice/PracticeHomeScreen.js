import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { color } from "../../assets/colors/colors";
import Sidebar from "../../components/Sidebar";
import BottomColorStrip from "../../components/BottomColorStrip";
import { icon } from "../../assets/images";
import { Spacer } from "../../components/utils";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getLessonsTillNumber } from "../../firebaseapi/firestore";
import useAuth from "../../services/AuthProvider";

function PracticeHomeScreen() {
  const { t, i18n } = useTranslation("common");
  const page = "practice";

  const [selectedGameInitials, setSelectedGameInitials] = useState("ma");
  const [selectedGameName, setSelectedGameName] = useState("Matching Audio");
  const [lessonSelector, showLessonSelector] = useState(false);

  const handleGameSelected = (gameInitials, gameName) => {
    setSelectedGameInitials(gameInitials);
    setSelectedGameName(gameName);
    showLessonSelector(true);
  };

  return (
    <div
      style={{ display: "flex", gap: "30px" }}
      onClick={() => {
        lessonSelector && showLessonSelector(false);
      }}
    >
      <div style={{ flex: 1 }}>
        <Sidebar page={page} />
        <BottomColorStrip page={page} />
      </div>

      {/* MAIN BODY */}
      <div style={{ flex: 4 }}>
        <span className="pagetitle balsamiq-ig">{t(page)}</span>
        <div style={styles.main}>
          {lessonSelector && (
            <LessonSelector
              gameInitials={selectedGameInitials}
              gameName={selectedGameName}
            />
          )}
          {/* Matching Audio */}
          <div
            style={styles.options}
            onClick={() => handleGameSelected("ma", "Matching Audio")}
          >
            <div className="card" style={styles.innercard}>
              <img style={styles.image} src={icon.games.ma} />
              <p className="balsamiq-ig subtitle">Matching Audio</p>
            </div>
          </div>

          {/* Matching the Translations */}
          <div
            style={styles.options}
            onClick={() =>
              handleGameSelected("mt", "Matching the Translations")
            }
          >
            <div className="card" style={styles.innercard}>
              <img style={styles.image} src={icon.games.mt} />
              <p className="balsamiq-ig subtitle">Matching the Translations</p>
            </div>
          </div>

          {/* Spell Out What You Hear */}
          <div
            style={styles.options}
            onClick={() => handleGameSelected("sa", "Spell Out What You Hear")}
          >
            <div className="card" style={styles.innercard}>
              <img style={styles.image} src={icon.games.sa} />
              <p className="balsamiq-ig subtitle">Spell Out What You Hear</p>
            </div>
          </div>

          {/* LOCKED */}
          {/* Matching Multiple Audio */}
          <div style={styles.options}>
            <LockedOverlay xpCost={1000} />
            <div className="card" style={styles.innercard}>
              <img style={styles.image} src={icon.games.mma} />
              <p className="balsamiq-ig subtitle">Matching Multiple Audio</p>
            </div>
          </div>

          {/* Translating Audio to a Word or Phrase */}
          <div style={styles.options}>
            <div className="card" style={styles.innercard}>
              <LockedOverlay xpCost={1100} />
              <img style={styles.image} src={icon.games.ta} />
              <p className="balsamiq-ig subtitle">
                Translating Audio to a Word or Phrase
              </p>
            </div>
          </div>

          {/* Translating the Word or Phrase */}
          <div style={styles.options}>
            <div className="card" style={styles.innercard}>
              <LockedOverlay xpCost={1200} />
              <img style={styles.image} src={icon.games.tt} />
              <p className="balsamiq-ig subtitle">
                Translating the Word or Phrase
              </p>
            </div>
          </div>
          <div style={styles.options}></div>
          <div style={styles.options}></div>
        </div>
      </div>
    </div>
  );
}

const LessonSelector = ({ gameName, gameInitials }) => {
  const { currentUser } = useAuth();
  const [lessonsList, setLessonsList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getLessons = async () => {
      const list = await getLessonsTillNumber(currentUser.currentLessonNumber);
      setLessonsList(list);
    };

    getLessons();
  }, []);

  return (
    <div className="card" style={styles.lessonSelector}>
      <p className="balsamiq-ig pagetitle" style={{ margin: 15 }}>
        Select Lesson
      </p>
      <p className="balsamiq-ig" style={{ margin: 0, color: color.red }}>
        Game: {gameName}
      </p>
      <p className="balsamiq-ig" style={{ color: color.darkgrey }}>
        Vocabulary will be selected from the lesson
      </p>
      {lessonsList.length > 0 &&
        lessonsList.map((lesson, index) => {
          return (
            <p
              key={index}
              style={{
                backgroundColor: color.duckegg,
                padding: "10px",
                borderRadius: "10px",
                width: "90%",
                margin: 5,
                cursor: "pointer",
              }}
              onClick={() => navigate(`${gameInitials}/${lesson.lessonID}`)}
            >
              {lesson.name}
            </p>
          );
        })}
    </div>
  );
};

const LockedOverlay = ({ xpCost }) => {
  const handleLocked = () => {
    toast.info(`This games is locked. You need ${xpCost}XP to unlock`);
  };
  return (
    <div onClick={handleLocked}>
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: color.darkgrey,
          opacity: "0.5",
          borderRadius: "10px",
        }}
      ></div>
      <p
        className="balsamiq-ig"
        style={{
          position: "absolute",
          top: 0,
          right: 20,
          backgroundColor: color.duckegg,
          padding: "5px",
          borderRadius: "10px",
          color: color.black,
        }}
      >
        Locked: {xpCost}XP
      </p>
    </div>
  );
};
const styles = {
  main: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: "15px",
    marginTop: "20px",
    position: "relative",
  },
  options: { flex: "1 0 30%", position: "relative" },
  innercard: {
    backgroundColor: color.white,
    color: color.black,
    height: "30vh",
  },
  image: { height: "150px", marginBottom: "20px" },
  lessonSelector: {
    position: "absolute",
    boxShadow: "0 8px 6px -6px black",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    margin: "auto",
    backgroundColor: color.white,
    border: "3px black solid",
    zIndex: 1000,
    width: "40%",
    display: "flex",
    justifyContent: "flex-start",
  },
};

export default PracticeHomeScreen;
