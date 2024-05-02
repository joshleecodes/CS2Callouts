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
  const [counter, setCounter] = useState(0);
  const [currentImage, setCurrentImage] = useState(controlImage);
  const [timeoutId, setTimeoutId] = useState(0);

  const randomTimeout = () => {
    return Math.floor(Math.random() * (2500 - 1000) + 1000); // Random timeout between 1 to 2.5 seconds
  };

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageSet.length);
    return imageSet[randomIndex];
  };

  const handleImageChange = () => {
    clearTimeout(timeoutId);
    setCurrentImage(controlImage);
    setTimeout(() => {
      setCurrentImage(getRandomImage());
    }, randomTimeout());
  
  };

  useEffect(() => {
    if (counter < countSelection) {
      handleImageChange();
    } else console.log('counter reached, show stats');
  }, [counter]);

  const handleClick = () => {
    if (currentImage !== controlImage) {
      setCounter(counter + 1);
      console.log(counter);
    }
  };

  return (
    <div>
      <img 
        id='displayImage' 
        src = {currentImage}
        onClick={handleClick}   
      />
    </div>
  );
};

export default Practice;
