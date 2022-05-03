import { Route, Routes } from "react-router-dom";
import MatchAudio from "./games/MatchAudio";
import MatchMultipleAudio from "./games/MatchMultipleAudio";
import MatchTranslations from "./games/MatchTranslations";
import SpellAudio from "./games/SpellAudio";
import TranslateAudio from "./games/TranslateAudio";
import TranslateText from "./games/TranslateText";
import PracticeHomeScreen from "./PracticeHomeScreen";

export const PracticeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PracticeHomeScreen />} />
      <Route path="/ma/:lessonid" element={<MatchAudio />} />
      <Route path="/mma/:lessonid" element={<MatchMultipleAudio />} />
      <Route path="/mt/:lessonid" element={<MatchTranslations />} />
      <Route path="/sa/:lessonid" element={<SpellAudio />} />
      <Route path="/ta/:lessonid" element={<TranslateAudio />} />
      <Route path="/tt/:lessonid" element={<TranslateText />} />
    </Routes>
  );
};
