import React, { useState, useEffect } from "react";
import { icon } from "../assets/images";

const useAudio = (url, play) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(play);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const AudioButton = ({ url, width, fillSpace, color, play }) => {
  const [playing, toggle] = useAudio(url, play || false);

  return (
    <div
      onClick={toggle}
      style={
        fillSpace
          ? {
              width: "100%",
              height: "100%",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }
          : {}
      }
    >
      <img
        style={{ width: width, height: width }}
        src={
          color === "teal"
            ? icon.audio.teal
            : color === "white"
            ? icon.audio.white
            : icon.audio.black
        }
      />
    </div>
  );
};

export default AudioButton;
