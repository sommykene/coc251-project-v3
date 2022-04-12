import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

export const CreateUser = async (userForm) => {
  const { email, password, firstname, username } = userForm;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const AddUserToFirestore = async (user, email, firstname, username) => {
  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    firstname: firstname,
    username: username,
    email: email,
    xpPoints: 0,
  });
};

export const GetUserFromFirestore = async (uid) => {
  return await getDoc(doc(db, "users", uid));
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
