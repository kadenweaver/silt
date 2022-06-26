import {Component} from 'react';
import { Image, Flex, Text } from '@chakra-ui/react';

import '../App.css';


class PostPreview extends Component {

    render() {
        const {previewImage, previewTitle, previewImageOffset, previewKey} = this.props;
        return (
            <Flex    
                w='100%'
                h='90px'
                borderRadius='5px'
                flexDir='row'
                onClick={() => this.props.onClickMusicPost(previewKey)}
                border='2px solid #3c4759'
                mb='6px'
                textAlign='center'
                verticalAlign='center'
                bg='#edf5fc'
                color='#3c4759'
                _hover={{
                    backgroundColor: '#2f3847',
                    color: 'white',
                    cursor: 'pointer',
                    boxShadow: '0px 3px 5px 1px gray'
                }}>
                <Image 
                    src={previewImage}
                    maxHeight='inherit'
                    minWidth='50%'
                    borderRadius='5px'
                    fit='cover'
                    borderRadius='0'
                    objectPosition={previewImageOffset ? `0% ${previewImageOffset}%` : undefined}
                />
                <Text 
                    fontSize='18px' 
                    fontWeight='bold' 
                    alignSelf='center' 
                    ml='auto' 
                    mr='auto'>
                    {previewTitle}
                </Text>
            </Flex>
            
        );
    }
}

export default PostPreview;

