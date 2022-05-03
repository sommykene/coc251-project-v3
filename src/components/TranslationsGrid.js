import React, { useEffect } from "react";

import AudioButton from "./AudioButton";
import { color } from "@assets/colors/colors";

function TranslationsGrid({ data, fullWidth }) {
  const row =
    data &&
    data.map((vocab, index) => {
      return (
        <div key={index} style={styles.row}>
          <div className="card-ns" style={styles.wordCards}>
            <span style={{ padding: "0 20px" }}>{vocab.english}</span>
          </div>
          <div className="card-ns" style={styles.wordCards}>
            <span style={{ padding: "0 20px" }}>{vocab.igbo}</span>
          </div>
          <div className="card-ns" style={styles.audioBtn}>
            <AudioButton url={vocab.sound} width="35px" fillSpace={true} />
          </div>
        </div>
      );
    });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: fullWidth ? "100%" : "inherit",
      }}
    >
      <div style={styles.row}>
        <div className="card" style={styles.header}>
          English
        </div>
        <div className="card" style={styles.header}>
          Igbo
        </div>
        <div style={{ flex: 1 }}></div>
      </div>
      {row}
    </div>
  );
}

const styles = {
  header: {
    flex: 4,
    backgroundColor: color.tealtint,
    height: "60px",
    padding: "10px 0",
    fontWeight: "bold",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  wordCards: {
    flex: 4,
    backgroundColor: color.white,
    height: "60px",
    padding: "10px 0",
    alignItems: "start",
  },
  audioBtn: {
    flex: 1,
    backgroundColor: color.white,
    height: "60px",
    padding: "10px 0",
    cursor: "pointer",
  },
};

export default TranslationsGrid;
