import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { color } from "../../assets/colors/colors";
import Sidebar from "../../components/Sidebar";
import BottomColorStrip from "../../components/BottomColorStrip";
import { icon } from "../../assets/images";
import { Spacer } from "../../components/utils";
import { Link } from "react-router-dom";

function PracticeHomeScreen() {
  const { t, i18n } = useTranslation("common");
  const page = "practice";

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <div style={{ flex: 1 }}>
        <Sidebar page={page} />
        <BottomColorStrip page={page} />
      </div>

      {/* MAIN BODY */}
      <div style={{ flex: 4 }}>
        <span className="pagetitle balsamiq-ig">{t(page)}</span>
        <div style={styles.main}>
          {/* lessons vocab */}
          <div style={styles.options}>
            <Link to="/practice/ma">
              <div className="card" style={styles.innercard}>
                <p className="balsamiq-ig subtitle">Matching Audio</p>
              </div>
            </Link>
          </div>

          {/* dictionary */}
          <div style={styles.options}>
            <Link to="/practice/mma">
              <div className="card" style={styles.innercard}>
                <p className="balsamiq-ig subtitle">Matching Multiple Audio</p>
              </div>{" "}
            </Link>
          </div>

          {/* phrasebooks */}
          <div style={styles.options}>
            <Link to="/practice/mt">
              <div className="card" style={styles.innercard}>
                <p className="balsamiq-ig subtitle">
                  Matching the Translations
                </p>
              </div>
            </Link>
          </div>

          {/* lessons vocab */}
          <div style={styles.options}>
            <Link to="/practice/sa">
              <div className="card" style={styles.innercard}>
                <p className="balsamiq-ig subtitle">Spell Out What You Hear</p>
              </div>
            </Link>
          </div>

          {/* dictionary */}
          <div style={styles.options}>
            <Link to="/practice/ta">
              <div className="card" style={styles.innercard}>
                <p className="balsamiq-ig subtitle">
                  Translating Audio to a Word or Phrase
                </p>
              </div>{" "}
            </Link>
          </div>

          {/* phrasebooks */}
          <div style={styles.options}>
            <Link to="/practice/tt">
              <div className="card" style={styles.innercard}>
                <p className="balsamiq-ig subtitle">
                  Translating the Word or Phrase
                </p>
              </div>
            </Link>
          </div>
          <div style={styles.options}></div>
          <div style={styles.options}></div>
        </div>
      </div>
    </div>
  );
}
const styles = {
  main: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: "15px",
    marginTop: "20px",
  },
  options: { flex: "1 0 30%" },
  innercard: {
    backgroundColor: color.white,
    color: color.black,
    height: "30vh",
  },
};

export default PracticeHomeScreen;
