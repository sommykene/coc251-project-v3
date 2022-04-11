import { Link, Route, Routes } from "react-router-dom";
import logo from "./assets/images/logo.svg";

import CultureHomeScreen from "./screens/culture/CultureHomeScreen";
import HomeScreen from "./screens/home/HomeScreen";
import LearnHomeScreen from "./screens/learn/LearnHomeScreen";
import LessonDetailsScreen from "./screens/learn/LessonDetailsScreen";
import LessonIntroPage from "./screens/learn/lesson/LessonIntroPage";
import PracticeHomeScreen from "./screens/practice/PracticeHomeScreen";
import DictionaryScreen from "./screens/vocab/DictionaryScreen";
import LessonsVocab from "./screens/vocab/LessonsVocab";
import PhrasebookExpanded from "./screens/vocab/PhrasebookExpanded";
import PhrasebooksHomeScreen from "./screens/vocab/PhrasebooksHomeScreen";
import VocabHomeScreen from "./screens/vocab/VocabHomeScreen";

function App() {
  return (
    <div className="App">
      <Link to="/">
        <img style={styles.logo} src={logo} />
      </Link>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
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
      <Route path=":topicid/details" element={<LessonIntroPage />} />
    </Routes>
  );
};

const PracticeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PracticeHomeScreen />} />
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
