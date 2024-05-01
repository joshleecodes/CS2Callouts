import React, { useState, useEffect} from 'react';
//import { random } from 'lodash';


interface PracticeProps {
  controlImage: string;
  imageSet: string[];
  countSelection: number;
}

const Practice = ({
  controlImage,
  imageSet,
  countSelection
}: PracticeProps) => {
  const [currentImage, setCurrentImage] = useState<string>(controlImage);
  const [intervalId, setIntervalId] = useState<number>(0);

  const randomizeImage = () => {
    const randomIndex = Math.floor(Math.random() * imageSet.length);
    return imageSet[randomIndex];
  }

  const displayControlImage = () => {
    setCurrentImage(controlImage)
      pauseInterval();
  };

  useEffect(() => {
    clearInterval(intervalId);
  }, [currentImage]);

  const handleClick = () => {
    if(currentImage != controlImage){
      displayControlImage();
      resumeInterval();
    }
  }

  const startInterval = () => {
    // Display random image after random time between 1 to 2.5 seconds
    const randomInterval = Math.floor(Math.random() * (2500 - 1000) + 1000)
    console.log(randomInterval);
    
    setTimeout(() => {
      setCurrentImage(randomizeImage()); 
        pauseInterval();
    }, randomInterval);

  }

  const pauseInterval = () => {
    clearInterval(intervalId); // Pause interval
  }

  const resumeInterval = () => {
    setTimeout(() => {
      startInterval(); // Resume interval after 3 seconds
    }, 0);
  }

  startInterval();

  return (
    <div>
      <img 
        id='displayImage' 
        src = {currentImage}
        onClick={handleClick}   
      />
    </div>
  )
  
}

export default Practice;