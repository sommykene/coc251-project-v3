import React from "react";
import { color } from "../../../assets/colors/colors";
import AudioButton from "../../../components/AudioButton";
import sound from "../../../assets/sound.wav";
import useCollapse from "react-collapsed";
import { icon } from "../../../assets/images";
import { Spacer } from "../../../components/utils";

function VocabCard({ result }) {
  const {
    getCollapseProps,
    getToggleProps,
    isExpanded = false,
  } = useCollapse();
  return (
    <div
      className="section-cards"
      style={{
        height: "fit-content",
        backgroundColor: color.white,
        width: "300px",
        padding: "15px",
        overflow: "hidden",
        justifyContent: "start",
      }}
    >
      <div
        style={{
          cursor: "pointer",
          width: "100%",
        }}
        {...getToggleProps()}
      >
        <p
          className="balsamiq-ig"
          style={{
            marginTop: 0,
            marginBottom: "10px",
            fontSize: "20px",
          }}
        >
          When?
        </p>
        <p
          className="balsamiq-ig"
          style={{
            marginTop: 0,
            marginBottom: "10px",
            fontSize: "20px",
            fontWeight: "bold",
            color: color.red,
          }}
        >
          Mgbe?
        </p>
        <span
          style={{
            marginBottom: "10px",
            color: color.darkgrey,
            fontStyle: "italic",
            width: "100%",
          }}
        >
          at all times; on all occasions
        </span>
        <Spacer height="15px" />
        <img src={isExpanded ? icon.vocab.collapse : icon.vocab.expand} />
      </div>
      <div {...getCollapseProps()}>
        <div>
          <Spacer height="15px" />
          <div style={styles.breakline}></div>
          <Spacer height="10px" />
          <span>When will you travel?</span>
          <Spacer height="5px" />
          <span
            style={{
              color: color.red,
            }}
          >
            Kedu mgbe ị ga-eme eje gị?
          </span>
          <Spacer height="25px" />
          <span style={{ fontWeight: "bold" }}>Lesson 12</span>
          <Spacer height="10px" />
          <AudioButton url={sound} width="40px" />
          {/* {result && result.pronunciation && (
            <AudioButton url={sound} width="50px" />
          )} */}
        </div>
      </div>
    </div>
  );
}
const styles = {
  breakline: {
    border: `1px ${color.lightgrey} solid`,
    width: "90%",
    margin: "auto",
  },
};
export default VocabCard;
