import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Spotify from "react-spotify-embed";
import { color } from "../../assets/colors/colors";
import BottomColorStrip from "../../components/BottomColorStrip";
import Sidebar from "../../components/Sidebar";

function CultureHomeScreen() {
  const { t, i18n } = useTranslation("common");
  const page = "culture";

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <div style={{ flex: 1 }}>
        <Sidebar page={page} />
        <BottomColorStrip page={page} />
      </div>

      {/* MAIN BODY */}
      <div style={{ flex: 4 }}>
        <span className="pagetitle balsamiq-ig">{t("culture")}</span>
        <div style={styles.main}>
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
          <Spotify
            wide
            link="https://open.spotify.com/track/5ihDGnhQgMA0F0tk9fNLlA?si=4472348a63dd4f83"
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "20px",
  },
};
export default CultureHomeScreen;
