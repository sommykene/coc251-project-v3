import React from "react";
import { useNavigate } from "react-router-dom";
import { color } from "../assets/colors/colors";

import profileImage from "../assets/images/profile.png";
import { SignOut } from "../services/auth";
import useAuth from "../services/AuthProvider";
import ToggleSwitch from "./ToggleSwitch";
import { Spacer } from "./utils";

function ProfileCard({ home }) {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleLogout = async (navigate) => {
    await SignOut()
      .then(() => {
        sessionStorage.removeItem("Auth Token");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      style={{
        padding: "15px 0",
        alignItems: "center",
        backgroundColor: color.white,
        height: !home && "350px",
      }}
      className="card balsamiq"
    >
      <img style={styles.profileImg} src={profileImage} />
      <span style={{ margin: "10px 0" }}>
        {currentUser && currentUser.firstName}
      </span>
      <span>@{currentUser && currentUser.username}</span>
      <XpPointCard />
      <ToggleSwitch />
      <Spacer height="15px" />
      <span
        style={{
          cursor: "pointer",
          color: color.darkgrey,
          fontStyle: "italic",
        }}
        onClick={() => handleLogout(navigate)}
      >
        Logout
      </span>
    </div>
  );
}

const XpPointCard = () => {
  const { currentUser } = useAuth();
  return (
    <div style={styles.xppoints}>
      <span style={{ flex: 1 }}>XP Points</span>
      <span style={{ flex: 1 }}>{currentUser && currentUser.xpPoints}</span>
    </div>
  );
};

const styles = {
  card: {
    padding: "15px 0",
    alignItems: "center",
    backgroundColor: color.white,
  },
  profileImg: {
    marginBottom: "10px",
    minHeight: "50px",
    maxHeight: "105px",
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
