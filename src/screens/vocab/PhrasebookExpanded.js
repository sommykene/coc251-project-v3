import React from "react";
import Sidebar from "../../components/Sidebar";
import BottomColorStrip from "../../components/BottomColorStrip";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { icon } from "../../assets/images";
import { color } from "../../assets/colors/colors";
import { Spacer } from "../../components/utils";
import AudioButton from "../../components/AudioButton";

function PhrasebookExpanded() {
  const page = "vocab";
  const { t, i18n } = useTranslation("common");
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <div style={{ flex: 1 }}>
        <Sidebar page={page} />
        <BottomColorStrip page={page} />
      </div>

      {/* MAIN BODY */}
      <div style={{ flex: 4 }}>
        <div>
          <img
            style={{ marginRight: "10px", cursor: "pointer" }}
            src={icon.backarrow}
            onClick={() => navigate("/vocab")}
          />
          <span className="pagetitle balsamiq-ig">{t("vocab")}</span>
        </div>
        <Spacer height={"20px"} />
        <p className="subtitle balsamiq-ig">Family - 15 Phrases</p>
        <Spacer height={"20px"} />

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            <div
              className="card"
              style={{
                flex: 4,
                backgroundColor: color.tealtint,
                height: "auto",
                padding: "10px 0",
                fontWeight: "bold",
              }}
            >
              English
            </div>
            <div
              className="card"
              style={{
                flex: 4,
                backgroundColor: color.tealtint,
                height: "auto",
                padding: "10px 0",
                fontWeight: "bold",
              }}
            >
              Igbo
            </div>
            <div style={{ flex: 1 }}></div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <div
              className="card-ns"
              style={{
                flex: 4,
                backgroundColor: color.white,
                height: "auto",
                padding: "10px 0",
                alignItems: "start",
              }}
            >
              <span style={{ padding: "0 20px" }}>hi</span>
            </div>
            <div
              className="card-ns"
              style={{
                flex: 4,
                backgroundColor: color.white,
                height: "auto",
                padding: "10px 0",
                alignItems: "start",
              }}
            >
              <span style={{ padding: "0 20px" }}>hi</span>
            </div>
            <div
              className="card-ns"
              style={{
                flex: 1,
                backgroundColor: color.white,
                height: "fit-content",
                padding: "10px 0",
                cursor: "pointer",
              }}
            >
              <AudioButton width="35px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhrasebookExpanded;
