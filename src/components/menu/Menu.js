import React from 'react';

//component imports
import MapDropdown from '../partials/mapDropdown/MapDropdown';
import AreaDropdown from '../partials/areaDropdown/AreaDropdown';
import CountDropdown from '../partials/countDropdown/CountDropdown';

//asset imports
import Background from '../../assets/media/Background.png'
import Vitality from '../../assets/media/vitality-logo.svg';
import Valorant from '../../assets/media/valorant-logo.svg';


export default class Menu extends React.Component { 
    constructor(){
        super();
        this.state = {
            mapSelection: 'EMPTY MENU',
            areaSelection: 'EMPTY MENU',
            countSelection: 0
        }
        this.updateMapSelection = this.updateMapSelection.bind(this);
        this.updateAreaSelection = this.updateAreaSelection.bind(this);
        this.updateCountSelection = this.updateCountSelection.bind(this);
        this.serveAreaOptions = this.serveAreaOptions.bind(this);
        this.sendStartData = this.sendStartData.bind(this);
    }

    updateMapSelection = (map) => {
        this.setState({mapSelection: map});
    };

    updateAreaSelection = (area) => {
        this.setState({areaSelection: area});
    };

    updateCountSelection = (count) => {
        this.setState({countSelection: count});
    }

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
            case 'BREEZE':
                return[]
                break;
            case 'HAVEN':
                return[]
                break;
            case 'LOTUS':
                return[]
                break;
            case 'SPLIT':
                return[]
                break;
            case 'SUNSET':
                return[]
                break;
        }
    }

    sendStartData = () => {
        this.props.startSelectionCallBack(this.state.mapSelection, this.state.areaSelection, this.state.countSelection);
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
                        <AreaDropdown options={this.serveAreaOptions()} areaSelectionCallBack = {this.updateAreaSelection}/>
                        <CountDropdown countSelectionCallBack = {this.updateCountSelection}/>
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