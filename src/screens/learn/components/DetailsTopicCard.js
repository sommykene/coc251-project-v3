import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { color } from "../../../assets/colors/colors";
import { getTopicByID } from "../../../firebaseapi/firestore";

function DetailsTopicCard({ location }) {
  const { t, i18n } = useTranslation("common");
  let params = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  const [topic, setTopic] = useState({});

  useEffect(() => {
    const getTopic = async (topicID) => {
      let topicDetails = await getTopicByID(topicID);
      setTopic(topicDetails);
    };

    getTopic(params.topicid);
  }, []);

  return (
    <div
      style={{ minHeight: "100px", padding: "0 30px 15px" }}
      className="basic-card"
    >
      <div style={styles.main}>
        <p style={styles.lessonsTitle}>{topic && topic.name}</p>
        <div style={styles.buttons} className="balsamiq-ig">
          <p
            style={
              searchParams.get("tab") !== "viewlessons"
                ? styles.button
                : styles.buttonSelected
            }
            onClick={() => {
              setSearchParams({ tab: "viewlessons" });
            }}
          >
            {t("viewlessons")}
          </p>
          <p
            style={
              searchParams.get("tab") !== "lessonnotes"
                ? styles.button
                : styles.buttonSelected
            }
            onClick={() => {
              setSearchParams({ tab: "lessonnotes" });
            }}
          >
            {t("lessonnotes")}
          </p>
        </div>
      </div>
      <span style={styles.description}>{topic && topic.description}</span>
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

export default DetailsTopicCard;
