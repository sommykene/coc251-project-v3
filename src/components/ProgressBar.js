import React from "react";
import { useTranslation } from "react-i18next";
import { color } from "../assets/colors/colors";

function ProgressBar({ progressState, positionIndex, type }) {
  const { t } = useTranslation("common");
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
          {type === "learn" ? t("learn") : t("practice")}
        </p>
        {progressState.map((x, i) => {
          let progressColor = color.lightgrey;

          switch (type) {
            case "learn":
              progressColor =
                i === positionIndex
                  ? color.yellow
                  : x
                  ? color.green
                  : color.lightgrey;
              break;
            case "practice":
              progressColor =
                i === positionIndex
                  ? color.yellow
                  : x === null
                  ? color.lightgrey
                  : x
                  ? color.green
                  : color.red;
              break;
            default:
              break;
          }

          return (
            <div
              key={i}
              style={{
                height: "15px",
                backgroundColor: progressColor,
                borderRadius: "50px",
                flex:
                  type === "learn" &&
                  (i + 1 === 1 || i + 1 === progressState.length)
                    ? 1
                    : 0.5,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default ProgressBar;
