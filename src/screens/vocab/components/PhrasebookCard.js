import React from "react";
import { color } from "../../../assets/colors/colors";
import { Spacer } from "../../../components/utils";

function PhrasebookCard() {
  return (
    <div
      className="card-ns"
      style={{
        height: "fit-content",
        backgroundColor: color.white,
        width: "300px",
        padding: "15px",
        cursor: "pointer",
        color: color.black,
      }}
    >
      <p style={{ margin: 0, fontSize: "18px" }} className="balsamiq-ig">
        Meeting People
      </p>
      <Spacer height="15px" />
      <p style={{ margin: 0, color: color.darkgrey }} className="balsamiq-ig">
        15 Phrases
      </p>
    </div>
  );
}

export default PhrasebookCard;
