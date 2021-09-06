import {Component} from 'react';
import {Button} from 'semantic-ui-react';
import './App.css';
import { BiLeftArrowCircle } from 'react-icons/bi';


class MusicPost extends Component {

    render() {
        const {onClosePost, postTitle, postDate, playerLink, postText} = this.props;
        return (
            <div>
                <Button className='post-back-button' onClick={onClosePost}>
                    <BiLeftArrowCircle className='back-button-icon'/>
                    Back to Music
                </Button>
                <h2>{postTitle}</h2>
                <p>{postDate}</p>
                <div className="post-spot-container">
                    <iframe className="post-spot-player" src={playerLink} width="300" height="380"
                            frameBorder="0" allowTransparency="true" allow="encrypted-media">
                    </iframe>
                </div>
                <div className="text-container">
                    {postText && postText.map((x) => <p>{x}</p>)}

                </div>

            </div>
        );
    }
}

export default MusicPost;


