import React from "react";
import { Link, useParams } from "react-router-dom";
import { color } from "../../../assets/colors/colors";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DetailsLessonCard({ title, lessonID, status }) {
  let params = useParams();
  return (
    <div
      style={{
        height: "60px",
        padding: "0 20px",
      }}
      className="basic-card"
    >
      <div style={styles.main}>
        <p style={styles.topicTitle}>{title}</p>
        {/* button */}
        <div style={styles.buttons} className="balsamiq-ig">
          <Link
            to={
              status === "locked"
                ? `/learn/${params.topicid}/details?tab=viewlessons`
                : `/learn/${params.topicid}/lesson/${lessonID}`
            }
          >
            <p
              style={{
                borderRadius: "10px",
                padding: "5px 10px",
                backgroundColor:
                  status === "completed"
                    ? color.green
                    : status === "current"
                    ? color.yellow
                    : color.darkgrey,
                color: status === "current" ? color.black : color.white,
                width: "100px",
                textAlign: "center",
              }}
              onClick={() => {
                toast.configure();
                if (status === "locked") {
                  toast.info("Lesson is locked, complete previous lesson", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                  });
                }
              }}
            >
              {status === "completed"
                ? "Completed"
                : status === "current"
                ? "Start"
                : "Locked"}
            </p>
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
  topicTitle: {
    flex: 1,
    fontSize: "20px",
    margin: "auto",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    cursor: "pointer",
  },
  button: {},
};

export default DetailsLessonCard;
