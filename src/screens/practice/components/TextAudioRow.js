import React from "react";
import { color } from "../../../assets/colors/colors";
import AudioButton from "../../../components/AudioButton";

function TextAudioRow({ vocab }) {
  return (
    <div style={styles.row}>
      <div className="card-ns" style={styles.wordCards}>
        <span style={{ padding: "0 20px" }}>{vocab.english}</span>
      </div>
      <div className="card-ns" style={styles.audioBtn}>
        <AudioButton url={vocab.sound} width="35px" fillSpace={true} />
      </div>
    </div>
  );
}

const styles = {
  row: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
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
  audioBtn: {
    flex: 0.5,
    backgroundColor: color.white,
    height: "60px",
    padding: "10px 0",
    cursor: "pointer",
  },
};
export default TextAudioRow;
