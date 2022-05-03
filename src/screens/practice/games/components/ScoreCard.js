import React from "react";
import { color } from "@assets/colors/colors";

function ScoreCard({ score }) {
  return (
    <div
      className="card-ns balsamiq-ig"
      style={{
        background: color.white,
        maxWidth: "80%",
        minWidth: "60%",
        paddingLeft: "20px",
        paddingRight: "20px",
        height: "fit-content",
      }}
    >
      <p className="balsamiq-ig pagetitle">Well Done</p>
      <p className="balsamiq-ig pagetitle">You Earnt +{score}XP Points</p>
    </div>
  );
}

export default ScoreCard;
