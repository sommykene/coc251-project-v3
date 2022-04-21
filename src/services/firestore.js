import {
  collection,
  addDoc,
  getDocs,
  where,
  query,
  FieldPath,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";

import { VocabData } from "../data/VocabData";
import { getVocabSound } from "./storage";
import { useState } from "react";

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
    });
  });
};

// LEARN
export const getUserLevel = async (levelID) => {
  const levelSnap = await getDoc(doc(db, "levels", levelID));
  const levelName = levelSnap.exists() && levelSnap.data().name;

  return levelName || "beg";
};

export const getLevels = async () => {};

export const getTopics = async (levelID) => {
  const topicsSnap = await getDocs(
    query(collection(db, "topics"), where("levelID", "==", levelID))
  );
  const topicsList = topicsSnap.docs.map((doc) => ({
    topicID: doc.id,
    ...doc.data(),
  }));
  return topicsList;
};

export const getLessons = async (topicID) => {
  const lessonsSnap = await getDocs(
    query(collection(db, "lessons"), where("topicID", "==", topicID))
  );
  const lessonsList = lessonsSnap.docs.map((doc) => ({
    lessonID: doc.id,
    ...doc.data(),
  }));
  return lessonsList;
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
