import React, { useState, useEffect} from 'react';

//Utility Imports
import { serveImageSet } from '../../util/ImageSetHandler.tsx';

//Component Imports
import Menu from '../menu/Menu.tsx';
import Practice from '../practice/Practice.tsx';
import Feedback from '../feedback/Feedback.tsx';


const Landing = () => {
    const [displaySection, setDisplaySection] = useState<string>('menu');
    const [mapSelection, setMapSelection] = useState<string>('');
    const [areaSelection, setAreaSelection] = useState<string>('');
    const [countSelection, setCountSelection] = useState<number>(0);
    const [feedbackData, setFeedbackData] = useState<Object>([]);

    const updateCountSelection = (count: string) => {
        setCountSelection(Number(count));
    }
    
    const startFeedback = (section: string, feedbackData: object[]) => {
        setFeedbackData(feedbackData);
        setDisplaySection('feedback');
    }

    const serveSection = () => {
        if(displaySection === 'menu'){
            return (
                <Menu
                    mapSelection = {mapSelection}
                    setMapSelection = {setMapSelection}
                    setAreaSelection = {setAreaSelection}
                    updateCountSelection = {updateCountSelection}
                    startPractice = {setDisplaySection}
                />
            )
        }
        else if(displaySection === 'practice'){
            return (
                <Practice 
                    controlImage = {serveImageSet(mapSelection, areaSelection)?.controlImage} 
                    imageSet = {serveImageSet(mapSelection, areaSelection)?.imageSet}
                    countSelection = {countSelection}
                    startFeedback = {startFeedback}
                />
            )
        }
        else if(displaySection === 'feedback'){
            return (
                <Feedback
                    feedbackData = {feedbackData}
                />
            )
        }
    }

    return (
        serveSection()
    )
}

export default Landing;