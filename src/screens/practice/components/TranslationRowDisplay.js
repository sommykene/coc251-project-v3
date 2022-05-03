import React from "react";
import { color } from "@assets/colors/colors";
import AudioButton from "@components/AudioButton";

function TranslationRowDisplay({ vocab }) {
  return (
    <div style={styles.row}>
      <div className="card-ns" style={styles.wordCards}>
        <span style={{ padding: "0 20px" }}>{vocab.english}</span>
      </div>
      <div className="card-ns" style={styles.wordCards}>
        <span style={{ padding: "0 20px" }}>{vocab.igbo}</span>
      </div>
    </div>
  );
}

const styles = {
  row: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    width: "100%",
  },
  wordCards: {
    flex: 4,
    backgroundColor: color.white,
    height: "60px",
    padding: "10px 0",
    alignItems: "start",
    fontSize: "20px",
  },
};
export default TranslationRowDisplay;
