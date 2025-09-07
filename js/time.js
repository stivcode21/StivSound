// time.js
import { audio } from "./main.js";

const timeDisplay = document.getElementById("time-display");

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export const initTimeDisplay = () => {
  audio.addEventListener("timeupdate", () => {
    if (!isNaN(audio.duration)) {
      const currentTime = formatTime(audio.currentTime);
      const totalTime = formatTime(audio.duration);
      timeDisplay.textContent = `${currentTime} / ${totalTime}`;
    }
  });
};
