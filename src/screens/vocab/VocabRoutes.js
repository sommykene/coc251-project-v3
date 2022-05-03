import { Route, Routes } from "react-router-dom";
import DictionaryScreen from "./DictionaryScreen";
import LessonsVocab from "./LessonsVocab";
import PhrasebookExpanded from "./PhrasebookExpanded";
import PhrasebooksHomeScreen from "./PhrasebooksHomeScreen";
import VocabHomeScreen from "./VocabHomeScreen";

export const VocabRoutes = () => {
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
