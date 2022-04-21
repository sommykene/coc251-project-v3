import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { color } from "../../../assets/colors/colors";

function DetailsLessonNotesCard({ title, notes }) {
  return (
    <div
      style={{
        height: "100px",
        padding: "0 20px",
      }}
      className="basic-card"
    >
      <p style={styles.topicTitle}>{title}</p>
      <span style={styles.description}>{notes}</span>
    </div>
  );
}

const styles = {
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  topicTitle: {
    fontSize: "20px",
  },
  description: {},
};

export default DetailsLessonNotesCard;
