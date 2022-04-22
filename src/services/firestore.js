import {
  collection,
  addDoc,
  getDocs,
  where,
  query,
  FieldPath,
  getDoc,
  doc,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "./firebase";

import { VocabData } from "../data/VocabData";
import { getVocabSound } from "./storage";

export const AddFiles = () => {
  console.log("Added");
  VocabData.forEach(async (x) => {
    const docRef = await addDoc(collection(db, "vocabs"), {
      english: x.english,
      igbo: x.igbo,
      definition: x.definition,
      examples: {
        english: x.english,
        igbo: x.igbo,
      },
      lessonID: x.lessonID,
      lessonOrder: x.lessonOrder,
      phrasebookID: x.phrasebookID,
      phrasebookOrder: x.phrasebookOrder,
      random: x.random,
    });
  });
};

// LEVELS
export const getUserLevel = async (levelID) => {
  const levelSnap = await getDoc(doc(db, "levels", levelID));
  const levelName = levelSnap.exists() && levelSnap.data().name;

  return levelName;
};

export const getLevels = async () => {};

// TOPICS
export const getTopics = async (levelID) => {
  const topicsSnap = await getDocs(
    query(collection(db, "topics"), where("levelID", "==", levelID))
  );
  const topicsList = topicsSnap.docs
    .map((doc) => ({
      topicID: doc.id,
      ...doc.data(),
    }))
    .sort((a, b) => a.topicNumber - b.topicNumber);
  return topicsList;
};

export const getTopicByID = async (topicID) => {
  const topicSnap = await getDoc(doc(db, "topics", topicID));
  const topicDetails = topicSnap.exists() && {
    name: topicSnap.data().name,
    description: topicSnap.data().description,
  };

  return topicDetails;
};

// LESSON
export const getLessons = async (topicID) => {
  const lessonsSnap = await getDocs(
    query(collection(db, "lessons"), where("topicID", "==", topicID))
  );
  const lessonsList = lessonsSnap.docs
    .map((doc) => ({
      lessonID: doc.id,
      ...doc.data(),
    }))
    .sort((a, b) => a.lessonNumber - b.lessonNumber);
  return lessonsList;
};

// VOCAB
export const getAllVocabTillLessonNumber = async (lessonNumber) => {
  const vocabSnap = await getDocs(
    query(collection(db, "vocabs"), where("lessonNumber", "<=", lessonNumber))
  );
  const vocabList = vocabSnap.docs.map((doc) => ({
    vocabID: doc.id,
    ...doc.data(),
  }));

  for (const doc of vocabList) {
    var sound = await getVocabSound(doc.vocabID).then((url) => {
      return url;
    });
    doc["sound"] = sound;
  }

  return vocabList;
};

export const getLessonVocab = async (lessonID) => {
  const vocabSnap = await getDocs(
    query(collection(db, "vocabs"), where("lessonID", "==", lessonID))
  );
  const vocabList = vocabSnap.docs
    .map((doc) => ({
      vocabID: doc.id,
      ...doc.data(),
    }))
    .sort((a, b) => a.lessonOrder - b.lessonOrder);

  for (const doc of vocabList) {
    var sound = await getVocabSound(doc.vocabID).then((url) => {
      return url;
    });
    doc["sound"] = sound;
  }
  return vocabList;
};

// PHRASEBOOKS

export const getPhrasebooks = async () => {
  const phrasebookSnapshot = await getDocs(collection(db, "phrasebooks"));
  const phrasebookList = phrasebookSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return phrasebookList;
};

export const getPhrasebookVocab = async (id) => {
  const q = query(collection(db, "vocabs"), where("phrasebookID", "==", id));
  const phrasebookVocabSnapshot = await getDocs(q);

  const phrasebookVocabList = phrasebookVocabSnapshot.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .sort((a, b) => a.phrasebookOrder - b.phrasebookOrder);

  for (const doc of phrasebookVocabList) {
    var sound = await getVocabSound(doc.id).then((url) => {
      return url;
    });
    doc["sound"] = sound;
  }

  return phrasebookVocabList;
};

export const getWordOfTheDay = async () => {
  var random = Math.random();
  const lessThanRandQuery = query(
    collection(db, "vocabs"),
    where("random", "<=", random),
    orderBy("random", "desc"),
    limit(1)
  );
  const lessThanQuerySnapshot = await getDocs(lessThanRandQuery);
  const wotd = lessThanQuerySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  // only run if vocab not found above
  if (wotd.length === 0) {
    const randquerygreaterthan = query(
      collection(db, "vocabs"),
      where("random", ">=", random),
      orderBy("random"),
      limit(1)
    );
    const greaterThanQuerySnapshot = await getDocs(randquerygreaterthan);
    wotd = greaterThanQuerySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  }
  return wotd;
};
