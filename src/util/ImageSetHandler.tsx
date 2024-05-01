//---- MIRAGE IMAGES ----
  //asite-ticket
  import aSiteTicketControlImage from '../assets/maps/mirage/asite-ticket/control-image.png';
  import aSiteTicketBench from '../assets/maps/mirage/asite-ticket/bench.png';
  import aSiteTicketConnector from '../assets/maps/mirage/asite-ticket/connector.png';
  import aSiteTicketDark1 from '../assets/maps/mirage/asite-ticket/dark-one.png';
  import aSiteTicketDark2 from '../assets/maps/mirage/asite-ticket/dark-two.png';
  import aSiteTicketDefault from '../assets/maps/mirage/asite-ticket/default.png';
  import aSiteTicketFirebox from '../assets/maps/mirage/asite-ticket/firebox.png';
  import aSiteTicketNinja from '../assets/maps/mirage/asite-ticket/ninja.png';
  import aSiteTicketPalace from '../assets/maps/mirage/asite-ticket/palace.png';
  import aSiteTicketRamp from '../assets/maps/mirage/asite-ticket/ramp.png';
  import aSiteTicketSandwich from '../assets/maps/mirage/asite-ticket/sandwich.png';
  import aSiteTicketStairs from '../assets/maps/mirage/asite-ticket/stairs.png';
  import aSiteTicketTetris from '../assets/maps/mirage/asite-ticket/tetris.png';
  import aSiteTicketTriple from '../assets/maps/mirage/asite-ticket/triple.png';
  import aSiteTicketWood from '../assets/maps/mirage/asite-ticket/wood.png';


  //asite-wood
  import aSiteWoodControl from '../assets/maps/mirage/asite-wood/control-image.png';
  import aSiteWoodBench from '../assets/maps/mirage/asite-wood/bench.png';
  import aSiteWoodConnector from '../assets/maps/mirage/asite-wood/connector.png';
  import aSiteWoodDefault from '../assets/maps/mirage/asite-wood/default.png';
  import aSiteWoodFirebox from '../assets/maps/mirage/asite-wood/firebox.png';
  import aSiteWoodJungle from '../assets/maps/mirage/asite-wood/jungle.png';
  import aSiteWoodNinja from '../assets/maps/mirage/asite-wood/ninja.png';
  import aSiteWoodSandwich from '../assets/maps/mirage/asite-wood/sandwich.png';
  import aSiteWoodStairs from '../assets/maps/mirage/asite-wood/stairs.png';
  import aSiteWoodTicket from '../assets/maps/mirage/asite-wood/ticket.png';
  import aSiteWoodTrash from '../assets/maps/mirage/asite-wood/trash.png';
  import aSiteWoodTriple from '../assets/maps/mirage/asite-wood/triple.png';


  const ImageSetHandler = () => {
    let controlImage: string;
    let imageSet: string[];

    const getControlImage = () => {
        return controlImage;
    }

    const getImageSet = () => {
        return imageSet;
    }

    const serveImageSet = (map: string, area: string) => {
        if(map == 'MIRAGE'){
            switch(area){
              case 'A SITE - TICKET':
                controlImage = aSiteTicketControlImage;               
                imageSet = [ aSiteTicketBench, aSiteTicketConnector, aSiteTicketDark1, aSiteTicketDark2, aSiteTicketDefault, aSiteTicketFirebox, aSiteTicketNinja,
                    aSiteTicketPalace, aSiteTicketRamp, aSiteTicketSandwich, aSiteTicketStairs, aSiteTicketTetris, aSiteTicketTriple, aSiteTicketWood ]
                break;
              case 'A SITE - WOOD':
                controlImage = aSiteWoodControl;
                imageSet = [ aSiteWoodBench, aSiteWoodConnector, aSiteWoodDefault, aSiteWoodFirebox, aSiteWoodJungle, aSiteWoodNinja, aSiteWoodSandwich,
                    aSiteWoodStairs, aSiteWoodTicket, aSiteWoodTrash, aSiteWoodTriple ]
                break;
            }
        //add new else if and switch statement here for next map
        }
    }
    
}

export default ImageSetHandler;