import React from 'react';
import { Button, Icon, Flex, chakra, Text, Heading } from '@chakra-ui/react';
import '../App.css';
import { BiLeftArrowCircle } from 'react-icons/bi';


const MappedPost = (props) =>  {
        const {onClosePost, postTitle, postDate, 
           backNavPage, componentMap } = props;
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
                {componentMap && componentMap.map(component => {
                    if(component.type === 'spotify-player') {
                        return (
                            <div className="post-spot-container">
                                <iframe className="post-spot-player" src={component.playerLink} width="300" height="380"
                                        frameBorder="0" allowTransparency="true" allow="encrypted-media">
                                </iframe>
                            </div>
                        )
                    }
                    if(component.type === 'image') {
                    return(
                        <div className="image-container">
                            <img  className="post-image"src={component.postImage}></img>
                        </div>
                    )
                    }
                    if(component.type === 'text') {
                        return (
                        <Flex mb='4em'>
                            <Text fontSize='23px'>{component.text}</Text>
                        </Flex>
                        )
                    }
                    if(component.type === 'header-3') {
                        return (
                            <h3>{component.header}</h3>
                        )
                    }
                    if(component.type === 'header-4') {
                        return (
                            <Text 
                                mb='3%' 
                                backgroundColor='#3c4759' 
                                color='#dae4ed' 
                                borderRadius='10px' 
                                pl='3'
                                pr='12'
                                w='fit-content'>
                                {component.header}
                            </Text>
                        )
                    }
                    if(component.type === 'yt') {
                        return (
                            <chakra.div 
                                width='fit-content'
                                height='fit-content'
                                background-color='#fffef5'
                                pt='3px'
                                mr='auto'
                                ml='auto'
                                mb='5%'>
                                <iframe 
                                    width="800" 
                                    height="450" 
                                    src={component.ytLink}
                                    title={component.ytLinkTitle}
                                    frameborder="0" 
                                    allow="accelerometer; 
                                        autoplay; 
                                        clipboard-write; 
                                        encrypted-media; 
                                        gyroscope; 
                                        picture-in-picture" 
                                    allowfullscreen={true}>
                                </iframe>
                            </chakra.div>
                        )
                    }

                })}
            </div>
        );
}

export default MappedPost;


