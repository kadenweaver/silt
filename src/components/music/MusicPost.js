import {Component} from 'react';
import { Button, Icon, Flex, chakra, VStack, Text, Heading } from '@chakra-ui/react';
import '../../App.css';
import { BiLeftArrowCircle } from 'react-icons/bi';


class MusicPost extends Component {

    render() {
        const {onClosePost, postTitle, postDate, 
            playerLink, postText, backNavPage } = this.props;
        return (
            <div>
                <Flex
                    w='65vw'
                    h='35px'
                    mb='10px'
                    mt='10px'
                    flexDir='row'
                    justifyContent='flex-end'>
                    <Button 
                        onClick={onClosePost}
                        width='fit-content'
                        textAlign='center'
                        p='2'
                        h='9'
                        backgroundColor='#fffef5'
                        color='#3c4759'
                        position='fixed'
                        ml='62vw'
                        borderRadius='3px'
                        fontSize='2vh'
                        border='1px solid black'
                        leftIcon={<Icon as={BiLeftArrowCircle}/>}
                        _after={{
                            content: `""`,
                            backgroundColor:'#dae4ed',
                            width: '100%',
                            zIndex: '-1',
                            position: 'absolute',
                            height: '100%',
                            top: '7px',
                            left: '7px',
                            transition: '0.2s'
                        }}
                        _hover={{ color: 'white', border: 'none', boxShadow: '0px 1px 5px 1px gray', _after: { borderRadius: '3px', top: '0px', left: '0px', backgroundColor:'#3c4759'}}}>                    
                        {`Back to ${backNavPage}`}                
                    </Button>
                </Flex>
                <Flex flexDir='column' mb='9%'>
                    <Heading>{postTitle}</Heading>
                    <Text fontSize='25px'>{postDate}</Text>
                </Flex>
                <chakra.div mt='2%' mr='auto' ml='auto' mb='11%'>
                    <iframe className="post-spot-player" src={playerLink} width="300" height="380"
                            frameBorder="0" allowTransparency="true" allow="encrypted-media">
                    </iframe>
                </chakra.div>
                <VStack spacing='3%' alignItems='flex-start'>
                    {postText && postText.map((x) => <p className='post-text'>{x}</p>)}
                </VStack>
            </div>
        );
    }
}

export default MusicPost;


