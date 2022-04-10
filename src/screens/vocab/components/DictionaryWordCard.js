import React from "react";
import { color } from "../../../assets/colors/colors";
import AudioButton from "../../../components/AudioButton";

function DictionaryWordCard({ result }) {
  return (
    <div
      className="card"
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
        <AudioButton url={result.pronunciation} width="50px" />
      )}
    </div>
  );
}

export default DictionaryWordCard;
