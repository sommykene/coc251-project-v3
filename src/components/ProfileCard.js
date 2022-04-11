import React from "react";
import { color } from "../assets/colors/colors";

import profileImage from "../assets/images/profile.png";
import ToggleSwitch from "./ToggleSwitch";

function ProfileCard({ home }) {
  return (
    <div
      style={{
        padding: "15px 0",
        alignItems: "center",
        backgroundColor: color.white,
        height: !home && "320px",
      }}
      className="card balsamiq"
    >
      <img style={styles.profileImage} src={profileImage} />
      <span style={{ margin: "10px 0" }}>Som E-Agwuegbo</span>
      <span>@sommykene</span>
      <XpPointCard />
      <ToggleSwitch />
    </div>
  );
}

const XpPointCard = () => {
  return (
    <div style={styles.xppoints}>
      <span style={{ flex: 1 }}>XP Points</span>
      <span style={{ flex: 1 }}>1789</span>
    </div>
  );
};

const styles = {
  card: {
    padding: "15px 0",
    alignItems: "center",
    backgroundColor: color.white,
  },
  profileImage: {
    marginBottom: "10px",
  },
  xppoints: {
    backgroundColor: color.yellow,
    width: "70%",
    display: "flex",
    fontSize: "16px",
    padding: "10px",
    marginLeft: " 0 10%",
    borderRadius: "10px",
    margin: "10px",
  },
};
export default ProfileCard;
