import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import BottomColorStrip from "../../components/BottomColorStrip";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { icon } from "../../assets/images";
import { Spacer } from "../../components/utils";
import sound from "../../assets/sound.wav";

import TranslationsGrid from "../../components/TranslationsGrid";
import { getPhrasebookVocab } from "../../services/firestore";

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
  let location = useLocation();

  const page = "vocab";
  const { t, i18n } = useTranslation("common");
  const navigate = useNavigate();
  const params = useParams();
  const phrasebookid = params.phrasebookid;
  const [loading, setLoading] = useState(true);
  const [vocabList, setVocabList] = useState();
  const [title, setTitle] = useState("");

  useEffect(() => {
    const getVocabList = async () => {
      await getPhrasebookVocab(phrasebookid).then((list) => {
        setVocabList(list);
        setLoading(false);
      });
    };
    setTitle(location.state.name);
    getVocabList();
  }, []);

  return (
    <div style={{ display: "flex", gap: "30px", paddingBottom: "80px" }}>
      <div style={{ flex: 1 }}>
        <Sidebar page={page} />
        <BottomColorStrip page={page} />
      </div>

      {/* MAIN BODY */}
      <div style={{ flex: 4 }}>
        <div>
          <img
            style={{ marginRight: "10px", cursor: "pointer" }}
            src={icon.backarrow.black}
            onClick={() => navigate("/vocab/phrasebooks")}
          />
          <span className="pagetitle balsamiq-ig">{t("vocab")}</span>
        </div>
        <Spacer height={"20px"} />
        <p className="subtitle balsamiq-ig">{title}</p>
        <Spacer height={"20px"} />

        {loading ? <p>Loading</p> : <TranslationsGrid data={vocabList} />}
      </div>
    </div>
  );
}

export default PhrasebookExpanded;
