import React from 'react';
import { 
    Heading, 
    Text, 
    VStack, 
    Flex,
    chakra } 
from '@chakra-ui/react';
import BackButton from '../BackButton'
import '../../App.css';

export const SoccerPost = (props) => (
          <div>
              <BackButton {...props}/>
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
                <img className="post-image" src={props.postImage} alt=''></img>
              </chakra.div>
              <Text
                fontSize='30'
                fontWeight='bold'
                mb='7%'>
                  {props.textHeader}
              </Text>
              <VStack spacing='3%' alignItems='flex-start'>
                    {props.postText && props.postText.map((x, ix) => <p key={ix} className='post-text'>{x}</p>)}
              </VStack>
          </div>
)

export default SoccerPost;