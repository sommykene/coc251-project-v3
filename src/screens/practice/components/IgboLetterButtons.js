import React from "react";
import { color } from "../../../assets/colors/colors";

function IgboLetterButtons({ addInput, setFocus }) {
  return (
    <div style={{ display: "flex", gap: "50px" }}>
      <LetterKey
        letter="ị"
        handleInput={(letter) => addInput(letter)}
        handleFocus={setFocus}
      />
      <LetterKey
        letter="ṅ"
        handleInput={(letter) => addInput(letter)}
        handleFocus={() => setFocus()}
      />
      <LetterKey
        letter="ọ"
        handleInput={(letter) => addInput(letter)}
        handleFocus={() => setFocus()}
      />
      <LetterKey
        letter="ụ"
        handleInput={(letter) => addInput(letter)}
        handleFocus={() => setFocus()}
      />
    </div>
  );
}

const LetterKey = ({ letter, handleInput, handleFocus }) => {
  return (
    <div
      className="card balsamiq-ig"
      style={{
        backgroundColor: color.white,
        width: "50px",
        height: "50px",
        fontSize: "25px",
        cursor: "pointer",
      }}
      onClick={() => {
        handleInput(letter);
        handleFocus();
      }}
    >
      {letter}
    </div>
  );
};
export default IgboLetterButtons;
