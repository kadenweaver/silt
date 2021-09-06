import {Component} from 'react';
import {Button} from 'semantic-ui-react';
import SuperCup from './SuperCup.jpeg';
import ImageCarousel from "./ImageCarousel"
import './App.css';
import { BiLeftArrowCircle } from 'react-icons/bi';


class SuperCupPost extends Component {
    
    render() {
        return (
          <div>
            <Button className='post-back-button' onClick={this.props.onClosePost}>
                <BiLeftArrowCircle className='back-button-icon'/>
                Back to Soccer
            </Button>
            <h2>Chelsea Are Super Champions Of Europe</h2>
            <p>Tuesday, Aug 17th 2021</p>
            <div className="image-container">
                <img  className="post-image"src={SuperCup}></img>
            </div>
            <div className="text-container">
                <h4>Tuchel's Men Edged Past The EL Champions 6-5 On Penalties, Though The Side Appeared Polished And In Control</h4>
                <p>
                    What better way to troll Chelsea fans than to sub Kepa Arrizabalaga on for a last minute "penalties specialist" appearance in the UEFA Super Cup. Somehow it worked: the Spanish keeper blocked spot kicks from Aissa Mandi and Raul Albiol, almost stopping a third with a unique strategy that involved diving to his right all but once.
                </p>
                <p>
                    Hakim Ziyech's early goal wasn't enough to secure a victory for Chelsea. The Algerian struck in the first half, arching the ball over the keeper into the opposite side of the net. Kai Havertz provided the assist after being played in brilliantly on the left side by an inspired Marcos Alonso pass.  Gerard Moreno equalized 30 minutes into the second half on a sharply worked passing play by the Spanish side. Moreno found Boulaye Dia near the goal line and made the most out of the return pass from his Senegalese teammate.
                </p>
                <p>
                    What proceeded was a bizarre penalty shootout-- it certaintly started that way with Kepa's substitution late in extra time. Chelsea shot first, but fell behind immediately with a weak effort from Havertz of all players. Marcos Alonso slipped at the spot during his shot in proper John Terry nightmare fashion, and sudden death saw Toni Rudiger step up and dispatch an emphatic finish.
                </p>

            </div>

        </div>
    );
  }
}

export default SuperCupPost;

