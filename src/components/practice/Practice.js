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
   }
  }
  
  componentDidMount(){
    if(this.props.map == 'ASCENT'){
      switch(this.props.area){
        case 'A SITE - DOOR':
          this.setState({controlImage: aSiteDoorControl})
          this.setState({imageSet: [aSiteDoorDice, aSiteDoorGen, aSiteDoorMain,
            aSiteDoorNa, aSiteDoorTetris, aSiteDoorWood, aSiteDoorXyp9x, aSiteDoorYoda ]});
          break;
        case 'A SITE - MAIN':
          this.setState({controlImage: aSiteMainControl})
          this.setState({imageSet: [aSiteMainBricks, aSiteMainDice, aSiteMainGenOne,
            aSiteMainGenTwo, aSiteMainHeaven, aSiteMainNa, aSiteMainWood]});
          break;
        case 'B SITE - ARENA':
          this.setState({controlImage: bSiteArenaControl})
          this.setState({imageSet: [bSiteArenaCtOne, bSiteArenaCtTwo, bSiteArenaLane,
            bSiteArenaLogs, bSiteArenaMarket, bSiteArenaStairs, bSiteArenaSwitch]});
          break;
        case 'B SITE - EXECUTE':
          this.setState({controlImage: bSiteExecuteControl})
          this.setState({imageSet: [bSiteExecuteBacksiteOne, bSiteExecuteBacksiteTwo, 
            bSiteExecuteBacksiteThree, bSiteExecuteDefault, bSiteExecuteDragon, bSiteExecuteFish,
            bSiteExecuteSewer, bSiteExecuteStairs, bSiteExecuteZeek]});
          break;
      }
    }
  };

  render() {
    return(
      <div>
        <img id='displayImage' src = {this.state.controlImage}/>
        {console.log(this.state.imageSet)}
      </div>
    )
  }
}




// const serveImages = () => {
//   const images = [controlGarden, controlHeaven, controlHell, controlLane, controlSandwich];
//   const defaultImage = controlDefault;
//   const [imageSource, setImageSource] = useState(defaultImage);
//   const [intervalId, setIntervalId] = useState(null);

//   const changeImage = () => {
//     const randomIndex = random(0, images.length - 1);
//     const newImageSource = images[randomIndex];
//     setImageSource(newImageSource);
//   };

//   const resetToDefault = () => {
//     setImageSource(defaultImage);
//   };

//   useEffect(() => {
//     resetToDefault(); // Call resetToDefault initially

//     const interval = setInterval(() => {
//       resetToDefault(); // Set default image
//       setTimeout(changeImage, 1000); // Start changing to random image after 1 second
//     }, 2500); // Wait for 4 seconds before setting default image

//     setIntervalId(interval);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []); // Empty dependency array

//   return <img src={imageSource} alt="Random Image" />;
// };

// export default Practice;