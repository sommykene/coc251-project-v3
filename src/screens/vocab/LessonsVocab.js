import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import BottomColorStrip from "../../components/BottomColorStrip";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { icon } from "../../assets/images";
import { color } from "../../assets/colors/colors";
import { Spacer } from "../../components/utils";
import VocabCard from "./components/VocabCard";

function LessonsVocab() {
  const page = "vocab";
  const { t, i18n } = useTranslation("common");
  const navigate = useNavigate();

  const [results, setResults] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [fetchLoading, setFetchLoading] = useState(false);
  const [startedSearch, setStartedSearch] = useState(false);

  const handleSearch = (query) => {
    setStartedSearch(true);
    setFetchLoading(true);
    setResults([]);
  };

  const handleResults = (data) => {
    setFetchLoading(false);
    setResults(data);
  };

  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };
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
          onKeyPress={(ev) => {
            if (ev.key === "Enter") {
              ev.preventDefault();
              handleSearch(searchWord);
            }
          }}
        />
        <Spacer height={"20px"} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          <VocabCard />
          <VocabCard />
          <VocabCard />
          <VocabCard />
        </div>
      </div>
    </div>
  );
}

export default LessonsVocab;
