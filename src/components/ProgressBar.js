import React from "react";
import { color } from "../assets/colors/colors";

function ProgressBar({ progressState, positionIndex }) {
  return (
    <div
      style={{
        position: "absolute",
        left: "60px",
        right: "60px",
        top: 20,
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <p
          style={{
            flex: 1.5,
          }}
          className="subtitle balsamiq-ig"
        >
          Greeting (Ndewdoo)
        </p>
        {progressState.map((x, i) => {
          return (
            <div
              style={{
                height: "15px",
                backgroundColor:
                  i === positionIndex
                    ? color.yellow
                    : x
                    ? color.green
                    : color.lightgrey,
                borderRadius: "50px",
                flex: i + 1 === 1 || i + 1 === progressState.length ? 1 : 0.5,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default ProgressBar;
