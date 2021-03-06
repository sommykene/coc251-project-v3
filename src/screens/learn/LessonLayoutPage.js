import React, { useEffect, useState } from "react";
import EnglishWordsList from "./components/EnglishWordsList";
import TranslationGrid from "@components/TranslationsGrid";
import { icon } from "@assets/images";
import BottomColorStrip from "@components/BottomColorStrip";
import { useTranslation } from "react-i18next";
import VocabDisplay from "./components/VocabDisplay";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LeaveButton from "@components/LeaveButton";
import HomeButton from "@components/HomeButton";
import ProgressBar from "@components/ProgressBar";
import { getLessonVocab } from "@firebaseapi/firestore";
import { completeLesson } from "@firebaseapi/auth";
import useAuth from "@services/AuthProvider";

function LessonLayoutPage() {
  const [vocabList, setVocabList] = useState([]);
  const params = useParams();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [progressState, setProgressState] = useState([]);
  const [lessonIndex, setLessonIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const { t } = useTranslation("common");

  useEffect(() => {
    const getVocabList = async () => {
      const list = await getLessonVocab(params.lessonid);
      setVocabList(list);

      let falseArray = new Array(list.length + 2).fill(false);
      falseArray[0] = true;
      setProgressState(falseArray);
      setLoading(false);
    };
    getVocabList();
  }, []);

  const handleNext = () => {
    setLessonIndex(Math.min(lessonIndex + 1, vocabList.length + 1));
    let newProgressState = progressState;
    newProgressState[lessonIndex] = true;
    setProgressState(newProgressState);
  };

  const handleFinished = () => {
    // replaying completed lessons wont change the users currentLevelNumber
    const userCurrentLevel =
      location.state.lessonNumber < currentUser.currentLessonNumber
        ? currentUser.currentLessonNumber
        : currentUser.currentLessonNumber + 1;

    // replaying a lesson is 50xp, completing a new lesson is 100xp
    const xpGain =
      location.state.lessonNumber < currentUser.currentLessonNumber ? 50 : 100;

    completeLesson(
      currentUser.xpPoints + xpGain,
      userCurrentLevel,
      currentUser.uid
    );
    navigate(`/learn/${params.topicid}/details?tab=viewlessons`);
  };

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: "50px",
          }}
          className="balsamiq-ig"
        >
          loading...
        </div>
      ) : (
        <div
          style={{
            height: "100%",
            padding: "50px 0",
          }}
        >
          <BottomColorStrip page={"learn"} />

          <ProgressBar
            progressState={progressState}
            positionIndex={lessonIndex}
            type="learn"
          />
          <div style={{ display: "flex", height: "100%" }}>
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {lessonIndex !== 0 && lessonIndex !== vocabList.length + 1 && (
                <img
                  src={icon.prev}
                  onClick={() => setLessonIndex(Math.max(lessonIndex - 1, 0))}
                />
              )}
            </div>
            <div
              style={{
                flex: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {lessonIndex === 0 && <EnglishWordsList data={vocabList} />}
              {lessonIndex !== 0 && lessonIndex !== vocabList.length + 1 && (
                <VocabDisplay vocab={vocabList[lessonIndex - 1]} />
              )}
              {lessonIndex === vocabList.length + 1 && (
                <TranslationGrid data={vocabList} fullWidth={true} />
              )}
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {lessonIndex === vocabList.length + 1 ? (
                <>
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img src={icon.check} onClick={() => handleFinished()} />
                    <p className="balsamiq-ig subtitle">Finish</p>
                  </div>
                </>
              ) : (
                <img src={icon.next} onClick={() => handleNext()} />
              )}
            </div>
          </div>

          <HomeButton />
          <LeaveButton
            link={`/learn/${params.topicid}/details?tab=viewlessons`}
          />
        </div>
      )}
    </>
  );
}

export default LessonLayoutPage;
