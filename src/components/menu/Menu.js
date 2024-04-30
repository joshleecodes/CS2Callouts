import React from 'react';

//component imports
import MapDropdown from '../partials/mapDropdown/MapDropdown';
import AreaDropdown from '../partials/areaDropdown/AreaDropdown';
import CountDropdown from '../partials/countDropdown/CountDropdown';

//asset imports
import Background from '../../assets/media/background.svg'
import CSlogo from '../../assets/media/cs-logo.svg';


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
            case 'ANCIENT':
                return []
                break;
            case 'ANUBIS':
                return[]
                break;
            case 'DUST2':
                return[]
                break;
            case 'INFERNO':
                return[]
                break;
            case 'MIRAGE':
                return[
                    { value: 'asite-ticket', label: 'A SITE - TICKET' },
                    { value: 'asite-wood', label: 'A SITE - WOOD' },
                ]
                break;
            case 'NUKE':
                return[]
                break;
            case 'OVERPASS':
                return[]
                break;
            case 'VERTIGO':
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
                    <img className='valorant-logo landing-logo' src={CSlogo} />
            </div>
            <div className='landing-content-wrapper'> 
                <div className='landing-title-wrapper'>
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