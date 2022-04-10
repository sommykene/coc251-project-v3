import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { color } from "../../assets/colors/colors";
import BottomColorStrip from "../../components/BottomColorStrip";
import { Spacer } from "../../components/utils";
import Sidebar from "../../components/Sidebar";
import { useParams, useSearchParams } from "react-router-dom";
import { lessonsData } from "../../data/lessonsData";
import DetailsLessonCard from "./components/DetailsLessonCard";
import DetailsLessonNotesCard from "./components/DetailsLessonNotesCard";
import DetailsTopicCard from "./components/DetailsTopicCard";

function LessonDetailsScreen() {
  const { t, i18n } = useTranslation("common");
  let params = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  const page = "learn";

  const lesson = lessonsData.find((lesson) => {
    return lesson.lessonid === params.lessonid;
  });
  console.log(lessonsData);

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <div style={{ flex: 1 }}>
        <Sidebar page={page} />
        <Spacer height="20px" />
        <BottomColorStrip page={page} />
      </div>

      {/* MAIN BODY */}
      <div style={{ flex: 4 }}>
        <div style={styles.main}>
          <span className="pagetitle balsamiq-ig">{t("igbolessons")}</span>
          <span
            style={{ color: color.darkgrey }}
            className="subtitle balsamiq-ig"
          >
            Level: Beginner
          </span>
        </div>
        <Spacer height="20px" />
        <DetailsLessonCard
          title={lesson.title}
          description={lesson.description}
        />
        <Spacer height="40px" />
        {/* TABS */}
        <p className="subtitle balsamiq-ig">{t(searchParams.get("tab"))}</p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          {searchParams.get("tab") !== "lessonnotes" ? (
            <>
              <DetailsTopicCard title={"1. Greeting"} />
              <DetailsTopicCard title={"2. Introduction"} />
            </>
          ) : (
            <>
              <DetailsLessonNotesCard
                title={"1. Greeting"}
                page="lessonnotes"
                description={true}
              />
              <DetailsLessonNotesCard
                title={"2. Introduction"}
                page="lessonnotes"
                description={true}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  main: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};
export default LessonDetailsScreen;
