import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { color } from "../assets/colors/colors";
import { icon } from "../assets/images";

function LeaveButton({ link }) {
  const { t, i18n } = useTranslation("common");
  return (
    <Link to={link}>
      <div
        className="balsamiq-ig"
        style={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
          width: "fit-content",
          backgroundColor: color.red,
          color: color.white,
          padding: "10px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <img style={{ height: "20px" }} src={icon.backarrow.white} />
        <span>{t("leave")}</span>
      </div>
    </Link>
  );
}

export default LeaveButton;
