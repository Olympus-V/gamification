import "./spankBank.scss";
import { useState } from "react";

const SpankBank = () => {
  const [isJiggling, setIsJiggling] = useState(false);
  const [slap] = useState(new Audio('/audios/SpankBank/spank.mp3'));
  const [moanFirst] = useState(new Audio('/audios/SpankBank/moan_1.mp3'));
  const [moanSecond] = useState(new Audio('/audios/SpankBank/moan_2.mp3'));
  const [moanThird] = useState(new Audio('/audios/SpankBank/moan_3.mp3'));

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
    <div className='centered-container'>
      <div
        className={`graphic-container ${isJiggling ? 'jiggle' : ''}`}
        onClick={handleClick}
      >
        <img src='/images/SpankBank/ass.png' alt='ass'/>
      </div>
    </div>
  );
};

export default SpankBank;
