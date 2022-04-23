import React from "react";
import AudioButton from "../../../components/AudioButton";
import { color } from "../../../assets/colors/colors";

function AudioDisplay({
  selected,
  text,
  sound,
  showanswers,
  onClick,
  index,
  correct,
  incorrect,
}) {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        backgroundColor: correct
          ? color.green
          : incorrect
          ? color.red
          : selected
          ? color.yellow
          : color.white,
        height: showanswers ? "150px" : "120px",
        width: "auto",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => onClick()}
    >
      <AudioButton key={index} url={sound} fillSpace={true} width={"80px"} />
      {showanswers && <p className="subtitle">{text}</p>}
    </div>
  );
}

export default AudioDisplay;
