import React, { useState, useEffect} from 'react';

interface PracticeProps {
  controlImage: string;
  imageSet: string[];
  countSelection: number;
  startFeedback: (section: string, data: object[]) => void;
}

const Practice = ({
  controlImage,
  imageSet,
  countSelection,
  startFeedback
}: PracticeProps) => {
  const [counter, setCounter] = useState(0);
  const [currentImage, setCurrentImage] = useState(controlImage);
  const [timeoutId, setTimeoutId] = useState(0);
  const [startTime, setStartTime] = useState(Number);
  const [performanceData, setPorformanceData] = useState([]);



  // Returns random number for timeout between 1 to 2.5 seconds
  const randomTimeout = () => {
    return Math.floor(Math.random() * (2500 - 1000) + 1000);
  };

  //returns a random image from the image set
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageSet.length);
    return imageSet[randomIndex];
  };

  //Changes image to control Image and sets/resets random timer for callout image
  const handleImageChange = () => {
    clearTimeout(timeoutId);
    setCurrentImage(controlImage);
    setTimeout(() => {
      setCurrentImage(getRandomImage());
      setStartTime(performance.now());
    }, randomTimeout());
  };

  //When counter changes, calls handleImage or if count is reached, passes data back to landing.
  useEffect(() => {
    if (counter < countSelection) {
      handleImageChange();
    } else {
      startFeedback('feedback', performanceData);
    }
  }, [counter]);

  //Speech recognition set up
  const SpeechRecognition = (window as any).webkitSpeechRecognition;
  const SpeechGrammarList  = (window as any).webkitSpeechGrammarList ;
  if (!SpeechRecognition) {
    console.error('SpeechRecognition API not supported.');
    return;
  }
  const recognition = new SpeechRecognition();

  //Sets calloutList of grammar for speech recgonition
  let calloutList = [''];
  imageSet.forEach((image) => {
    if ((currentImage.indexOf('-') === -1)) {
      calloutList = ([...calloutList, image.substring(image.lastIndexOf("/") + 1, currentImage.indexOf("."))]);
    } else calloutList = ([...calloutList, image.substring(image.lastIndexOf("/") + 1, currentImage.indexOf("-"))]);
  });
  const grammar = `#JSGF V1.0; grammar colors; public <color> = ${calloutList.join(
    " | ",
  )};`;
  const speechRecognitionList = new SpeechGrammarList();
  speechRecognitionList.addFromString(grammar, 0);

  //On click starts to record user speech, on result processes data and changes count
  const handleClick = () => {
    if (currentImage !== controlImage) {
      recognition.start();

      recognition.onspeechend = () => {
        recognition.stop();
      };

      recognition.onresult = (event) => {
        
        const lastResultIndex = event.results.length - 1;
        const spokenText = event.results[lastResultIndex][0].transcript.trim().toLowerCase();
        console.log(spokenText);
  
        setCounter(counter +1);
        if ((currentImage.indexOf('-') === -1)) {
          setPorformanceData([...performanceData, { id: counter, image: currentImage.substring(currentImage.lastIndexOf("/") + 1, currentImage.indexOf(".")), callout: spokenText, time: Math.floor(performance.now() - startTime)}]);
        } else setPorformanceData([...performanceData, { id: counter, image: currentImage.substring(currentImage.lastIndexOf("/") + 1, currentImage.indexOf("-")), callout: spokenText, time: Math.floor(performance.now() - startTime)}]);
        setCounter(counter + 1);
        console.log('COUNT: ' + counter);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
      };
      
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