import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { color } from "../../assets/colors/colors";
import logo from "../../assets/images/logo.svg";
import { Spacer } from "../../components/utils";

import { Login } from "../../services/auth";

import { toast } from "react-toastify";

const INITIAL_USER = {
  email: "",
  password: "",
};

function LoginScreen() {
  const [userForm, setUserForm] = useState(INITIAL_USER);
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, []);

  const handleChange = (event) => {
    setUserForm({ ...userForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    await Login(userForm)
      .then((res) => {
        sessionStorage.setItem("Auth Token", res._tokenResponse.refreshToken);
        navigate("/");
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          toast.error("Please check the Password");
        }
        if (error.code === "auth/user-not-found") {
          toast.error("Please check the Email");
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
        <h1 className="balsamiq-ig">Login</h1>

        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Spacer height="10px" />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <p style={{ color: color.red }}>Forgot Password</p>
        <p style={styles.login} onClick={() => handleSubmit()}>
          Login
        </p>
        <Link to="/signup" style={{ marginTop: 0, color: color.teal }}>
          Create an account
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
    fontSize: "16px",
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
export default LoginScreen;
