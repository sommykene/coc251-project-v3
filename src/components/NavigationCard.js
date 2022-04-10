import React from "react";

// reg icon set
import HomeIcon from "../assets/images/icons/home_icon_small.png";
import LearnIcon from "../assets/images/icons/learn_icon_small.png";
import PracticeIcon from "../assets/images/icons/practice_icon_small.png";
import VocabIcon from "../assets/images/icons/vocab_icon_small.png";
import CultureIcon from "../assets/images/icons/culture_icon_small.png";
// active icon set
import LearnIconActive from "../assets/images/icons/learn_icon_small_active.png";
import PracticeIconActive from "../assets/images/icons/practice_icon_small_active.png";
import VocabIconActive from "../assets/images/icons/vocab_icon_small_active.png";
import CultureIconActive from "../assets/images/icons/culture_icon_small_active.png";

import { color } from "../assets/colors/colors";
import { Link } from "react-router-dom";

function NavigationCard({ page }) {
  return (
    <div style={styles.card}>
      <Link to="/">
        <img src={HomeIcon} />
      </Link>
      <Link to="/learn">
        <img src={page !== "learn" ? LearnIcon : LearnIconActive} />
      </Link>
      <Link to="/practice">
        <img src={page !== "practice" ? PracticeIcon : PracticeIconActive} />
      </Link>
      <Link to="/vocab">
        <img src={page !== "vocab" ? VocabIcon : VocabIconActive} />
      </Link>
      <Link to="/culture">
        <img src={page !== "culture" ? CultureIcon : CultureIconActive} />
      </Link>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    gap: 7,
    backgroundColor: color.white,
    borderRadius: "10px",
    width: "fit-content",
    margin: "auto",
    padding: "0 10px",
  },
};

export default NavigationCard;
