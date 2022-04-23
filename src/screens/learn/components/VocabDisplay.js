import React from "react";
import { color } from "../../../assets/colors/colors";
import AudioButton from "../../../components/AudioButton";
import sound from "../../../assets/sound.wav";

function VocabDisplay({ vocab }) {
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

      <AudioButton key={vocab.vocabID} color={"teal"} url={vocab.sound} />

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
          textAlign: "center",
        }}
      >
        {vocab.definition}
      </p>
    </div>
  );
}

export default VocabDisplay;
