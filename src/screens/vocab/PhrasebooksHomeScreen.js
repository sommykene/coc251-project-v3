import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import BottomColorStrip from "../../components/BottomColorStrip";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { icon } from "../../assets/images";
import { color } from "../../assets/colors/colors";
import { Spacer } from "../../components/utils";
import PhrasebookCard from "./components/PhrasebookCard";
import { getPhrasebooks } from "../../firebaseapi/firestore";

function PhrasebooksHomeScreen() {
  const page = "vocab";
  const { t, i18n } = useTranslation("common");
  const navigate = useNavigate();

  const [phrasebooks, setPhrasebooks] = useState([]);

  useEffect(() => {
    const getPhrasebooksList = async () => {
      const list = await getPhrasebooks();
      setPhrasebooks(list);
    };

    getPhrasebooksList();
  }, []);

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
        <p className="subtitle balsamiq-ig">Phrasebooks</p>
        <Spacer height={"20px"} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {phrasebooks.map((book, index) => {
            return (
              <Link
                key={index}
                to={`/vocab/phrasebooks/${book.id}`}
                state={{ name: book.name }}
              >
                <PhrasebookCard
                  name={book.name}
                  description={book.description}
                  numberOfVocab={book.numberOfVocab}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PhrasebooksHomeScreen;
