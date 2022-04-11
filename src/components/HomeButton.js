import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { color } from "../assets/colors/colors";
import Logo from "../assets/images/logo.svg";

function HomeButton() {
  const { t, i18n } = useTranslation("common");

  return (
    <Link to="/">
      <div
        className="balsamiq-ig"
        style={{
          position: "absolute",
          bottom: "50px",
          left: "50px",
          width: "fit-content",
          backgroundColor: color.white,
          color: color.black,
          padding: "10px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <img style={{ height: "20px" }} src={Logo} />
        <span>{t("home")}</span>
      </div>
    </Link>
  );
}

export default HomeButton;
