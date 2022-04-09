import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { color } from "../../../assets/colors/colors";

function LessonCard() {
  const { t, i18n } = useTranslation("common");
  useEffect(() => {
    i18n.changeLanguage("ig");
  }, []);

  return (
    <div style={styles.card}>
      <p style={styles.lessonsTitle}>Greeting - Ndewoo</p>
      <div style={styles.buttons} className="balsamiq-ig">
        <p style={styles.button}>View Topics</p>
        <p style={styles.button}>Lesson Notes</p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "white",
    position: "relative",
    borderRadius: "10px",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "70px",
    padding: "0 30px",
  },
  lessonsTitle: {
    flex: 1,
    fontSize: "20px",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
  },
  button: {
    borderRadius: "10px",
    border: `1px ${color.darkgrey} solid`,
    padding: "5px 10px",
    color: color.darkgrey,
  },
};

export default LessonCard;
