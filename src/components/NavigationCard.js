import React from "react";

import LearnIcon from "../assets/images/icons/learn_icon_small.png";
import PracticeIcon from "../assets/images/icons/practice_icon_small.png";
import VocabIcon from "../assets/images/icons/vocab_icon_small.png";
import CultureIcon from "../assets/images/icons/culture_icon_small.png";
import LearnIconActive from "../assets/images/icons/learn_icon_small_active.png";
import PracticeIconActive from "../assets/images/icons/practice_icon_small_active.png";
import VocabIconActive from "../assets/images/icons/vocab_icon_small_active.png";
import CultureIconActive from "../assets/images/icons/culture_icon_small_active.png";
import { color } from "../assets/colors/colors";

function NavigationCard({ page }) {
  return (
    <div style={styles.card}>
      <img src={page !== "learn" ? LearnIcon : LearnIconActive} />
      <img src={page !== "practice" ? PracticeIcon : PracticeIconActive} />
      <img src={page !== "vocab" ? VocabIcon : VocabIconActive} />
      <img src={page !== "culture" ? CultureIcon : CultureIconActive} />
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    gap: 5,
    backgroundColor: color.white,
    borderRadius: "10px",
    width: "fit-content",
    margin: "auto",
    padding: "0 10px",
  },
};

export default NavigationCard;
