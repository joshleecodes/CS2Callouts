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
    startPractice: () => void;
}

const Menu = ({ 
    mapSelection,
    setMapSelection,
    setAreaSelection,
    updateCountSelection,
    startPractice
    }: MenuProps) => {
    
    const serveMapOptions = () => {
        return [
            { value: 'Ancient', label: 'ANCIENT' },
            { value: 'Anubis', label: 'ANUBIS' },
            { value: 'Dust2', label: 'DUST2' },
            { value: 'Inferno', label: 'INFERNO' },
            { value: 'Mirage', label: 'MIRAGE' },
            { value: 'Nuke', label: 'NUKE' },
            { value: 'Overpass', label: 'OVERPASS' },
            { value: 'Vertigo', label: 'VERTIGO' },
          ]
    }

    const serveAreaOptions = () => {
        switch(mapSelection){
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
                    <p className='start-button-text' onClick={() => startPractice()}>START PRACTICE</p>
                </a>
            </div>
        </div>
    </div>
    )
}

export default Menu;


// export default class Menu extends React.Component { 
//     constructor(){
//         super();
//         this.state = {
//             mapSelection: 'EMPTY MENU',
//             areaSelection: 'EMPTY MENU',
//             countSelection: 0
//         }
//         this.updateMapSelection = this.updateMapSelection.bind(this);
//         this.updateAreaSelection = this.updateAreaSelection.bind(this);
//         this.updateCountSelection = this.updateCountSelection.bind(this);
//         this.serveAreaOptions = this.serveAreaOptions.bind(this);
//         this.sendStartData = this.sendStartData.bind(this);
//     }

//     updateMapSelection = (map) => {
//         this.setState({mapSelection: map});
//     };

//     updateAreaSelection = (area) => {
//         this.setState({areaSelection: area});
//     };

//     updateCountSelection = (count) => {
//         this.setState({countSelection: count});
//     }

//     serveAreaOptions = () => {
//         switch(this.state.mapSelection){
//             case 'ANCIENT':
//                 return []
//                 break;
//             case 'ANUBIS':
//                 return[]
//                 break;
//             case 'DUST2':
//                 return[]
//                 break;
//             case 'INFERNO':
//                 return[]
//                 break;
//             case 'MIRAGE':
//                 return[
//                     { value: 'asite-ticket', label: 'A SITE - TICKET' },
//                     { value: 'asite-wood', label: 'A SITE - WOOD' },
//                 ]
//                 break;
//             case 'NUKE':
//                 return[]
//                 break;
//             case 'OVERPASS':
//                 return[]
//                 break;
//             case 'VERTIGO':
//                 return[]
//                 break;
//         }
//     }

//     sendStartData = () => {
//         this.props.startSelectionCallBack(this.state.mapSelection, this.state.areaSelection, this.state.countSelection);
//     }

//     render() {
        
//         return(
//             <div className='landing-wrapper'>
//             <img className='landing-background' src={Background} />
//             <div className='logo-wrapper'>
//                     <img className='valorant-logo landing-logo' src={CSlogo} />
//             </div>
//             <div className='landing-content-wrapper'> 
//                 <div className='landing-title-wrapper'>
//                     <h1 className='landing-title'>CALLOUT PRACTICE</h1>
//                 </div>
//                 <div className='landing-menu-wrapper'>
//                     <div className='menu-options-wrapper'>
//                         <MapDropdown mapSelectionCallBack = {this.updateMapSelection}/>
//                         <AreaDropdown options={this.serveAreaOptions()} areaSelectionCallBack = {this.updateAreaSelection}/>
//                         <CountDropdown countSelectionCallBack = {this.updateCountSelection}/>
//                     </div>
//                     <a className="start-button">
//                         <p className='start-button-text' onClick={this.sendStartData}>START PRACTICE</p>
//                     </a>
//                 </div>
//             </div>
//         </div>
//         )    
//     }
// }