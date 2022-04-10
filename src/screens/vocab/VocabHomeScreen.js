import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { color } from "../../assets/colors/colors";
import Sidebar from "../../components/Sidebar";
import BottomColorStrip from "../../components/BottomColorStrip";
import { icon } from "../../assets/images";
import { Spacer } from "../../components/utils";
import { Link } from "react-router-dom";

function VocabHomeScreen() {
  const { t, i18n } = useTranslation("common");
  const page = "vocab";

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <div style={{ flex: 1 }}>
        <Sidebar page={page} />
        <BottomColorStrip page={page} />
      </div>

      {/* MAIN BODY */}
      <div style={{ flex: 4 }}>
        <span className="pagetitle balsamiq-ig">{t("vocab")}</span>
        <div style={styles.main}>
          {/* lessons vocab */}
          <div style={{ flex: 1 }}>
            <Link to="/vocab/lessonsvocab">
              <div
                className="section-cards"
                style={{
                  backgroundColor: color.white,
                  color: color.black,
                }}
              >
                <img src={icon.vocab.lessonvocab} />
                <Spacer height={"50px"} />
                <p className="balsamiq-ig subtitle">All Lessons Vocab</p>
              </div>
            </Link>
          </div>

          {/* dictionary */}
          <div style={{ flex: 1 }}>
            <Link to="/vocab/dictionary">
              <div
                className="section-cards"
                style={{
                  backgroundColor: color.white,
                  color: color.black,
                }}
              >
                <img src={icon.vocab.dictionary} />
                <Spacer height={"50px"} />
                <p className="balsamiq-ig subtitle">Dictionary</p>
              </div>{" "}
            </Link>
          </div>

          {/* phrasebooks */}
          <div style={{ flex: 1 }}>
            <Link to="/vocab/phrasebooks">
              <div
                className="section-cards"
                style={{
                  backgroundColor: color.white,
                  color: color.black,
                }}
              >
                <img src={icon.vocab.phrasebooks} />
                <Spacer height={"50px"} />
                <p className="balsamiq-ig subtitle">Phrasebooks</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
const styles = {
  main: {
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    marginTop: "20px",
  },
};
export default VocabHomeScreen;
