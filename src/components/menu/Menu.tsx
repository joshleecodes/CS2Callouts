import React, { useState, useEffect} from 'react';

//component imports
import MenuDropdown from '../partials/menuDropdown/MenuDropdown.tsx';

//asset imports
import Background from '../../assets/media/background.svg'
import CSlogo from '../../assets/media/cs-logo.svg';

interface MenuProps {
    mapSelection: string;
    setMapSelection: (map: string) => void;
    setAreaSelection: (area: string) => void;
    updateCountSelection: (count: string) => void;
    startPractice: (section: string) => void;
}

const Menu = ({ 
    mapSelection,
    setMapSelection,
    setAreaSelection,
    updateCountSelection,
    startPractice
    }: MenuProps) => {
    

    //List of maps options
    const serveMapOptions = () => {
        return [
            { value: 'Mirage', label: 'MIRAGE' },
            { value: 'Nuke', label: 'NUKE' },
            { value: 'Vertigo', label: 'VERTIGO' },
          ]
    }

    //Serve area options for selected map
    const serveAreaOptions = () => {
        switch(mapSelection){
            case 'MIRAGE':
                return[
                    { value: 'asite-ticket', label: 'A SITE - TICKET' },
                    { value: 'asite-wood', label: 'A SITE - WOOD' },
                    { value: 'bsite-van', label: 'B SITE - VAN' },
                    { value: 'mid-window', label: 'MID - WINDOW' },
                ]
                break;
            case 'NUKE':
                return[
                    { value: 'asite-heaven', label: 'A SITE - HEAVEN' },
                    { value: 'bsite-ramp', label: 'B SITE - RAMP' },
                    { value: 'outside', label: 'OUTSIDE' },
                ]
                break;
            case 'VERTIGO':
                return[
                    { value: 'asite', label: 'A SITE' },
                    { value: 'bsite', label: 'B SITE' },
                ]
                break;
            default:
            return [{ value: 'select a map', label: 'NO MAP SELECTED' }]
            break;
        }
    }

    const serveCountOptions = () => {
        return [
            { value: '5', label: '5' },
            { value: '10', label: '10' },
            { value: '25', label: '25' },
            { value: '50', label: '50' },
            { value: '100', label: '100' },
        ]
    }
    
    return(
        <div className='landing-wrapper'>
            <img className='landing-background' src={Background} />
            <div className='logo-wrapper'>
                    <img className='landing-logo' src={CSlogo} />
            </div>
            <div className='landing-content-wrapper'> 
                <div className='landing-title-wrapper'>
                    <h1 className='landing-title'>CALLOUT PRACTICE</h1>
                </div>
                <div className='landing-menu-wrapper'>
                    <div className='menu-options-wrapper'>
                        <MenuDropdown options={serveMapOptions()} updateSelection = {setMapSelection}/>
                        <MenuDropdown options={serveAreaOptions()} updateSelection = {setAreaSelection}/>
                        <MenuDropdown options={serveCountOptions()} updateSelection = {updateCountSelection}/>
                    </div>
                    <a className="start-button">
                        <p className='start-button-text' onClick={() => startPractice('practice')}>START PRACTICE</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Menu;