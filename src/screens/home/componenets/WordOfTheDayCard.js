import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { color } from "../../../assets/colors/colors";
import { Spacer } from "../../../components/utils";
import { getWordOfTheDay } from "../../../firebaseapi/firestore";

function hasOneDayPassed() {
  var date = new Date().toLocaleDateString();

  if (localStorage.wordofthedaydate == date) return false;

  localStorage.wordofthedaydate = date;
  return true;
}

function WordOfTheDayCard() {
  const wotdCheck = JSON.parse(localStorage.getItem("wotd")) || {};
  const wotdLengthCheck = JSON.parse(localStorage.getItem("wotdlength")) || 0;
  const [wotd, setWotd] = useState(wotdCheck);
  const [wotdLength, setWotdLength] = useState(wotdLengthCheck);

  const { t, i18n } = useTranslation("common");
  useEffect(() => {
    async function generateWotd() {
      if (!hasOneDayPassed()) return false;
      const res = await getWordOfTheDay();
      localStorage.wotd = JSON.stringify(res[0]);
      localStorage.wotdlength = res[0].igbo.length;

      setWotd(JSON.parse(localStorage.wotd));
      setWotdLength(localStorage.wotdLength);
    }
    generateWotd();
  }, []);

  return (
    <div style={styles.wotd} className="card">
      <span>{t("wotd")}</span>
      <Spacer height="20px" />
      <p style={{ margin: "6px 0" }} className="calibri">
        {format(new Date(), "MMM d, yyyy")}
      </p>
      <div style={styles.breakline}></div>
      <div style={styles.section}>
        <p
          style={{
            margin: "10px 0",
            fontSize:
              wotdLength < 10
                ? "60px"
                : wotdLength > 10 && wotdLength < 15
                ? "50px"
                : "40px",
          }}
        >
          {wotd && wotd.igbo}
        </p>
        <p style={styles.english}>{wotd && wotd.english}</p>
        <p style={styles.definition}>{wotd && wotd.definition}</p>
      </div>
    </div>
  );
}

const styles = {
  wotd: {
    border: `3px ${color.orange} solid`,
    backgroundColor: color.white,
  },
  breakline: {
    border: `1px ${color.orange} solid`,
    width: "60%",
    margin: "auto",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "80%",
    paddingTop: "10px",
  },
  english: {
    color: color.orange,
    fontSize: "26px",
    margin: 0,
  },
  definition: {
    color: color.darkgrey,
    fontSize: "16px",
    margin: "10px",
  },
};
export default WordOfTheDayCard;
