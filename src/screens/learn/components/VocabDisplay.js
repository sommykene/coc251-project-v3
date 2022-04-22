import React from "react";
import { color } from "../../../assets/colors/colors";
import AudioButton from "../../../components/AudioButton";
import sound from "../../../assets/sound.wav";

function VocabDisplay({ vocab }) {
  const igbo = "kedu ka ị mere?";
  const english = "how are you?";
  return (
    <div
      className="card-ns balsamiq-ig"
      style={{
        background: color.white,
        maxWidth: "80%",
        minWidth: "60%",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <p
        style={{
          margin: "10px 0",
          fontSize: "60px",
        }}
      >
        {vocab.igbo}
      </p>

      <AudioButton color={"teal"} url={vocab.sound} />

      <p
        style={{
          margin: "10px 0",
          fontSize: "60px",
        }}
      >
        {vocab.english}
      </p>

      <p
        className="calibri"
        style={{
          margin: "10px 0",
          color: color.darkgrey,
          fontSize: "26px",
          fontStyle: "italic",
        }}
      >
        {vocab.definition}
      </p>
    </div>
  );
}

export default VocabDisplay;
