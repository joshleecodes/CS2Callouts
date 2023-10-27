import React from 'react';
import ReactDOM from 'react-dom/client';

import Menu from '../menu/Menu';
import Practice from '../practice/Practice';



let serveImageSet = () => {
    //take map/area and produce image set for Practice component
}

export default class Landing extends React.Component {
    constructor(){
        super();
        this.state = {
            showMenu: "true",
            mapImageSet: [],
            mapSelection: '',
            areaSelection: ''
        }
        this.displayController = this.displayController.bind(this);
    }

    displayController = () => {
        this.setState({showMenu: false});
    }

    

    render() {
        return (
            this.state.showMenu == "true" ? <Menu startSelectionCallBack = {this.displayController}/> : <Practice />
        )    
    }
}