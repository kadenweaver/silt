import React from 'react';
import { 
    Button, 
    Icon, 
    Heading, 
    Text, 
    VStack, 
    Flex,
    chakra } 
from '@chakra-ui/react';
import '../../App.css';
import { BiLeftArrowCircle } from 'react-icons/bi';

export const SoccerPost = (props) => (
          <div>
              <Flex
                w='65vw'
                h='35px'
                mb='10px'
                mt='10px'
                flexDir='row'
                justifyContent='flex-end'>
                <Button 
                    onClick={props.onClosePost}
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
                    {`Back to ${props.backNavPage}`}                
                </Button>
              </Flex>
              <Flex flexDir='column' mb='7%'>
                <Heading>{props.postTitle}</Heading>
                <Text fontSize='25px'>{props.postDate}</Text>
              </Flex>
              <chakra.div
                w='80%'
                h='21%'
                mb='7%'
                mr='auto'
                ml='auto'>
                <img  className="post-image"src={props.postImage}></img>
              </chakra.div>
              <Text
                fontSize='30'
                fontWeight='bold'
                mb='7%'>
                  {props.textHeader}
              </Text>
              <VStack spacing='3%' alignItems='flex-start'>
                    {props.postText && props.postText.map((x) => <p className='post-text'>{x}</p>)}
              </VStack>
          </div>
)

export default SoccerPost;