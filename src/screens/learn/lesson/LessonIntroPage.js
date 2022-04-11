import React from "react";
import EnglishWordsList from "./components/EnglishWordsList";
import sound from "../../../assets/sound.wav";

const data = [
  { english: "Welcome", igbo: "nnọọ", sound: sound },
  { english: "Good Morning", igbo: "ụtụtụ ọma", sound: sound },
  { english: "Welcome", igbo: "nnọọ", sound: sound },
  { english: "Good Morning", igbo: "ụtụtụ ọma", sound: sound },
  { english: "Welcome", igbo: "nnọọ", sound: sound },
  { english: "Good Morning", igbo: "ụtụtụ ọma", sound: sound },
  { english: "Welcome", igbo: "nnọọ", sound: sound },
  { english: "Good Morning", igbo: "ụtụtụ ọma", sound: sound },
];

function LessonIntroPage() {
  return (
    <div>
      <EnglishWordsList data={data} />
    </div>
  );
}

export default LessonIntroPage;
