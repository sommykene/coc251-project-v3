import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { color } from "../../../assets/colors/colors";

function DetailsCard({ title, page, description }) {
  return (
    <div
      style={{
        height: page === "viewtopics" ? "60px" : "100px",
        padding: "0 20px",
      }}
      className="card"
    >
      <div style={styles.main}>
        <p style={styles.topicTitle}>1. {title}</p>
        <div style={styles.buttons} className="balsamiq-ig">
          <p style={styles.button}>Start</p>
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

export default DetailsCard;
