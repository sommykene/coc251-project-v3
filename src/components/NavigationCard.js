import React from "react";
import { Link } from "react-router-dom";

import { color } from "../assets/colors/colors";
import { icon } from "../assets/images";

function NavigationCard({ page }) {
  return (
    <div style={styles.card}>
      <Link to="/">
        <img src={icon.home} />
      </Link>
      <Link to="/learn">
        <img
          src={
            page !== "learn" ? icon.learn.small.reg : icon.learn.small.active
          }
        />
      </Link>
      <Link to="/practice">
        <img
          src={
            page !== "practice"
              ? icon.practice.small.reg
              : icon.practice.small.active
          }
        />
      </Link>
      <Link to="/vocab">
        <img
          src={
            page !== "vocab" ? icon.vocab.small.reg : icon.vocab.small.active
          }
        />
      </Link>
      <Link to="/culture">
        <img
          src={
            page !== "culture"
              ? icon.culture.small.reg
              : icon.culture.small.active
          }
        />
      </Link>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    gap: "0px 10px",
    backgroundColor: color.white,
    borderRadius: "10px",
    width: "fit-content",
    margin: "auto",
    padding: "0 10px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

export default NavigationCard;
