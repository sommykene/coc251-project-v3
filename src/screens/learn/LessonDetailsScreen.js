import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { color } from "../../assets/colors/colors";
import BottomColorStrip from "../../components/BottomColorStrip";
import { Spacer } from "../../components/utils";
import Sidebar from "../../components/Sidebar";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { lessonsData } from "../../data/lessonsData";
import DetailsTopicCard from "./components/DetailsTopicCard";
import DetailsLessonNotesCard from "./components/DetailsLessonNotesCard";
import DetailsLessonCard from "./components/DetailsLessonCard";
import { icon } from "../../assets/images";
import { getLessons } from "../../firebaseapi/firestore";
import useAuth from "../../services/AuthProvider";

function LessonDetailsScreen() {
  const { t, i18n } = useTranslation("common");
  let params = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const page = "learn";

  const [lessonsList, setLessonsList] = useState([]);

  useEffect(() => {
    const getTopicLessons = async (topicID) => {
      let lessons = await getLessons(topicID);
      setLessonsList(lessons);
    };

    getTopicLessons(params.topicid);
  }, []);

  const lesson = lessonsData.find((lesson) => {
    return lesson.topicid === params.topicid;
  });

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
          <div>
            <img
              style={{ marginRight: "10px", cursor: "pointer" }}
              src={icon.backarrow.black}
              onClick={() => navigate("/learn")}
            />
            <span className="pagetitle balsamiq-ig">{t("igbolessons")}</span>
          </div>
          <span
            style={{ color: color.darkgrey }}
            className="subtitle balsamiq-ig"
          >
            Level: Beginner
          </span>
        </div>
        <Spacer height="20px" />
        <DetailsTopicCard />
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
              {lessonsList.length > 0 ? (
                lessonsList.map((lesson, index) => {
                  return (
                    <DetailsLessonCard
                      key={index}
                      lessonID={lesson.lessonID}
                      lessonNumber={lesson.lessonNumber}
                      title={index + 1 + ". " + lesson.name}
                      status={
                        lesson.lessonNumber < currentUser.currentLessonNumber
                          ? "completed"
                          : currentUser.currentLessonNumber ===
                            lesson.lessonNumber
                          ? "current"
                          : "locked"
                      }
                    />
                  );
                })
              ) : (
                <p
                  className="balsamiq-ig"
                  style={{ fontStyle: "italic", color: color.darkgrey }}
                >
                  No Lesson Available, Please Check Back Another Time
                </p>
              )}
            </>
          ) : (
            <>
              {lessonsList.length > 0 ? (
                lessonsList.map((lesson, index) => {
                  return (
                    <DetailsLessonNotesCard
                      key={index}
                      title={index + 1 + ". " + lesson.name}
                      notes={lesson.notes}
                    />
                  );
                })
              ) : (
                <p
                  className="balsamiq-ig"
                  style={{ fontStyle: "italic", color: color.darkgrey }}
                >
                  No Lesson Available, Please Check Back Another Time
                </p>
              )}
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
