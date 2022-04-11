import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { color } from "../../../assets/colors/colors";

function TopicCard({ topicid, title }) {
  const { t, i18n } = useTranslation("common");
  let params = useParams();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ height: "70px", padding: "0 30px" }} className="basic-card">
      <div style={styles.main}>
        <p style={styles.lessonsTitle}>{title}</p>
        <div style={styles.buttons} className="balsamiq-ig">
          <Link
            style={
              searchParams.get("tab") !== "viewlessons"
                ? styles.button
                : styles.buttonSelected
            }
            to={`/learn/${topicid}/details?tab=viewlessons`}
          >
            {t("viewlessons")}
          </Link>
          <Link
            style={
              searchParams.get("tab") !== "lessonnotes"
                ? styles.button
                : styles.buttonSelected
            }
            to={`/learn/${topicid}/details?tab=lessonnotes`}
          >
            {t("lessonnotes")}
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  lessonsTitle: {
    flex: 1,
    fontSize: "20px",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    alignItems: "center",
  },
  button: {
    borderRadius: "10px",
    border: `1px ${color.darkgrey} solid`,
    padding: "10px 10px 5px",
    color: color.darkgrey,
    cursor: "pointer",
    height: "fit-content",
  },
  buttonSelected: {
    borderRadius: "10px",
    padding: "10px 10px 5px",
    backgroundColor: color.yellow,
    cursor: "pointer",
    color: color.black,
  },
  description: {
    fontSize: "18px",
    color: color.darkgrey,
  },
};

export default TopicCard;
