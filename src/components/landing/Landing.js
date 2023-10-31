import React from 'react';
import ReactDOM from 'react-dom/client';

import Menu from '../menu/Menu';
import Practice from '../practice/Practice';



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
        //this.serveImageSet = this.serveImageSet.bind(this);
    }

    displayController = (map, area) => {
        this.setState({mapSelection: map});
        this.setState({areaSelection: area});
        this.setState({showMenu: false});
        //this.serveImageSet();
    }

    // serveImageSet = () => {
    //     //take map/area and produce image set for Practice component
    //     console.log(this.state.mapSelection, this.state.areaSelection);
    // }

    render() {
        return (
            this.state.showMenu == "true" ? <Menu startSelectionCallBack = {this.displayController}/> : <Practice map = {this.state.mapSelection} area = {this.state.areaSelection} />
        )    
    }
}