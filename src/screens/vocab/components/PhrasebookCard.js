import React from "react";
import { color } from "@assets/colors/colors";
import { Spacer } from "@components/utils";

function PhrasebookCard({ name, description, numberOfVocab }) {
  return (
    <div
      className="card-ns"
      style={{
        height: "100%",
        backgroundColor: color.white,
        width: "300px",
        padding: "15px",
        cursor: "pointer",
        color: color.black,
        textAlign: "center",
      }}
    >
      <p style={{ margin: 0, fontSize: "18px" }} className="balsamiq-ig">
        {name}
      </p>
      <Spacer height="15px" />
      <p style={{ margin: 0, color: color.darkgrey }}>{description}</p>
      <Spacer height="15px" />
      <p style={{ margin: 0, color: color.darkgrey }} className="balsamiq-ig">
        {numberOfVocab} Phrases
      </p>
    </div>
  );
}

export default PhrasebookCard;
