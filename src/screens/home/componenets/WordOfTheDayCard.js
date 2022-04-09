import { format } from "date-fns";
import React from "react";
import { color } from "../../../assets/colors/colors";

function WordOfTheDayCard() {
  return (
    <div style={styles.wotd}>
      <span>Word Of The Day</span>
      <br />
      <p style={{ margin: "10px 0" }}>{format(new Date(), "MMM d, yyyy")}</p>
      <div style={styles.breakline}></div>
      <p style={styles.igbo}>Kedu ka i mere</p>
      <br />
      <p style={styles.english}>how are you doing</p>
      <br />
      <p style={styles.definition}>an intense feeling of deep affection</p>
    </div>
  );
}

const styles = {
  wotd: {
    border: `3px ${color.orange} solid`,
    backgroundColor: color.white,
    borderRadius: "10px",
    height: "350px",
    textAlign: "center",
    padding: "20px",
  },
  breakline: {
    border: `1px ${color.orange} solid`,
    width: "60%",
    margin: "auto",
  },
  igbo: { fontSize: "100%", margin: "10px 0" },
  english: { color: color.orange, fontSize: "30px", margin: 0 },
  definition: { color: color.darkgrey, fontSize: "20px", margin: "10px" },
};
export default WordOfTheDayCard;
