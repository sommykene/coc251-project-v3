import { Link, Route, Routes } from "react-router-dom";
import logo from "./assets/images/logo.svg";

import CultureHomeScreen from "./screens/culture/CultureHomeScreen";
import HomeScreen from "./screens/home/HomeScreen";
import LearnHomeScreen from "./screens/learn/LearnHomeScreen";
import LessonDetailsScreen from "./screens/learn/LessonDetailsScreen";
import PracticeHomeScreen from "./screens/practice/PracticeHomeScreen";
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
      <Route path=":id/details" element={<LessonDetailsScreen />} />
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
    </Routes>
  );
};

const styles = {
  logo: {
    position: "absolute",
    top: 15,
    left: 15,
    width: "30px",
  },
};
export default App;
