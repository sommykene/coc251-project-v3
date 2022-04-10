import React from "react";
import NavigationCard from "./NavigationCard";
import ProfileCard from "./ProfileCard";

function Sidebar({ page }) {
  return (
    <div style={{ position: "fixed", width: "18%" }}>
      <ProfileCard />
      <br />
      <NavigationCard page={page} />
    </div>
  );
}

export default Sidebar;
