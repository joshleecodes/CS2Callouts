import React from 'react';

//component imports
import Dropdown from '../partials/dropdown/Dropdown';

//asset imports
import Background from '../../assets/media/Background.png'
import Vitality from '../../assets/media/vitality-logo.svg';
import Valorant from '../../assets/media/valorant-logo.svg';


export default () => (
    <div className='landing-wrapper'>
        <img className='landing-background' src={Background} />
        <div className='logo-wrapper'>
                <img className='valorant-logo landing-logo' src={Valorant} />
                <img className='vitality-logo landing-logo' src={Vitality} />
        </div>
        <div className='landing-content-wrapper'> 
            <div className='landing-title-wrapper'>
                <h2 className='landing-subtitle'>VALORANT // TRAINING_TOOL</h2>
                <h1 className='landing-title'>CALLOUT PRACTICE</h1>
            </div>
            <div className='landing-menu-wrapper'>
                <div className='menu-options-wrapper'>
                    <Dropdown/>
                    <Dropdown/>
                </div>
                <a className="start-button">
                    <p className='start-button-text'>START PRACTICE</p>
                </a>
            </div>
        </div>
    </div>
);