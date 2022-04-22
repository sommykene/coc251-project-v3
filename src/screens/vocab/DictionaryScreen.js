import React from "react";
import Sidebar from "../../components/Sidebar";
import BottomColorStrip from "../../components/BottomColorStrip";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import { icon } from "../../assets/images";
import { color } from "../../assets/colors/colors";
import { Spacer } from "../../components/utils";
import DictionaryWordCard from "./components/DictionaryWordCard";
import { useEffect, useState } from "react";
import { APIKey } from "../../config/IgboAPIConfig";

const fetchData = (word, callback) => {
  return fetch(`https://igboapi.com/api/v1/words?keyword=${word}`, {
    headers: {
      accept: "application/json",
      "X-API-Key": APIKey,
    },
  })
    .then((response) => response.json())
    .then((data) => callback(data));
};

function DictionaryScreen() {
  const page = "vocab";
  const { t, i18n } = useTranslation("common");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [results, setResults] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [fetchLoading, setFetchLoading] = useState(false);
  const [startedSearch, setStartedSearch] = useState(false);

  useEffect(() => {
    if (searchParams.get("query")) {
      setSearchWord(searchParams.get("query"));
      handleSearch(searchParams.get("query"));
    }
  }, []);

  const handleSearch = (query) => {
    setStartedSearch(true);
    setFetchLoading(true);
    setResults([]);
    fetchData(query, (data) => handleResults(data));
  };

  const handleResults = (data) => {
    setFetchLoading(false);
    setResults(data);
  };

  const handleChange = (e) => {
    setSearchWord(e.target.value);
    setSearchParams({ query: e.target.value });
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
            src={icon.backarrow.black}
            onClick={() => navigate("/vocab")}
          />
          <span className="pagetitle balsamiq-ig">{t("vocab")}</span>
        </div>
        <Spacer height={"20px"} />
        <p className="subtitle balsamiq-ig">Dictionary (Power By IgboAPI)</p>
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

        {/* results */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {fetchLoading && (
            <p
              className="balsamiq-ig"
              style={{ margin: "auto", color: color.darkgrey }}
            >
              Loading
            </p>
          )}
          {!fetchLoading && results.length !== 0 ? (
            results.map((result, index) => (
              <DictionaryWordCard key={index} result={result} />
            ))
          ) : startedSearch && !fetchLoading ? (
            <h1>No Results Found</h1>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default DictionaryScreen;
