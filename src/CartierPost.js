import {Component} from 'react';
import {Button} from 'semantic-ui-react';
import apChels from './APChelsea.jpeg';
import './App.css';
import { BiLeftArrowCircle } from 'react-icons/bi';


class CartierPost extends Component {

    render() {
        return (
            <div>
                <Button className='post-back-button' onClick={this.props.onClosePost}>
                    <BiLeftArrowCircle className='back-button-icon'/>
                    Back to Music
                </Button>
                <h2>Cartier God and Bladee: Who Invented Volume Throttling?</h2>
                <p>Wednesday, June 23rd 2021</p>
                <div className="post-spot-container">
                    <iframe className="post-spot-player" src="https://open.spotify.com/embed/track/7tlu2KkAfOaCZMpDEQ8Npy?si=Qnjv-zJ6TY-gCMiQFzzBYg" width="300" height="380"
                            frameBorder="0" allowTransparency="true" allow="encrypted-media">
                    </iframe>
                </div>
                <div className="text-container">
                    <p>Spotify keeps pushing this song on me, I think their bot has detected a slight interest in Bladee. It's a pretty weak
                        song but I do like that they used a volume wobble through the entirety of the track, it invokes a crystal like hollowness.
                        Hold on, I just found out Cartier God is a SoundCloud producer, does that make Bladee a SoundCloud rapper? Sad Boys 4 lyfe.
                    </p>

                </div>

            </div>
        );
    }
}

export default CartierPost;
