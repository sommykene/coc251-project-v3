import React from "react";
import { Link } from "react-router-dom";
import { color } from "../../assets/colors/colors";
import logo from "../../assets/images/logo.svg";
import { Spacer } from "../../components/utils";

function SignUpScreen() {
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
        <input style={styles.input} type="text" placeholder="Name" />
        <Spacer height="10px" />
        <input style={styles.input} type="email" placeholder="Email" />
        <Spacer height="10px" />
        <input style={styles.input} type="password" placeholder="Password" />
        <Spacer height="10px" />
        <input
          style={styles.input}
          type="password"
          placeholder="Confirm Password"
        />
        <p style={styles.login}>Sign Up</p>
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
export default SignUpScreen;
