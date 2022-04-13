import { collection, addDoc, getDocs, where, query } from "firebase/firestore";
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

export const getPhrasebooks = async () => {
  const phrasebookSnapshot = await getDocs(collection(db, "phrasebooks"));
  const phrasebookList = phrasebookSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return phrasebookList;
};

export const getPhrasebookVocab = async (id) => {
  // const phrasebookVocabList = [];

  const q = query(collection(db, "vocabs"), where("phrasebookID", "==", id));
  const phrasebookVocabSnapshot = await getDocs(q);

  // phrasebookVocabSnapshot.forEach(async (doc) => {
  //   var sound = await getVocabSound(doc.id).then((url) => {
  //     return url;
  //   });
  //   phrasebookVocabList.push({
  //     id: doc.id,
  //     sound: sound,
  //     ...doc.data(),
  //   });
  // });

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
