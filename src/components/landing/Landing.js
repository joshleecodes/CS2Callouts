import React from 'react';
import ReactDOM from 'react-dom/client';

import Menu from '../menu/Menu';
import Practice from '../practice/Practice';


export default class Landing extends React.Component {
    constructor(){
        super();
        this.state = {
            showMenu: "true",
            mapSelection: '',
            areaSelection: '',
            countSelection: 0
        }
        this.displayController = this.displayController.bind(this);
    }

    displayController = (map, area, count) => {
        this.setState({mapSelection: map});
        this.setState({areaSelection: area});
        this.setState({countSelection: count})
        this.setState({showMenu: false});
    }

    render() {
        return (
            this.state.showMenu == "true" 
            ? 
                <Menu 
                    startSelectionCallBack = {this.displayController}
                /> 
            : 
                <Practice 
                    map = {this.state.mapSelection} 
                    area = {this.state.areaSelection}
                    count = {this.state.countSelection}
                />
        )    
    }
}