import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "./firebase";

const sound = ref(storage, "vocabsounds");
const cultureImagesRef = ref(storage, "cultureImages");

export const getVocabSound = async (id) => {
  return getDownloadURL(ref(sound, id + ".m4a"));
};

export const getCultureImages = async () => {
  let urlArray = [];
  await listAll(cultureImagesRef)
    .then(async (res) => {
      for (const imageRef of res.items) {
        await getDownloadURL(ref(imageRef)).then((url) => {
          urlArray.push(url);
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return urlArray;
};
