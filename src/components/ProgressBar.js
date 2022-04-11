import React from "react";
import { color } from "../assets/colors/colors";

function ProgressBar() {
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
        <div
          style={{
            height: "15px",
            backgroundColor: color.green,
            borderRadius: "50px",
            flex: 1,
          }}
        ></div>
        <div
          style={{
            height: "15px",
            backgroundColor: color.green,
            borderRadius: "50px",
            flex: 0.5,
          }}
        ></div>
        <div
          style={{
            height: "15px",
            backgroundColor: color.green,
            borderRadius: "50px",
            flex: 0.5,
          }}
        ></div>
        <div
          style={{
            height: "15px",
            backgroundColor: color.green,
            borderRadius: "50px",
            flex: 0.5,
          }}
        ></div>
        <div
          style={{
            height: "15px",
            backgroundColor: color.red,
            borderRadius: "50px",
            flex: 0.5,
          }}
        ></div>
        <div
          style={{
            height: "15px",
            backgroundColor: color.yellow,
            borderRadius: "50px",
            flex: 0.5,
          }}
        ></div>
        <div
          style={{
            height: "15px",
            backgroundColor: color.lightgrey,
            borderRadius: "50px",
            flex: 0.5,
          }}
        ></div>
        <div
          style={{
            height: "15px",
            backgroundColor: color.lightgrey,
            borderRadius: "50px",
            flex: 1,
          }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
