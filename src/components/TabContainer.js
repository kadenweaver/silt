import {Component} from 'react';
import PostPreview from "./PostPreview";
import { chakra, Heading } from '@chakra-ui/react'


import '../App.css';

class TabContainer extends Component {

    render() {
        const {tabTitle, tabContent, onClickSoccerPost, previewKeys, previewTitles, previewImages} = this.props;
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
                    <Heading mt='3.5' fontSize='50px' fontWeight='light'>Home</Heading>
                </chakra.div>
                
                {/* For Post Tables
                previewTitles && previewTitles.map((value, index) => 
                <PostPreview previewKey={previewKeys[index]} previewTitle={value} onClickMusicPost={onClickSoccerPost} previewImage={previewImages[index]}/>)*/}
            </chakra.div>
        );
    }
}

export default TabContainer;
