import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "./firebase";

const sound = ref(storage, "vocabsounds");

export const getVocabSound = async (id) => {
  return getDownloadURL(ref(sound, id + ".m4a"));
};
