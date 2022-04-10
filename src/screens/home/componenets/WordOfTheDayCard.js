import { format } from "date-fns";
import React from "react";
import { useTranslation } from "react-i18next";
import { color } from "../../../assets/colors/colors";
import { Spacer } from "../../../components/utils";

function WordOfTheDayCard() {
  const igbo = "ifunanya";
  const wordlength = igbo.length;

  const { t, i18n } = useTranslation("common");

  return (
    <div style={styles.wotd}>
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
              wordlength < 10
                ? "60px"
                : wordlength > 10 && wordlength < 15
                ? "50px"
                : "40px",
          }}
        >
          {igbo}
        </p>
        <p style={styles.english}>Love</p>
        <p style={styles.definition}>an intense feeling of deep affection</p>
      </div>
    </div>
  );
}

const styles = {
  wotd: {
    border: `3px ${color.orange} solid`,
    backgroundColor: color.white,
    borderRadius: "10px",
    height: "350px",
    textAlign: "center",
    padding: "20px",
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
