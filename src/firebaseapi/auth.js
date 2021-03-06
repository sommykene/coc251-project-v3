import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "./firebase";

export const CreateUser = async (userForm) => {
  const { email, password } = userForm;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const AddUserToFirestore = async (user, email, firstName, username) => {
  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    firstName: firstName,
    username: username,
    email: email,
    xpPoints: 0,
    dateLastActive: new Date(),
    streak: 1,
    currentLessonNumber: 1,
    levelID: "BhKw77gnJl1tM5C79fJ9",
    favouriteVocab: [],
  });
};

export const updateFavourite = async (vocabID, uid, isFavourited) => {
  const userRef = doc(db, "users", uid);

  if (isFavourited === true) {
    updateDoc(userRef, {
      favouriteVocab: arrayUnion(vocabID),
    });
  } else if (isFavourited === false) {
    updateDoc(userRef, {
      favouriteVocab: arrayRemove(vocabID),
    });
  }
};

export const completeLesson = async (newXP, nextLesson, uid) => {
  const userRef = doc(db, "users", uid);

  updateDoc(userRef, { xpPoints: newXP, currentLessonNumber: nextLesson });
};

export const completePractice = async (newXP, uid) => {
  const userRef = doc(db, "users", uid);

  updateDoc(userRef, { xpPoints: newXP });
};

export const GetUserFromFirestore = (uid, callback) => {
  onSnapshot(doc(db, "users", uid), (doc) => {
    callback(doc.data());
  });
};

export const Login = async (userForm) => {
  const { email, password } = userForm;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOut = async () => {
  return signOut(auth);
};

export const ForgotPassword = async (email) => {
  return await sendPasswordResetEmail(auth, email);
};
