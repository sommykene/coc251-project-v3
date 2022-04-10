import React from "react";
import { color } from "../../../assets/colors/colors";

function DictionaryWordCard({ result }) {
  return (
    <div
      className="section-cards"
      style={{
        height: "fit-content",
        backgroundColor: color.white,
        width: "300px",
        padding: "15px",
      }}
    >
      <h1>{result.word}</h1>
      <p>{result.definitions}</p>

      {result && result.pronunciation && (
        <>
          <br />
          <audio style={{ margin: "12px", width: "80%" }} controls>
            <source src={result.pronunciation} type="audio/webm" />
            Your browser does not support the audio tag.
          </audio>
        </>
      )}
    </div>
  );
}

export default DictionaryWordCard;
