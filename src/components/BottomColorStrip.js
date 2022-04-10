import React from "react";
import { color } from "../assets/colors/colors";

function BottomColorStrip({ page }) {
  let stripColor = color.background;
  switch (page) {
    case "learn":
      stripColor = color.learn;
      break;
    case "practice":
      stripColor = color.practice;
      break;
    case "vocab":
      stripColor = color.vocab;
      break;
    case "culture":
      stripColor = color.culture;
      break;
    default:
      stripColor = color.background;
      break;
  }

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        height: "30px",
        width: "100%",
        backgroundColor: stripColor,
      }}
    ></div>
  );
}

export default BottomColorStrip;
