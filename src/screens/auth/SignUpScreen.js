import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { color } from "../../assets/colors/colors";
import logo from "../../assets/images/logo.svg";
import { Spacer } from "../../components/utils";
import { AddUserToFirestore, CreateUser } from "../../firebaseapi/auth";

import { toast } from "react-toastify";

const INITIAL_USER = {
  username: "",
  password: "",
  confirmpassword: "",
  email: "",
  firstName: "",
  xp_points: 0,
  dateLastActive: new Date(),
  streak: 1,
  currentLessonNumber: 1,
  levelID: "BhKw77gnJl1tM5C79fJ9",
  favouriteVocab: [],
};

function SignUpScreen() {
  const [userForm, setUserForm] = useState(INITIAL_USER);
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/");
    }

    if (!authToken) {
      navigate("/signup");
    }
  }, []);

  const handleChange = (event) => {
    setUserForm({ ...userForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    await CreateUser(userForm)
      .then((res) => {
        sessionStorage.setItem("Auth Token", res._tokenResponse.refreshToken);
        const user = res.user;
        AddUserToFirestore(
          user,
          userForm.email,
          userForm.firstName,
          userForm.username
        );
        navigate("/");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email Already in Use");
        }
      });
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
      }}
    >
      {/* left */}
      <div
        style={{
          flex: 1,
          backgroundColor: color.duckegg,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={logo} width="300" />
      </div>
      {/* right */}
      <div
        style={{
          flex: 1.5,
          backgroundColor: color.white,
          display: "flex",
          flexDirection: "column",
          padding: "50px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="balsamiq-ig">Sign Up</h1>
        <input
          style={styles.input}
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={(e) => handleChange(e)}
        />
        <Spacer height="10px" />
        <input
          style={styles.input}
          type="text"
          placeholder="Username"
          name="username"
          onChange={(e) => handleChange(e)}
        />
        <Spacer height="10px" />
        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <Spacer height="10px" />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <Spacer height="10px" />
        <input
          style={styles.input}
          type="password"
          placeholder="Confirm Password"
          name="confirmpassword"
          onChange={(e) => handleChange(e)}
        />
        <p style={styles.login} onClick={() => handleSubmit()}>
          Sign Up
        </p>
        <Link to="/login" style={{ marginTop: 0, color: color.teal }}>
          Already have an account? Login In
        </Link>
      </div>
    </div>
  );
}

const styles = {
  input: {
    outline: "none",
    padding: "10px",
    backgroundColor: "#E9EDF0",
    border: "none",
    borderRadius: "10px",
    width: "30%",
  },
  login: {
    padding: "10px",
    backgroundColor: color.yellow,
    fontSize: "16px",
    width: "30%",
    borderRadius: "10px",
    textAlign: "center",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
export default SignUpScreen;
