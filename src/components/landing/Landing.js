import React from 'react';


//asset imports
import Background from '../../assets/media/Background.png'


export default () => (
    <div className='landing-wrapper'>
        <img className='landing-background' src={Background} />
        <div className='landing-content-wrapper'> 
            <div className='landing-title-wrapper'>
                <h2 className='landing-subtitle'>VALORANT // TRAINING_TOOL</h2>
                <h1 className='landing-title'>CALLOUT PRACTICE</h1>
            </div>
            <div className='landing-menu-wrapper'>
                <div className='menu-options-wrapper'>
                    <select className='map-select dropdown-menu'>
                        <option value="random">RANDOM</option>
                        <option value="acent">ASCENT</option>
                    </select>
                    <select className='location-select dropdown-menu'>
                        <option className='menu-option' value="location-1">LOCATION ONE</option>
                        <option className='menu-option' value="location-2">LOCATION TWO</option>
                        <option className='menu-option' value="location-3">LOCATION THREE</option>
                    </select>
                </div>
                <a className="start-button">
                    <p className='start-button-text'>START PRACTICE</p>
                </a>
            </div>
        </div>
        
    </div>

);