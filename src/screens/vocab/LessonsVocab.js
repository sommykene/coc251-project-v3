import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import BottomColorStrip from "../../components/BottomColorStrip";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { icon } from "../../assets/images";
import { color } from "../../assets/colors/colors";
import { Spacer } from "../../components/utils";
import VocabCard from "./components/VocabCard";
import { getAllVocabTillLessonNumber } from "../../firebaseapi/firestore";
import useAuth from "../../services/AuthProvider";
import Loading from "../../components/Loading";

function LessonsVocab() {
  const page = "vocab";
  const { t, i18n } = useTranslation("common");
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [vocabs, setVocabs] = useState([]);

  useEffect(() => {
    const getVocabList = async (lessonNumber) => {
      const list = await getAllVocabTillLessonNumber(lessonNumber);
      setVocabs(list);
    };

    getVocabList(currentUser.currentLessonNumber);
  }, []);

  const [searchWord, setSearchWord] = useState("");

  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };

  const filteredVocab = !searchWord
    ? vocabs
    : vocabs.filter(
        (vocab) =>
          vocab.english
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .includes(searchWord.toLowerCase()) ||
          vocab.igbo
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .includes(searchWord.toLowerCase())
      );

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <div style={{ flex: 1 }}>
        <Sidebar page={page} />
        <BottomColorStrip page={page} />
      </div>

      {/* MAIN BODY */}
      <div style={{ flex: 4, paddingBottom: "50px" }}>
        <div>
          <img
            style={{ marginRight: "10px", cursor: "pointer" }}
            src={icon.backarrow.black}
            onClick={() => navigate("/vocab")}
          />
          <span className="pagetitle balsamiq-ig">{t("vocab")}</span>
        </div>
        <Spacer height={"20px"} />
        <p className="subtitle balsamiq-ig">All Lessons Vocab</p>
        <Spacer height={"20px"} />

        {/* search bar */}
        <input
          className="card"
          style={{
            backgroundColor: color.white,
            width: "100%",
            height: "50px",
            textAlign: "start",
            paddingLeft: "15px",
            fontSize: "18px",
            border: "none",
          }}
          type="text"
          placeholder="Search for a word in English or Igbo"
          value={searchWord}
          onChange={handleChange}
        />
        <Spacer height={"20px"} />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {filteredVocab.length > 0 ? (
            filteredVocab.map((vocab, index) => {
              return <VocabCard key={index} vocab={vocab} />;
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}

export default LessonsVocab;
