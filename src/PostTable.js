import {Component} from 'react';
import apChels from './APChelsea.jpeg';
import Euro from './euroPic.jpeg';
import SuperCup from './SuperCup.jpeg';
import FirstMatch from './FirstMatch.jpg';
import { Container, Button } from 'semantic-ui-react';

import './App.css';


class PostTable extends Component {

    render() {
        const {onClickPost, onClickSuperPost, onClickFirstMatchPost} = this.props;
        return (
            <div className="post-table-div">
                <div className="post-table-header">
                    <h2>Soccer</h2>
                </div>
                <div className="post-table-item">
                    <Button className="post-button" onClick={onClickFirstMatchPost}></Button>
                    <Container className='post-item-container'>
                        <div clasName="post-table-item-image-container">
                            <img className="post-table-item-image" src={FirstMatch}></img>
                        </div>
                        <div className="post-table-item-title-container">
                            <h5>The Blues Secure Season Opener Win Through Goals From Alonso, Pulisic, and Chalobah</h5>
                        </div>
                    </Container>

                </div>
                <div className="post-table-item">
                    <Button className="post-button" onClick={onClickSuperPost}></Button>
                    <Container className='post-item-container'>
                        <div clasName="post-table-item-image-container">
                            <img className="post-table-item-image" src={SuperCup}></img>
                        </div>
                        <div className="post-table-item-title-container">
                            <h5>Chelsea Bests Resilient Villarreal To Win Season's First Silverware</h5>
                        </div>
                    </Container>

                </div>
                <div className="post-table-item">
                    <Container className='post-item-container'>
                        <div clasName="post-table-item-image-container">
                            <img className="post-table-item-image" src={Euro}></img>
                        </div>
                        <div className="post-table-item-title-container">
                            <h5>Euros Predictions and Predilictions</h5>
                        </div>
                    </Container>

                </div>
                <div className="post-table-item">
                    <Button className="post-button" onClick={onClickPost}></Button>
                    <Container className='post-item-container'>
                        <div clasName="post-table-item-image-container">
                            <img className="post-table-item-image" src={apChels}></img>
                        </div>
                        <div className="post-table-item-title-container">
                            <h4>Chelsea Are European Champs!</h4>
                        </div>
                    </Container>

                </div>
            </div>
        );
    }
}

export default PostTable;
