import {Component} from 'react';
import { chakra, Heading } from '@chakra-ui/react'
import apChels from '../../pictures/APChelsea.jpeg';
import Euro from '../../pictures/euroPic.jpeg';
import SuperCup from '../../pictures/SuperCup.jpeg';
import FirstMatch from '../../pictures/FirstMatch.jpg';
import PostPreview from "../PostPreview";
import Kai from '../../pictures/sadBoyKai.webp'


import '../../App.css';

class PostTable extends Component {

    render() {
        const {onClickSoccerPost} = this.props;
        return (
            <chakra.div
              mt='2%'
              width='100%'
              mr='auto'
              ml='auto'>
                <chakra.div className="post-table-header"
                    backgroundColor='#3c4759'
                    border='1px solid #3c4754'
                    teextAlign='center'
                    mb='2.5%'
                    borderRadius='3px'
                    color='white'
                    h='100px'
                    fontSize='50px'>
                    <Heading mt='3.5' fontSize='50px' fontWeight='light'>Soccer</Heading>
                </chakra.div>
                <PostPreview previewKey={3} previewTitle={'Tough Bout with Real Madrid Brings End to Champions League Defense'} onClickMusicPost={onClickSoccerPost} previewImage={Kai} previewImageOffset='10'/>
                <PostPreview previewKey={2} previewTitle={'The Blues Secure Season Opener Win Through Alonso, Pulisic, and Chalobah'} onClickMusicPost={onClickSoccerPost} previewImage={FirstMatch} previewImageOffset='20'/>
                <PostPreview previewKey={1} previewTitle={"Chelsea Bests Resilient Villarreal To Win Season's First Silverware"} onClickMusicPost={onClickSoccerPost} previewImage={SuperCup} previewImageOffset='0'/>
                <PostPreview previewKey={'abc'} previewTitle={'Euros Predictions and Predilictions'} onClickMusicPost={() => null} previewImage={Euro} previewImageOffset='80'/>
                <PostPreview previewKey={0} previewTitle={"Chelsea Are European Champs!"} onClickMusicPost={onClickSoccerPost} previewImage={apChels} previewImageOffset='2'/>
            </chakra.div>
        );
    }
}

export default PostTable;
