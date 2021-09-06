import {Component} from 'react';
import {Button} from 'semantic-ui-react';
import apChels from './APChelsea.jpeg';
import './App.css';
import { BiLeftArrowCircle } from 'react-icons/bi';


class PerfumePost extends Component {

    render() {
        return (
            <div>
                <Button className='post-back-button' onClick={this.props.onClosePost}>
                    <BiLeftArrowCircle className='back-button-icon'/>
                    Back to Music
                </Button>
                <h2>Groove Out: Jim E Stack Remixes Perfume Genius's 'Without You' To Funk EDM Perfection</h2>
                <p>Wednesday, June 23rd 2021</p>
                <div className="post-spot-container">
                    <iframe className="post-spot-player" src="https://open.spotify.com/embed/track/0WOsGA4a7Rio2t0osKmYVa" width="300" height="380"
                            frameBorder="0" allowTransparency="true" allow="encrypted-media">
                    </iframe>
                </div>
                <div className="text-container">
                    <p>I've been getting into Perfume Genius more after seeing his album, Set My Heart on Fire Immediately, get such high ratings last year.
                    Many of the tracks from the original album are lively and intricately woven, my favorite being "On The Floor". Two of the better tracks off the ensuing
                    remix album are A.G. Cook's light, static take on "Describe", and this bouncy rhythm switch for "Without You".</p>
                </div>

            </div>
        );
    }
}

export default PerfumePost;
