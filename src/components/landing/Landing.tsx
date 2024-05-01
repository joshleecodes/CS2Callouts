import React, { useState, useEffect} from 'react';

import Menu from '../menu/Menu.tsx';
import Practice from '../practice/Practice';


const Landing = () => {
    const [showMenu, setShowMenu] = useState<boolean>(true);
    const [mapSelection, setMapSelection] = useState<string>('');
    const [areaSelection, setAreaSelection] = useState<string>('');
    const [countSelection, setCountSelection] = useState<number>(0);

    const updateCountSelection = (count: string) => {
        setCountSelection(Number(count));
    }

    const serveImageSet = () => {
        //console.log(ImageSets[mapSelection]);
    }

    const startPractice = () => {
        setShowMenu(false);
        console.log(mapSelection, areaSelection, countSelection);
        serveImageSet();
    }

    return (
        // showMenu === true 
        // ?
        <Menu
            mapSelection = {mapSelection}
            setMapSelection = {setMapSelection}
            setAreaSelection = {setAreaSelection}
            updateCountSelection = {updateCountSelection}
            startPractice = {startPractice}
        />
        // :
        //     <Practice 
        //         mapSelection = {mapSelection} 
        //         areaSelection = {areaSelection}
        //         countSelection = {countSelection}
        //     />
    )
}

export default Landing;