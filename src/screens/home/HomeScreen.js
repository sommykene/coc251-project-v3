import React from "react";
import ProfileCard from "../../components/ProfileCard";

import LearnIcon from "../../assets/images/icons/learn_icon_large.png";
import PracticeIcon from "../../assets/images/icons/practice_icon_large.png";
import VocabIcon from "../../assets/images/icons/vocab_icon_large.png";
import CultureIcon from "../../assets/images/icons/culture_icon_large.png";

import { color } from "../../assets/colors/colors";
import "./HomeScreen.css";

function HomeScreen() {
  return (
    <div id="homescreen">
      <div style={{ marginBottom: "30px" }} className="rowone">
        <div style={{ flex: 1 }}>
          <ProfileCard />
        </div>

        <div style={{ flex: 2 }}>
          <LearnCard />
        </div>

        <div style={{ flex: 2 }}>
          <PracticeCard />
        </div>
      </div>

      <div className="rowtwo">
        <div style={{ flex: 2 }}>
          <VocabCard />
        </div>

        <div style={{ flex: 1 }}>
          <WotdCard />
        </div>

        <div style={{ flex: 2 }}>
          <CultureCard />
        </div>
      </div>
    </div>
  );
}

const LearnCard = () => {
  return (
    <div style={{ backgroundColor: color.teal }} className="section-cards">
      <img style={{ height: "150px", width: "150px" }} src={LearnIcon} />
      <span style={{ fontSize: "24pt", color: "white" }}>Learn</span>
    </div>
  );
};

const PracticeCard = () => {
  return (
    <div style={{ backgroundColor: color.duckegg }} className="section-cards">
      <img style={{ height: "150px", width: "150px" }} src={PracticeIcon} />
      <span style={{ fontSize: "24pt" }}>Practice</span>
    </div>
  );
};

const VocabCard = () => {
  return (
    <div style={{ backgroundColor: color.yellow }} className="section-cards">
      <img style={{ height: "150px", width: "150px" }} src={VocabIcon} />
      <span style={{ fontSize: "24pt" }}>Vocab</span>
    </div>
  );
};

const WotdCard = () => {
  return (
    <div style={styles.wotd}>
      <span>WOTD</span>
    </div>
  );
};

const CultureCard = () => {
  return (
    <div style={{ backgroundColor: color.red }} className="section-cards">
      <img style={{ height: "150px", width: "150px" }} src={CultureIcon} />
      <span style={{ fontSize: "24pt", color: "white" }}>Culture</span>
    </div>
  );
};

const styles = {
  wotd: {
    border: `3px ${color.orange} solid`,
    backgroundColor: color.white,
    borderRadius: "10px",
    height: "350px",
  },
};

export default HomeScreen;
