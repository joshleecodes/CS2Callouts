import React, { useState, useEffect} from 'react';

//Utility Imports
import { serveImageSet } from '../../util/ImageSetHandler.tsx';

//Component Imports
import Menu from '../menu/Menu.tsx';
import Practice from '../practice/Practice.tsx';


const Landing = () => {
    const [showMenu, setShowMenu] = useState<boolean>(true);
    const [mapSelection, setMapSelection] = useState<string>('');
    const [areaSelection, setAreaSelection] = useState<string>('');
    const [countSelection, setCountSelection] = useState<number>(0);

    const updateCountSelection = (count: string) => {
        setCountSelection(Number(count));
    }

    const getImageSet = () => {
        console.log(serveImageSet(mapSelection, areaSelection));
    }

    const startPractice = () => {
        console.log(mapSelection, areaSelection, countSelection);
        getImageSet();
        setShowMenu(false);
    }

    return (
        showMenu === true 
        ?
        <Menu
            mapSelection = {mapSelection}
            setMapSelection = {setMapSelection}
            setAreaSelection = {setAreaSelection}
            updateCountSelection = {updateCountSelection}
            startPractice = {startPractice}
        />
        :
            <Practice 
                controlImage = {serveImageSet(mapSelection, areaSelection)?.controlImage} 
                imageSet = {serveImageSet(mapSelection, areaSelection)?.imageSet}
                countSelection = {countSelection}
            />
    )
}

export default Landing;