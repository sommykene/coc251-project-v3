import { Link, Route, Routes } from "react-router-dom";
import logo from "./assets/images/logo.svg";

import HomeScreen from "./screens/home/HomeScreen";
import CultureHomeScreen from "./screens/culture/CultureHomeScreen";

// Learn
import LearnHomeScreen from "./screens/learn/LearnHomeScreen";
import LessonDetailsScreen from "./screens/learn/LessonDetailsScreen";
import LessonLayoutPage from "./screens/learn/LessonLayoutPage";

// Practice
import PracticeHomeScreen from "./screens/practice/PracticeHomeScreen";
import MatchAudio from "./screens/practice/games/MatchAudio";
import MatchMultipleAudio from "./screens/practice/games/MatchMultipleAudio";
import MatchTranslations from "./screens/practice/games/MatchTranslations";
import SpellAudio from "./screens/practice/games/SpellAudio";
import TranslateAudio from "./screens/practice/games/TranslateAudio";
import TranslateText from "./screens/practice/games/TranslateText";

// Vocab
import DictionaryScreen from "./screens/vocab/DictionaryScreen";
import LessonsVocab from "./screens/vocab/LessonsVocab";
import PhrasebookExpanded from "./screens/vocab/PhrasebookExpanded";
import PhrasebooksHomeScreen from "./screens/vocab/PhrasebooksHomeScreen";
import VocabHomeScreen from "./screens/vocab/VocabHomeScreen";
import LoginScreen from "./screens/auth/LoginScreen";

function App() {
  return (
    <div className="App">
      <Link to="/">
        <img style={styles.logo} src={logo} />
      </Link>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<HomeScreen />} />
        <Route path="learn/*" element={<LearnRoutes />} />
        <Route path="practice/*" element={<PracticeRoutes />} />
        <Route path="vocab/*" element={<VocabRoutes />} />
        <Route path="culture/*" element={<CultureHomeScreen />} />
      </Routes>
    </div>
  );
}

const LearnRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LearnHomeScreen />} />
      <Route path=":topicid/details" element={<LessonDetailsScreen />} />
      <Route path=":topicid/lesson/:lessonid" element={<LessonLayoutPage />} />
    </Routes>
  );
};

const PracticeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PracticeHomeScreen />} />
      <Route path="/ma" element={<MatchAudio />} />
      <Route path="/mma" element={<MatchMultipleAudio />} />
      <Route path="/mt" element={<MatchTranslations />} />
      <Route path="/sa" element={<SpellAudio />} />
      <Route path="/ta" element={<TranslateAudio />} />
      <Route path="/tt" element={<TranslateText />} />
    </Routes>
  );
};

const VocabRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<VocabHomeScreen />} />
      <Route path="dictionary" element={<DictionaryScreen />} />
      <Route path="lessonsvocab" element={<LessonsVocab />} />
      <Route path="phrasebooks" element={<PhrasebooksHomeScreen />} />
      <Route
        path="phrasebooks/:phrasebookid"
        element={<PhrasebookExpanded />}
      />
    </Routes>
  );
};

const styles = {
  logo: {
    position: "fixed",
    top: 15,
    left: 15,
    width: "30px",
  },
};
export default App;
