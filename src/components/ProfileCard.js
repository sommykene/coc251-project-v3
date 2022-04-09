import React from "react";
import { color } from "@assets/colors/colors";
import logo from "@assets/images/logo.svg";
import profileImage from "@assets/images/profile.png";
import ToggleSwitch from "./ToggleSwitch";

function ProfileCard() {
  return (
    <div style={styles.card} className="balsamiq">
      <img style={styles.logo} src={logo} />
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
      <span style={{ flexGrow: 1 }}>XP Points</span>
      <span>1789</span>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "white",
    position: "relative",
    borderRadius: "10px",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "15px",
    height: "100%",
  },
  logo: {
    position: "absolute",
    top: 15,
    left: 15,
  },
  profileImage: {
    marginTop: "40px",
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
