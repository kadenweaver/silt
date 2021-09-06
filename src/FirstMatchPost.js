import {Component} from 'react';
import {Button} from 'semantic-ui-react';
import FirstMatch from './FirstMatch.jpg';
import ImageCarousel from "./ImageCarousel"
import './App.css';
import { BiLeftArrowCircle } from 'react-icons/bi';


class FirtMatchPost extends Component {
    
    render() {
        return (
          <div>
            <Button className='post-back-button' onClick={this.props.onClosePost}>
                <BiLeftArrowCircle className='back-button-icon'/>
                Back to Soccer
            </Button>
            <h2>Chelsea Shine In Opening Day Win</h2>
            <p>Wednesday, Aug 18th 2021</p>
            <div className="image-container">
                <img  className="post-image"src={FirstMatch}></img>
            </div>
            <div className="text-container">
                <h4>Chelsea Took No Prisoners Against Palace, Scoring Two Before Half And Sealing The Win With A Third Soon After The Break</h4>
                <p>
                    Soccer has evolved to the point where you have to hold your breath on the first day of the season, even when the opponent is Crystal Palace, even when your team has just won the Champion's League. The spirit at Chelsea is clearly one that burns brightly enough to dissapate that cloud of doubt. And with City dropping points so early in the season, there's nothing but high hopes for the Blues.
                </p>
                <p>
                    For the opening half hour this match looked like one of those stalemates caused by the smaller team's defensive ridgidity. Chelsea kept the Eagles in their own defensive third but failed to find the back of the net. I THINK Mason Mount won the freekick at the edge of the 18 that led to Chelsea's first goal. I know for a fact that I called Marcos Alonso scoring when I saw him lined up behind the ball on the right corner. That guy must practice that every single day, Vicente Guaita was left glued to the spot as he watched the free kick slam into the top right corner of his goal.
                </p>
                <p>
                    Christian Pulisic struck next, falling over as his attempt skipped off of the outstretched leg of Cheikhou Kouyate and over a prone Guaita. Why is he always falling when he scores? Mount worked an incredible one-two with Azpilicueta on the right flank to open himself up for the cross that led to Pulisic's shot. We went into the locker room at half feeling positive about the result, but there's a certain saying about this type of lead. Luckily, Trevor Chalobah scored a long-raged effort on his debut to put Chelsea three ahead. What a way to start off your senior team run at the outset of a season; it's nice to see Tuchel bringing along academy players.
                </p>

            </div>

        </div>
    );
  }
}

export default FirtMatchPost;


