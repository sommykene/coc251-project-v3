import React from "react";
import { Link } from "react-router-dom";
import { color } from "../../assets/colors/colors";
import logo from "../../assets/images/logo.svg";
import { Spacer } from "../../components/utils";

function LoginScreen() {
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

        <input style={styles.input} type="email" placeholder="Email" />
        <Spacer height="10px" />
        <input style={styles.input} type="password" placeholder="Password" />
        <p style={{ color: color.red }}>Forgot Password</p>
        <p style={styles.login}>Login</p>
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
    fontSize: "18px",
    borderRadius: "10px",
    width: "30%",
  },
  login: {
    padding: "10px",
    backgroundColor: color.yellow,
    fontSize: "18px",
    width: "30%",
    borderRadius: "10px",
    textAlign: "center",
    fontWeight: "bold",
  },
};
export default LoginScreen;
