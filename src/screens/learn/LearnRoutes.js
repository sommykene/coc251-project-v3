import { Route, Routes } from "react-router-dom";
import LearnHomeScreen from "./LearnHomeScreen";
import LessonDetailsScreen from "./LessonDetailsScreen";
import LessonLayoutPage from "./LessonLayoutPage";

export const LearnRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LearnHomeScreen />} />
      <Route path=":topicid/details" element={<LessonDetailsScreen />} />
      <Route path=":topicid/lesson/:lessonid" element={<LessonLayoutPage />} />
    </Routes>
  );
};
