import React, { useEffect, useRef, useState } from "react";
import { icon } from "@assets/images";
import BottomColorStrip from "@components/BottomColorStrip";
import LeaveButton from "@components/LeaveButton";
import HomeButton from "@components/HomeButton";
import ProgressBar from "@components/ProgressBar";
import { Spacer } from "@components/utils";
import { color } from "@assets/colors/colors";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "@services/AuthProvider";
import { getLessonVocab } from "@firebaseapi/firestore";
import ScoreCard from "./components/ScoreCard";
import { completePractice } from "@firebaseapi/auth";
import shuffleArray from "./utils/shuffleArray";
import IgboLetterButtons from "../components/IgboLetterButtons";
import TextDisplay from "../components/TextDisplay";

function TranslateText() {
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
  const [textAnswer, setTextAnswer] = useState("");
  const [score, setScore] = useState(0);

  const [inputRef, setInputFocus] = useFocus();
  const [vocabLanguage, setVocabLanguage] = useState("english");

  const handleChange = (e) => {
    setTextAnswer(e.target.value);
  };

  const handleSpecialLetters = (letter) => {
    setTextAnswer(textAnswer + letter);
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
    let oneOrZero = Math.random() >= 0.5 ? 1 : 0;
    setVocabLanguage(oneOrZero === 0 ? "english" : "igbo");
    const newVocabOrder = shuffleArray(list);
    const vocabForRound = newVocabOrder.slice(0, 1);
    console.log("v", vocabForRound[0].igbo);
    setCorrectVocab(vocabForRound[0]);
  };

  const handleCheck = () => {
    let newProgressState = progressState;
    if (
      correctVocab.igbo.toLowerCase() === textAnswer.toLowerCase() ||
      correctVocab.english.toLowerCase() === textAnswer.toLowerCase()
    ) {
      newProgressState[practiceIndex] = true;
      setScore(score + 1);
      setAnswerStatus("correct");
    } else {
      newProgressState[practiceIndex] = false;
      setAnswerStatus("incorrect");
    }
    setProgressState(newProgressState);
    setChecking(true);
    setTextAnswer(
      vocabLanguage === "english" ? correctVocab.igbo : correctVocab.english
    );
  };

  const handleNext = () => {
    setPracticeIndex(Math.min(practiceIndex + 1, 10));
    setChecking(false);
    setTextAnswer("");
    setCorrectVocab([]);
    selectVocabRound(vocabList);
    setInputFocus();
  };

  const handleFinished = () => {
    const xpGain = score * 10;

    completePractice(currentUser.xpPoints + xpGain, currentUser.uid);
    navigate("/practice");
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
                  <TextDisplay
                    text={
                      vocabLanguage === "english"
                        ? correctVocab.english
                        : correctVocab.igbo
                    }
                    width="60%"
                  />
                  <Spacer height="10px" />
                  <p className="subtitle" style={{ color: color.darkgrey }}>
                    Translate the word or phrase
                  </p>
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
                    value={textAnswer}
                    onChange={handleChange}
                    autoFocus
                    ref={inputRef}
                  />
                  <Spacer height="40px" />
                  {vocabLanguage === "english" && (
                    <IgboLetterButtons
                      addInput={(letter) => handleSpecialLetters(letter)}
                      setFocus={() => setInputFocus()}
                    />
                  )}
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
                textAnswer.length > 0 && (
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

export default TranslateText;
