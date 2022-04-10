import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { color } from "../../assets/colors/colors";

import Sidebar from "../../components/Sidebar";

function CultureHomeScreen() {
  const { t, i18n } = useTranslation("common");

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <div style={{ flex: 1 }}>
        <Sidebar page="culture" />
      </div>

      {/* MAIN BODY */}
      <div style={{ flex: 4 }}>
        <span className="pagetitle balsamiq-ig">{t("culture")}</span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <p className="balsamiq-ig subtitle">Igbo Music Playlist</p>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/6OEAko3c1E6ageXECJpIK4?utm_source=generator"
            width="100%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
          <p style={{ marginTop: "20px" }} className="balsamiq-ig subtitle">
            Igbo Music Playlist
          </p>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/6OEAko3c1E6ageXECJpIK4?utm_source=generator"
            width="100%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default CultureHomeScreen;
