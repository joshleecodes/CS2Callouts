import React, { useState, useEffect } from 'react';
import { random } from 'lodash';

//img imports
import controlDefault from '../../assets/controlDefault.png';
import controlGarden from '../../assets/controlGarden.png';
import controlHeaven from '../../assets/controlHeaven.png';
import controlHell from '../../assets/controlHell.png';
import controlLane from '../../assets/controlLane.png';
import controlSandwich from '../../assets/controlSandwich.png';


const App = () => {
  const images = [controlGarden, controlHeaven, controlHell, controlLane, controlSandwich];
  const defaultImage = controlDefault;
  const [imageSource, setImageSource] = useState(defaultImage);
  const [intervalId, setIntervalId] = useState(null);

  const changeImage = () => {
    const randomIndex = random(0, images.length - 1);
    const newImageSource = images[randomIndex];
    setImageSource(newImageSource);
  };

  const resetToDefault = () => {
    setImageSource(defaultImage);
  };

  useEffect(() => {
    resetToDefault(); // Call resetToDefault initially

    const interval = setInterval(() => {
      resetToDefault(); // Set default image
      setTimeout(changeImage, 1000); // Start changing to random image after 1 second
    }, 2500); // Wait for 4 seconds before setting default image

    setIntervalId(interval);

    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array

  return <img src={imageSource} alt="Random Image" />;
};

export default App;