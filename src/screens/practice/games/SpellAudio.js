import React, { useEffect, useRef, useState } from "react";
import { icon } from "@assets/images";
import BottomColorStrip from "@components/BottomColorStrip";
import LeaveButton from "@components/LeaveButton";
import HomeButton from "@components/HomeButton";
import ProgressBar from "@components/ProgressBar";
import { Spacer } from "@components/utils";
import { color } from "@assets/colors/colors";
import AudioButton from "@components/AudioButton";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "@services/AuthProvider";
import { getLessonVocab } from "@firebaseapi/firestore";
import ScoreCard from "./components/ScoreCard";
import { completePractice } from "@firebaseapi/auth";
import shuffleArray from "./utils/shuffleArray";
import IgboLetterButtons from "../components/IgboLetterButtons";

function SpellAudio() {
  const { t, i18n } = useTranslation("common");

  const [vocabList, setVocabList] = useState([]);
  const params = useParams();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [progressState, setProgressState] = useState([]);
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const [correctVocab, setCorrectVocab] = useState([]);
  const [checking, setChecking] = useState(false);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [igboAnswer, setIgboAnswer] = useState("");
  const [score, setScore] = useState(0);

  const [inputRef, setInputFocus] = useFocus();

  const handleChange = (e) => {
    setIgboAnswer(e.target.value);
  };

  const handleSpecialLetters = (letter) => {
    setIgboAnswer(igboAnswer + letter);
  };
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
    const newVocabOrder = shuffleArray(list);
    const vocabForRound = newVocabOrder.slice(0, 1);
    console.log("v", vocabForRound[0].igbo);
    setCorrectVocab(vocabForRound[0]);
  };

  const handleCheck = () => {
    let newProgressState = progressState;
    if (correctVocab.igbo.toLowerCase() === igboAnswer.toLowerCase()) {
      newProgressState[practiceIndex] = true;
      setScore(score + 1);
      setAnswerStatus("correct");
    } else {
      newProgressState[practiceIndex] = false;
      setAnswerStatus("incorrect");
    }
    setProgressState(newProgressState);
    setChecking(true);
    setIgboAnswer(correctVocab.igbo);
  };

  const handleNext = () => {
    setPracticeIndex(Math.min(practiceIndex + 1, 10));
    setChecking(false);
    setIgboAnswer("");
    setCorrectVocab([]);
    selectVocabRound(vocabList);
  };

  const handleFinished = () => {
    const xpGain = score * 10;

    completePractice(currentUser.xpPoints + xpGain, currentUser.uid);
    navigate("/practice");
  };

  const handleFocus = () => {
    setInputFocus();
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
              }}
            >
              {/* main Content */}
              {practiceIndex !== 10 ? (
                <>
                  <p className="subtitle" style={{ color: color.darkgrey }}>
                    Spell out what you hear in IGBO
                  </p>
                  <Spacer height="40px" />
                  <div
                    style={{
                      width: "calc(25% - 20px)",
                      backgroundColor: color.white,
                      padding: "20px",
                      borderRadius: "10px",
                    }}
                  >
                    <AudioButton
                      key={correctVocab.vocabID}
                      url={correctVocab.sound}
                      fillSpace={true}
                      width={"80px"}
                    />
                  </div>
                  <div style={{ flex: 1 }}></div>
                  <input
                    type="text"
                    style={
                      !checking
                        ? styles.input
                        : answerStatus === "correct"
                        ? styles.inputCorrect
                        : styles.inputIncorrect
                    }
                    value={igboAnswer}
                    onChange={handleChange}
                    autoFocus
                    ref={inputRef}
                  />
                  <Spacer height="40px" />
                  <IgboLetterButtons
                    addInput={(letter) => handleSpecialLetters(letter)}
                    setFocus={() => handleFocus()}
                  />
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
              {practiceIndex === 10 ? (
                <>
                  <img src={icon.check} onClick={() => handleFinished()} />
                  <p className="balsamiq-ig subtitle">Finish</p>
                </>
              ) : checking ? (
                <img src={icon.next} onClick={() => handleNext()} />
              ) : (
                igboAnswer.length > 0 && (
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

// CREDIT https://stackoverflow.com/questions/28889826/how-to-set-focus-on-an-input-field-after-rendering
const useFocus = () => {
  const htmlElRef = useRef();
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

const styles = {
  input: {
    backgroundColor: "transparent",
    color: color.black,
    outline: "none",
    outlineStyle: "none",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: `3px ${color.darkgrey} solid`,
    padding: "3px 10px",
    width: "80%",
    height: "100px",
    fontSize: "25px",
    textAlign: "center",
  },
  inputCorrect: {
    backgroundColor: "transparent",
    color: color.green,
    outline: "none",
    outlineStyle: "none",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: `3px ${color.darkgrey} solid`,
    padding: "3px 10px",
    width: "80%",
    height: "100px",
    fontSize: "25px",
    textAlign: "center",
  },
  inputIncorrect: {
    backgroundColor: "transparent",
    color: color.red,
    outline: "none",
    outlineStyle: "none",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: `3px ${color.darkgrey} solid`,
    padding: "3px 10px",
    width: "80%",
    height: "100px",
    fontSize: "25px",
    textAlign: "center",
  },
};

export default SpellAudio;
