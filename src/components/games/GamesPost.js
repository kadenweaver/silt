import React from "react";
import { Heading, Text, VStack, Flex, chakra, useColorModeValue } from "@chakra-ui/react";
import "../../App.css";
import { PostText } from "../PostText";

export const GamesPost = props => {
  const headerColor = useColorModeValue("black", "orange");

  return (
    <Flex mt={["25%", "5%"]} flexDir="column">
      <Flex flexDir="column" mb="9%">
        <Heading color={headerColor}>{props.postTitle}</Heading>
        <Text fontSize="90%" color={headerColor}>{props.postDate}</Text>
      </Flex>
      <chakra.div w="80%" h="21%" mb="7%" mr="auto" ml="auto">
        <img className="post-image" src={props.postImage} alt=""></img>
      </chakra.div>
      <Text fontSize="110%" fontWeight="bold" mb="7%" color={headerColor}>
        {props.textHeader}
      </Text>
      <VStack spacing={["5%", "3%"]} alignItems="flex-start">
        {props.postText &&
          props.postText.map((x, ix) => (
            <PostText key={`text-${ix}`} content={x} />
          ))}
      </VStack>
    </Flex>
  );
};

export default GamesPost;
