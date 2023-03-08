import React from "react";
import { Heading, Text, VStack, Flex, chakra } from "@chakra-ui/react";
import "../../App.css";

export const GamesPost = props => (
  <Flex mt={['25%', '5%']} flexDir="column">
    <Flex flexDir="column" mb="9%">
      <Heading>{props.postTitle}</Heading>
      <Text fontSize="90%">{props.postDate}</Text>
    </Flex>
    <chakra.div w="80%" h="21%" mb="7%" mr="auto" ml="auto">
      <img className="post-image" src={props.postImage} alt=""></img>
    </chakra.div>
    <Text fontSize="110%" fontWeight="bold" mb="7%">
      {props.textHeader}
    </Text>
    <VStack spacing={['5%', '3%']} alignItems="flex-start">
      {props.postText &&
        props.postText.map((x, ix) => (
          <Text fontFamily='Cormorant Garamond' fontSize={['96%', '82%']} key={`text-${ix}`}>{x}</Text>
        ))}
    </VStack>
  </Flex>
);

export default GamesPost;
