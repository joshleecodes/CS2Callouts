import React, { useState, useEffect } from 'react';
import { random } from 'lodash';

//---- MIRAGE IMAGES ----
  //asite-ticket
  import aSiteTicketControlImage from '../../assets/maps/mirage/asite-ticket/control-image.png';
  import aSiteTicketBench from '../../assets/maps/mirage/asite-ticket/bench.png';
  import aSiteTicketConnector from '../../assets/maps/mirage/asite-ticket/connector.png';
  import aSiteTicketDark1 from '../../assets/maps/mirage/asite-ticket/dark-one.png';
  import aSiteTicketDark2 from '../../assets/maps/mirage/asite-ticket/dark-two.png';
  import aSiteTicketDefault from '../../assets/maps/mirage/asite-ticket/default.png';
  import aSiteTicketFirebox from '../../assets/maps/mirage/asite-ticket/firebox.png';
  import aSiteTicketNinja from '../../assets/maps/mirage/asite-ticket/ninja.png';
  import aSiteTicketPalace from '../../assets/maps/mirage/asite-ticket/palace.png';
  import aSiteTicketRamp from '../../assets/maps/mirage/asite-ticket/ramp.png';
  import aSiteTicketSandwich from '../../assets/maps/mirage/asite-ticket/sandwich.png';
  import aSiteTicketStairs from '../../assets/maps/mirage/asite-ticket/stairs.png';
  import aSiteTicketTetris from '../../assets/maps/mirage/asite-ticket/tetris.png';
  import aSiteTicketTriple from '../../assets/maps/mirage/asite-ticket/triple.png';
  import aSiteTicketWood from '../../assets/maps/mirage/asite-ticket/wood.png';


  //asite-wood
  import aSiteWoodControl from '../../assets/maps/mirage/asite-wood/control-image.png';
  import aSiteWoodBench from '../../assets/maps/mirage/asite-wood/bench.png';
  import aSiteWoodConnector from '../../assets/maps/mirage/asite-wood/connector.png';
  import aSiteWoodDefault from '../../assets/maps/mirage/asite-wood/default.png';
  import aSiteWoodFirebox from '../../assets/maps/mirage/asite-wood/firebox.png';
  import aSiteWoodJungle from '../../assets/maps/mirage/asite-wood/jungle.png';
  import aSiteWoodNinja from '../../assets/maps/mirage/asite-wood/ninja.png';
  import aSiteWoodSandwich from '../../assets/maps/mirage/asite-wood/sandwich.png';
  import aSiteWoodStairs from '../../assets/maps/mirage/asite-wood/stairs.png';
  import aSiteWoodTicket from '../../assets/maps/mirage/asite-wood/ticket.png';
  import aSiteWoodTrash from '../../assets/maps/mirage/asite-wood/trash.png';
  import aSiteWoodTriple from '../../assets/maps/mirage/asite-wood/triple.png';



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
    if(this.props.map == 'MIRAGE'){
      switch(this.props.area){
        case 'A SITE - TICKET':
          this.setState({controlImage: aSiteTicketControlImage}, () => {this.displayControlImage()})
          this.setState({
            imageSet: [aSiteTicketBench, aSiteTicketConnector, aSiteTicketDark1,
              aSiteTicketDark2, aSiteTicketDefault, aSiteTicketFirebox, aSiteTicketNinja, aSiteTicketPalace,
              aSiteTicketRamp, aSiteTicketSandwich, aSiteTicketStairs, aSiteTicketTetris, aSiteTicketTriple,
              aSiteTicketWood
            ]
          });
          break;
        case 'A SITE - WOOD':
          this.setState({controlImage: aSiteWoodControl}, () => {this.displayControlImage()})
          this.setState({
            imageSet: [aSiteWoodBench, aSiteWoodConnector, aSiteWoodDefault, aSiteWoodFirebox,
              aSiteWoodJungle, aSiteWoodNinja, aSiteWoodSandwich, aSiteWoodStairs, aSiteWoodTicket,
              aSiteWoodTrash, aSiteWoodTriple
            ]
          });
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
    if(this.state.currentImage != this.state.controlImage){
      this.displayControlImage();
      this.resumeInterval();
    }
  }

  startInterval = () => {
    // Display random image after random time between 1 to 2.5 seconds
    const randomInterval = Math.floor(Math.random() * (2500 - 1000) + 1000)
    console.log(randomInterval);
    setTimeout(() => {
      this.setState({ currentImage: this.randomizeImage() }, () => {
        this.pauseInterval();
      });
    }, randomInterval);

  }

  pauseInterval = () => {
    clearInterval(this.state.intervalId); // Pause interval
  }

  resumeInterval = () => {
    setTimeout(() => {
      this.startInterval(); // Resume interval after 3 seconds
    }, 0);
  }

  render() {
    return(
      <div>
        <img 
          id='displayImage' 
          src = {this.state.currentImage}
          onClick={this.handleClick}   
        />
      </div>
    )
  }
}