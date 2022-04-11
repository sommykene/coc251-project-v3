import React from "react";
import Sidebar from "../../components/Sidebar";
import BottomColorStrip from "../../components/BottomColorStrip";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { icon } from "../../assets/images";
import { Spacer } from "../../components/utils";
import sound from "../../assets/sound.wav";

import TranslationsGrid from "../../components/TranslationsGrid";

const data = [
  { english: "Welcome", igbo: "nnọọ", sound: sound },
  { english: "Good Morning", igbo: "ụtụtụ ọma", sound: sound },
  { english: "Welcome", igbo: "nnọọ", sound: sound },
  { english: "Good Morning", igbo: "ụtụtụ ọma", sound: sound },
  { english: "Welcome", igbo: "nnọọ", sound: sound },
  { english: "Good Morning", igbo: "ụtụtụ ọma", sound: sound },
  { english: "Welcome", igbo: "nnọọ", sound: sound },
  { english: "Good Morning", igbo: "ụtụtụ ọma", sound: sound },
  { english: "Welcome", igbo: "nnọọ", sound: sound },
  { english: "Good Morning", igbo: "ụtụtụ ọma", sound: sound },
  { english: "Welcome", igbo: "nnọọ", sound: sound },
  { english: "Good Morning", igbo: "ụtụtụ ọma", sound: sound },
  { english: "Welcome", igbo: "nnọọ", sound: sound },
  { english: "Good Morning", igbo: "ụtụtụ ọma", sound: sound },
  { english: "Welcome", igbo: "nnọọ", sound: sound },
];

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
            onClick={() => navigate("/vocab/phrasebooks")}
          />
          <span className="pagetitle balsamiq-ig">{t("vocab")}</span>
        </div>
        <Spacer height={"20px"} />
        <p className="subtitle balsamiq-ig">Family - 15 Phrases</p>
        <Spacer height={"20px"} />

        <TranslationsGrid data={data} />
      </div>
    </div>
  );
}

export default PhrasebookExpanded;
