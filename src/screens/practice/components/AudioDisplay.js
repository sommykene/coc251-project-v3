import React from "react";
import AudioButton from "../../../components/AudioButton";
import sound from "../../../assets/sound.wav";
import { color } from "../../../assets/colors/colors";

function AudioDisplay({ selected, text, showanswers }) {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        backgroundColor: selected ? color.yellow : color.white,
        height: showanswers ? "150px" : "120px",
        width: "auto",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AudioButton url={sound} fillSpace={true} width={"80px"} />
      {showanswers && <p className="subtitle">{text}</p>}
    </div>
  );
}

export default AudioDisplay;
