import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { color } from "../../../assets/colors/colors";

function LessonCard({ title, description, tab, setTab }) {
  const { t, i18n } = useTranslation("common");

  return (
    <div
      style={{ height: description ? "100px" : "70px", padding: "0 30px" }}
      className="card"
    >
      <div style={styles.main}>
        <p style={styles.lessonsTitle}>{title}</p>
        <div style={styles.buttons} className="balsamiq-ig">
          <p
            style={tab !== "viewtopics" ? styles.button : styles.buttonSelected}
            onClick={() => setTab("viewtopics")}
          >
            {t("viewtopics")}
          </p>
          <p
            style={
              tab !== "lessonnotes" ? styles.button : styles.buttonSelected
            }
            onClick={() => setTab("lessonnotes")}
          >
            {t("lessonnotes")}
          </p>
        </div>
      </div>
      {description && (
        <span style={styles.description}>
          In this lesson we will be learning how to say basic greetings and
          introductions
        </span>
      )}
    </div>
  );
}

const styles = {
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
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
    padding: "10px 10px 5px",
    color: color.darkgrey,
    cursor: "pointer",
  },
  buttonSelected: {
    borderRadius: "10px",
    padding: "10px 10px 5px",
    backgroundColor: color.yellow,
    cursor: "pointer",
  },
  description: {
    fontSize: "18px",
    color: color.darkgrey,
  },
};

export default LessonCard;
