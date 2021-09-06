import {Component} from 'react';
import { Container, Button } from 'semantic-ui-react';

import './App.css';


class PostPreview extends Component {

    render() {
        const {previewImage, previewTitle} = this.props;
        return (
            <div className="post-table-item">
                <Button className="post-button" onClick={this.onClickPost}></Button>
                <Container className='post-item-container'>
                    <div clasName="post-table-item-image-container">
                        <img className="post-table-item-image" src={previewImage}></img>
                    </div>
                    <div className="post-table-item-title-container">
                        <h5>{previewTitle}</h5>
                    </div>
                </Container>
            </div>
            
        );
    }
    
    onClickPost = () => {
        debugger;
        const {previewKey, onClickMusicPost} = this.props;
        if(onClickMusicPost){
            onClickMusicPost(previewKey);
        }
    }
}

export default PostPreview;

