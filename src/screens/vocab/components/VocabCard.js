import React, { useState } from "react";
import { color } from "@assets/colors/colors";
import AudioButton from "@components/AudioButton";
import sound from "@assets/sound.wav";
import useCollapse from "react-collapsed";
import { icon } from "@assets/images";
import { Spacer } from "@components/utils";
import useAuth from "@services/AuthProvider";
import { updateFavourite } from "@firebaseapi/auth";

function VocabCard({ vocab }) {
  const { currentUser } = useAuth();
  const [isFavourited, setIsFavourited] = useState(
    currentUser.favouriteVocab.includes(vocab.vocabID)
  );

  const handleFavourite = (event) => {
    if (!event) var event = window.event;
    event.cancelBubble = true;
    if (event.stopPropagation) event.stopPropagation();
    updateFavourite(vocab.vocabID, currentUser.uid, !isFavourited);
    setIsFavourited(!isFavourited);
  };

  const {
    getCollapseProps,
    getToggleProps,
    isExpanded = false,
  } = useCollapse();
  return (
    <div
      className="card"
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
          position: "relative",
        }}
        {...getToggleProps()}
      >
        <div>
          <img
            style={{ position: "absolute", right: 0, bottom: 0 }}
            src={isFavourited ? icon.favourite.true : icon.favourite.false}
            onClick={(e) => handleFavourite(e)}
          />
        </div>
        <p
          className="balsamiq-ig"
          style={{
            marginTop: 0,
            marginBottom: "10px",
            fontSize: "20px",
          }}
        >
          {vocab.english}
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
          {vocab.igbo}
        </p>
        <span
          style={{
            marginBottom: "10px",
            color: color.darkgrey,
            fontStyle: "italic",
            width: "100%",
          }}
        >
          {vocab.description}
        </span>
        <Spacer height="15px" />

        <img src={isExpanded ? icon.vocab.collapse : icon.vocab.expand} />
      </div>
      <div {...getCollapseProps()}>
        <div>
          <Spacer height="15px" />
          <div style={styles.breakline}></div>
          <Spacer height="10px" />
          <span>{vocab.examples.english}</span>
          <Spacer height="5px" />
          <span
            style={{
              color: color.red,
            }}
          >
            {vocab.examples.igbo}
          </span>
          <Spacer height="25px" />
          <span style={{ fontWeight: "bold" }}>
            Lesson {vocab.lessonNumber}
          </span>
          <Spacer height="10px" />
          <AudioButton url={vocab.sound} width="40px" />
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
