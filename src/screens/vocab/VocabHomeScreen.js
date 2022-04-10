import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { color } from "../../assets/colors/colors";
import Sidebar from "../../components/Sidebar";

function VocabHomeScreen() {
  const { t, i18n } = useTranslation("common");

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <div style={{ flex: 1 }}>
        <Sidebar page="vocab" />
      </div>

      {/* MAIN BODY */}
      <div style={{ flex: 4 }}>
        <span className="pagetitle balsamiq-ig">{t("vocab")}</span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginTop: "20px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default VocabHomeScreen;
