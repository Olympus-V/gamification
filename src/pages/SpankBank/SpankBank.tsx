import "./SpankBank.css";
import React, { useState } from "react";

const SpankBank = () => {
  const [isJiggling, setIsJiggling] = useState(false);
  const [slap] = useState(new Audio("/audio/spank.mp3"));
  const [moanFirst] = useState(new Audio("/audio/Moan_1.mp3"));
  const [moanSecond] = useState(new Audio("/audio/Moan_2.mp3"));
  const [moanThird] = useState(new Audio("/audio/Moan_3.mp3"));

  const handleSpank = () => {
    setIsJiggling(true);
    setTimeout(() => {
      setIsJiggling(false);
    }, 1000); // Set timeout to stop jiggling after 1 second (adjust as needed)
  };

  const handleMoan = () => {
    slap.play();
    const audioSequence = [moanFirst, moanSecond, moanThird];
    const randomIndex = Math.floor(Math.random() * audioSequence.length);
    slap.onended = () => {
      audioSequence[randomIndex].play();
    };
  };

  const handleClick = () => {
    handleSpank();
    handleMoan();
  };

  return (
    <div className="centered-container">
      <div
        className={`PosteriorOrifice ${isJiggling ? "jiggle" : ""}`}
        onClick={handleClick}
      >
        <img src="/images/spank_it.png" alt="Spank It" />
      </div>
    </div>
  );
};

export default SpankBank;
