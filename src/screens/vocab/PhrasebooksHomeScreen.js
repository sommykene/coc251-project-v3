import React from "react";
import Sidebar from "../../components/Sidebar";
import BottomColorStrip from "../../components/BottomColorStrip";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { icon } from "../../assets/images";
import { color } from "../../assets/colors/colors";
import { Spacer } from "../../components/utils";
import PhrasebookCard from "./components/PhrasebookCard";

function PhrasebooksHomeScreen() {
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
        <p className="subtitle balsamiq-ig">Phrasebooks</p>
        <Spacer height={"20px"} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          <PhrasebookCard />
          <PhrasebookCard />
          <PhrasebookCard />
          <PhrasebookCard />
          <PhrasebookCard />
          <PhrasebookCard />
          <PhrasebookCard />
        </div>
      </div>
    </div>
  );
}

export default PhrasebooksHomeScreen;
