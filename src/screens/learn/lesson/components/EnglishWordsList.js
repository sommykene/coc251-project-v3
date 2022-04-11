import React from "react";
import { color } from "../../../../assets/colors/colors";

function EnglishWordsList({ data }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={styles.row}>
        <div className="card" style={styles.header}>
          English
        </div>
      </div>
      {data.map((vocab, index) => {
        return (
          <div style={styles.row}>
            <div className="card-ns" style={styles.wordCards}>
              <span style={{ padding: "0 20px" }}>{vocab.english}</span>
            </div>
          </div>
        );
      })}
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

export default EnglishWordsList;
