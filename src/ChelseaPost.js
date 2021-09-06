import {Component} from 'react';
import {Button} from 'semantic-ui-react';
import apChels from './APChelsea.jpeg';
import ImageCarousel from "./ImageCarousel"
import './App.css';
import { BiLeftArrowCircle } from 'react-icons/bi';


class ChelseaPost extends Component {
    
    render() {
        return (
          <div>
            <Button className='post-back-button' onClick={this.props.onClosePost}>
                <BiLeftArrowCircle className='back-button-icon'/>
                Back to Soccer
            </Button>
            <h2>Chelsea Are Champions Of Europe</h2>
            <p>Monday, May 31st 2021</p>
            <div className="image-container">
                <img  className="post-image"src={apChels}></img>
            </div>
            <div className="text-container">
                <h4>The Blues write a new chapter in their legacy as European giants, meeting expectations based on massive summer signings</h4>
                <p>
                    After negating City's offense in the CL Final, Chelsea pose an intimidating threat going forward. They can bank on a depth of young talent reinforced by proven professionals marked by consistent quality. Despite an otherwise tumultous season end, Chelsea's light at the end of the tunnel is shining brighter than ever.
                </p>
                <p>
                    Homegrown starlets Mason Mount and Reece James will likely stay at the club as long as found talent Ben Chilwell, Christian Pulisic, Timo Werner, and Kai Havertz, especially since the group has proven they can succeed at the highest level.
                </p>
                <p>
                    We were looking forward to this game so much that we decided to guess the Chelsea starting lineup
                </p>
            </div>
            <div className="slideshow-container">
                <ImageCarousel></ImageCarousel>
            </div>

        </div>
    );
  }
}

export default ChelseaPost;
