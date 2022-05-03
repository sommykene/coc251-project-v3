import React from "react";
import { color } from "@assets/colors/colors";

function TextDisplay({ text, width }) {
  return (
    <div
      className="card-ns"
      style={{ backgroundColor: color.white, width: width, height: "100px" }}
    >
      <p className="balsamiq-ig" style={{ fontSize: "32px" }}>
        {text}
      </p>
    </div>
  );
}

export default TextDisplay;
