import {Component} from 'react';
import {Button} from 'semantic-ui-react';
import './App.css';
import { BiLeftArrowCircle } from 'react-icons/bi';


class GlacierPost extends Component {

    render() {
        return (
            <div>
                <Button className='post-back-button' onClick={this.props.onClosePost}>
                    <BiLeftArrowCircle className='back-button-icon'/>
                    Back to Music
                </Button>
                <h2>Up And Coming John Glacier Makes Bedroom Hop</h2>
                <p>Friday, August 20 2021</p>
                <div className="post-spot-container">
                    <iframe className="post-spot-player" src="https://open.spotify.com/embed/track/5TaJDVZLSreKLg31wRR284?si=U0ccOg31S0CHxJNK4jF2yQ&dl" width="300" height="380"
                            frameBorder="0" allowTransparency="true" allow="encrypted-media">
                    </iframe>
                </div>
                <div className="text-container">
                    <p>
                        Not much is known about John Glacier save her online persona. The artist boasts no Wikipedia page, and only one interview pops up on Google. The rest is left to be interpreted from her SoundCloud and Instagram accounts. Nevertheless, Glacier is an exciting prospect in the music world. The UK artist is supposed to release an upcoming collaboration with producer Vegyn, whose signature muffled touch also appears on Icing. Together they should combine to create plenty of Bedroom Hop, a play on the pop genre made popular in the late 2010s, characterized by lofi production and overprocessed sounds.
                    </p>
                </div>

            </div>
        );
    }
}

export default GlacierPost;


