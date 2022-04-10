import React, { useState, useEffect } from "react";
import { icon } from "../assets/images";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

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

const AudioButton = ({ url, width }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <img style={{ width: width }} onClick={toggle} src={icon.audio.black} />
    </div>
  );
};

export default AudioButton;
