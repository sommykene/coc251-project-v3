import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { color } from "../../../assets/colors/colors";

function DetailsLessonCard({ lessonid, title, description }) {
  const { t, i18n } = useTranslation("common");
  let params = useParams();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ height: "70px", padding: "0 30px" }} className="basic-card">
      <div style={styles.main}>
        <p style={styles.lessonsTitle}>{title}</p>
        <div style={styles.buttons} className="balsamiq-ig">
          <p
            style={
              searchParams.get("tab") !== "viewtopics"
                ? styles.button
                : styles.buttonSelected
            }
            onClick={() => {
              setSearchParams({ tab: "viewtopics" });
            }}
          >
            {t("viewtopics")}
          </p>
          <p
            style={
              searchParams.get("tab") !== "lessonnotes"
                ? styles.button
                : styles.buttonSelected
            }
            onClick={() => {
              setSearchParams({ tab: "lessonnotes" });
            }}
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
    alignItems: "center",
  },
  button: {
    borderRadius: "10px",
    border: `1px ${color.darkgrey} solid`,
    padding: "10px 10px 5px",
    color: color.darkgrey,
    cursor: "pointer",
    height: "fit-content",
  },
  buttonSelected: {
    borderRadius: "10px",
    padding: "10px 10px 5px",
    backgroundColor: color.yellow,
    cursor: "pointer",
    color: color.black,
  },
  description: {
    fontSize: "18px",
    color: color.darkgrey,
  },
};

export default DetailsLessonCard;
