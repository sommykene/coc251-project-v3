import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { color } from "../../../assets/colors/colors";

function DetailsLessonCard({ title }) {
  return (
    <div
      style={{
        height: "60px",
        padding: "0 20px",
      }}
      className="basic-card"
    >
      <div style={styles.main}>
        <p style={styles.topicTitle}>{title}</p>
        <div style={styles.buttons} className="balsamiq-ig">
          <Link to="/learn/1/lesson/1">
            <p style={styles.button}>Start</p>
          </Link>
        </div>
      </div>
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
  topicTitle: {
    flex: 1,
    fontSize: "20px",
    margin: "auto",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    cursor: "pointer",
  },
  button: {
    borderRadius: "10px",
    padding: "5px 10px",
    backgroundColor: color.green,
    color: color.white,
    width: "100px",
    textAlign: "center",
  },
};

export default DetailsLessonCard;
