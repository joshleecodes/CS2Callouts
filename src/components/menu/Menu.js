import React from 'react';

//component imports
import MapDropdown from '../partials/mapDropdown/MapDropdown';
import AreaDropdown from '../partials/areaDropdown/AreaDropdown';

//asset imports
import Background from '../../assets/media/Background.png'
import Vitality from '../../assets/media/vitality-logo.svg';
import Valorant from '../../assets/media/valorant-logo.svg';


export default class Menu extends React.Component { 
    constructor(){
        super();
        this.state = {
            mapSelection: ''
        }
        this.updateMapSelection = this.updateMapSelection.bind(this);
        this.serveAreaOptions = this.serveAreaOptions.bind(this);
        this.sendStartData = this.sendStartData.bind(this);
    }

    updateMapSelection = (map) => {
        this.setState({mapSelection: map})
    };

    serveAreaOptions = () => {
        switch(this.state.mapSelection){
            case 'ASCENT':
                return [
                    { value: 'asite-door', label: 'A SITE - DOOR' },
                    { value: 'asite-main', label: 'A SITE - MAIN' },
                    { value: 'bsite-arena', label: 'B SITE - ARENA' },
                    { value: 'bsite-execute', label: 'B SITE - EXECUTE' },
                ]
                break;
            case 'BIND':
                return[]
                break;
            case 'BIND':
                return[]
                break;
            case 'BIND':
                return[]
                break;
            case 'BIND':
                return[]
                break;
            case 'BIND':
                return[]
                break;
            case 'BIND':
                return[]
                break;
        }
    }

    sendStartData = (e) => {
        this.props.startSelectionCallBack();
    }

    render() {
        
        return(
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
                        <MapDropdown mapSelectionCallBack = {this.updateMapSelection}/>
                        <AreaDropdown options={this.serveAreaOptions()}/>
                    </div>
                    <a className="start-button">
                        <p className='start-button-text' onClick={this.sendStartData}>START PRACTICE</p>
                    </a>
                </div>
            </div>
        </div>
        )    
    }
}