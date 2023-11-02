import React, { useState, useEffect } from 'react';
import { random } from 'lodash';

//---- ASCENT IMAGES ----
//asite-door
import aSiteDoorControl from '../../assets/maps/ascent/asite-door/control-img.png';
import aSiteDoorDice from '../../assets/maps/ascent/asite-door/dice.png';
import aSiteDoorGen from '../../assets/maps/ascent/asite-door/gen.png';
import aSiteDoorMain from '../../assets/maps/ascent/asite-door/main.png';
import aSiteDoorNa from '../../assets/maps/ascent/asite-door/na.png';
import aSiteDoorTetris from '../../assets/maps/ascent/asite-door/tetris.png';
import aSiteDoorWood from '../../assets/maps/ascent/asite-door/wood.png';
import aSiteDoorXyp9x from '../../assets/maps/ascent/asite-door/xyp9x.png';
import aSiteDoorYoda from '../../assets/maps/ascent/asite-door/yoda.png';

//asite-main
import aSiteMainControl from '../../assets/maps/ascent/asite-main/control-img.png';
import aSiteMainBricks from '../../assets/maps/ascent/asite-main/bricks.png';
import aSiteMainDice from '../../assets/maps/ascent/asite-main/dice.png';
import aSiteMainGenOne from '../../assets/maps/ascent/asite-main/gen-one.png';
import aSiteMainGenTwo from '../../assets/maps/ascent/asite-main/gen-two.png';
import aSiteMainHeaven from '../../assets/maps/ascent/asite-main/heaven.png';
import aSiteMainNa from '../../assets/maps/ascent/asite-main/na.png';
import aSiteMainWood from '../../assets/maps/ascent/asite-main/wood.png';

//bsite-arena
import bSiteArenaControl from '../../assets/maps/ascent/bsite-arena/control-img.png';
import bSiteArenaCtOne from '../../assets/maps/ascent/bsite-arena/ct-one.png';
import bSiteArenaCtTwo from '../../assets/maps/ascent/bsite-arena/ct-two.png';
import bSiteArenaLane from '../../assets/maps/ascent/bsite-arena/lane.png';
import bSiteArenaLogs from '../../assets/maps/ascent/bsite-arena/logs.png';
import bSiteArenaMarket from '../../assets/maps/ascent/bsite-arena/market.png';
import bSiteArenaStairs from '../../assets/maps/ascent/bsite-arena/stairs.png';
import bSiteArenaSwitch from '../../assets/maps/ascent/bsite-arena/switch.png';

//bsite-execute
import bSiteExecuteControl from '../../assets/maps/ascent/bsite-execute/control-img.png';
import bSiteExecuteBacksiteOne from '../../assets/maps/ascent/bsite-execute/backsite-one.png';
import bSiteExecuteBacksiteTwo from '../../assets/maps/ascent/bsite-execute/backsite-two.png';
import bSiteExecuteBacksiteThree from '../../assets/maps/ascent/bsite-execute/backsite-three.png';
import bSiteExecuteDefault from '../../assets/maps/ascent/bsite-execute/default.png';
import bSiteExecuteDragon from '../../assets/maps/ascent/bsite-execute/dragon.png';
import bSiteExecuteFish from '../../assets/maps/ascent/bsite-execute/fish.png';
import bSiteExecuteSewer from '../../assets/maps/ascent/bsite-execute/sewer.png';
import bSiteExecuteStairs from '../../assets/maps/ascent/bsite-execute/stairs.png';
import bSiteExecuteZeek from '../../assets/maps/ascent/bsite-execute/zeek.png';


export default class Practice extends React.Component {
  constructor(){
    super();
    this.state = {
      imageSet: [],
      controlImage: '',
      currentImage: 'INITIAL',
      intervalId: null,
   }
   this.displayControlImage = this.displayControlImage.bind(this);
  }

  randomizeImage = () => {
    const { imageSet } = this.state;
    const randomIndex = Math.floor(Math.random() * imageSet.length);
    return imageSet[randomIndex];
  }
  

  //server image set dependant on menu options
  componentDidMount(){
    if(this.props.map == 'ASCENT'){
      switch(this.props.area){
        case 'A SITE - DOOR':
          this.setState({controlImage: aSiteDoorControl}, () => {this.displayControlImage()})
          this.setState({imageSet: [aSiteDoorDice, aSiteDoorGen, aSiteDoorMain,
            aSiteDoorNa, aSiteDoorTetris, aSiteDoorWood, aSiteDoorXyp9x, aSiteDoorYoda ]});
          break;
        case 'A SITE - MAIN':
          this.setState({controlImage: aSiteMainControl}, () => {this.displayControlImage()})
          this.setState({imageSet: [aSiteMainBricks, aSiteMainDice, aSiteMainGenOne,
            aSiteMainGenTwo, aSiteMainHeaven, aSiteMainNa, aSiteMainWood]});
          break;
        case 'B SITE - ARENA':
          this.setState({controlImage: bSiteArenaControl}, () => {this.displayControlImage()})
          this.setState({imageSet: [bSiteArenaCtOne, bSiteArenaCtTwo, bSiteArenaLane,
            bSiteArenaLogs, bSiteArenaMarket, bSiteArenaStairs, bSiteArenaSwitch]});
          break;
        case 'B SITE - EXECUTE':
          this.setState({controlImage: bSiteExecuteControl}, () => {this.displayControlImage()})
          this.setState({imageSet: [bSiteExecuteBacksiteOne, bSiteExecuteBacksiteTwo, 
            bSiteExecuteBacksiteThree, bSiteExecuteDefault, bSiteExecuteDragon, bSiteExecuteFish,
            bSiteExecuteSewer, bSiteExecuteStairs, bSiteExecuteZeek]});
          break;
      }
    }

    // Start interval immediately
    this.startInterval();
  }; 

  displayControlImage = () => {
    this.setState({currentImage: this.state.controlImage}, () => {
      this.pauseInterval();
    });
  };

  handleClick = () => {
    this.displayControlImage();
    this.resumeInterval();
  }

  startInterval = () => {
    // Display random image after 3 seconds
    setTimeout(() => {
      this.setState({ currentImage: this.randomizeImage() }, () => {
        this.pauseInterval();
      });
    }, 3000);

    // Resume interval after 3 seconds
    const intervalId = setInterval(() => {
      this.setState({ currentImage: this.randomizeImage() }, () => {
        this.pauseInterval();
      });
    }, 3000); // Change image after 3 seconds

    this.setState({ intervalId });
  }

  pauseInterval = () => {
    clearInterval(this.state.intervalId); // Pause interval
  }

  resumeInterval = () => {
    setTimeout(() => {
      this.startInterval(); // Resume interval after 3 seconds
    }, 3000);
  }

  render() {
    return(
      <div>
        <img 
          id='displayImage' 
          src = {this.state.currentImage}
          onClick={this.handleClick}   
        />
        {console.log(this.state.imageSet)}
        {console.log("Current Image: " + this.state.currentImage)}
      </div>
    )
  }
}