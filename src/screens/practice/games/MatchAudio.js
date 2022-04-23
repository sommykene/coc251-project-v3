import React, { useEffect, useState } from "react";
import { icon } from "../../../assets/images";
import BottomColorStrip from "../../../components/BottomColorStrip";
import LeaveButton from "../../../components/LeaveButton";
import HomeButton from "../../../components/HomeButton";
import ProgressBar from "../../../components/ProgressBar";
import TextDisplay from "../components/TextDisplay";
import AudioDisplay from "../components/AudioDisplay";
import { Spacer } from "../../../components/utils";
import { color } from "../../../assets/colors/colors";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../services/AuthProvider";
import { getLessonVocab } from "../../../firebaseapi/firestore";
import ScoreCard from "./components/ScoreCard";
import { completePractice } from "../../../firebaseapi/auth";

function MatchAudio() {
  const { t, i18n } = useTranslation("common");

  const [vocabList, setVocabList] = useState([]);
  const params = useParams();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [progressState, setProgressState] = useState([]);
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const [correctVocab, setCorrectVocab] = useState([]);
  const [allVocab, setAllVocab] = useState([]);
  const [correctVocabIndex, setCorrectVocabIndex] = useState();

  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState();
  const [checking, setChecking] = useState(false);

  const [score, setScore] = useState(0);

  useEffect(() => {
    const getVocabList = async () => {
      const list = await getLessonVocab(params.lessonid);
      setVocabList(list);
      let falseArray = new Array(11).fill(null);
      falseArray[0] = true;
      setProgressState(falseArray);
      selectVocabRound(list);
      setLoading(false);
    };
    getVocabList();
  }, []);

  const selectVocabRound = (list) => {
    const newVocabOrder = shuffle(list);
    const vocabForRound = newVocabOrder.slice(0, 4);
    setAllVocab(vocabForRound);

    let randInt = Math.floor(Math.random() * (4 - 0)) + 0;
    setCorrectVocabIndex(randInt);
    setCorrectVocab(vocabForRound[randInt]);
  };

  const handleCheck = () => {
    let newProgressState = progressState;
    if (selectedAnswerIndex === correctVocabIndex) {
      newProgressState[practiceIndex] = true;
      setScore(score + 1);
    } else {
      newProgressState[practiceIndex] = false;
    }
    setProgressState(newProgressState);
    setChecking(true);
  };

  const handleNext = () => {
    setPracticeIndex(Math.min(practiceIndex + 1, vocabList.length + 1));
    setChecking(false);
    setSelectedAnswerIndex();
    setCorrectVocabIndex();
    setAllVocab([]);
    setCorrectVocab([]);
    selectVocabRound(vocabList);
  };

  const handleFinished = () => {
    const xpGain = score * 10;

    completePractice(currentUser.xpPoints + xpGain, currentUser.uid);
    navigate("/practice");
  };

  //CREDIT: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

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
            positionIndex={practiceIndex}
            type="practice"
          />
          <div style={{ display: "flex", height: "100%" }}>
            <div style={{ flex: 1 }}></div>

            <div
              style={{
                flex: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {practiceIndex !== vocabList.length + 1 ? (
                <>
                  <TextDisplay
                    text={correctVocab && correctVocab.english}
                    width="60%"
                  />
                  <Spacer height="20px" />
                  <p className="subtitle" style={{ color: color.darkgrey }}>
                    Select the Igbo audio to match the word or phrase
                  </p>
                  <Spacer height="50px" />
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "20px",
                      width: "60%",
                      justifyContent: "space-between",
                    }}
                  >
                    {allVocab.map((vocab, index) => {
                      return (
                        <div
                          key={index}
                          style={{ flexBasis: "calc(50% - 10px)" }}
                        >
                          <AudioDisplay
                            key={index + vocab.vocabID}
                            index={index}
                            text={vocab.igbo}
                            sound={vocab.sound}
                            showanswers={checking}
                            onClick={() => setSelectedAnswerIndex(index)}
                            selected={index === selectedAnswerIndex}
                            correct={checking && index === correctVocabIndex}
                            incorrect={
                              checking &&
                              selectedAnswerIndex === index &&
                              selectedAnswerIndex !== correctVocabIndex
                            }
                          />
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                <ScoreCard score={score * 10} />
              )}
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              {practiceIndex === vocabList.length + 1 ? (
                <>
                  <img src={icon.check} onClick={() => handleFinished()} />
                  <p className="balsamiq-ig subtitle">Finish</p>
                </>
              ) : checking ? (
                <img src={icon.next} onClick={() => handleNext()} />
              ) : (
                selectedAnswerIndex != null && (
                  <>
                    <img src={icon.check} onClick={() => handleCheck()} />
                    <p className="balsamiq-ig subtitle">{t("check")}</p>
                  </>
                )
              )}
            </div>
          </div>
          <HomeButton />
          <LeaveButton link="/practice" />
        </div>
      )}
    </>
  );
}

export default MatchAudio;
