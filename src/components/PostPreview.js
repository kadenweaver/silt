import React from "react";
import { Link } from 'react-router-dom'
import { Image, Flex, Text, Link as ChakraLink } from "@chakra-ui/react";

const PostPreview = props => {
  const {
    postType,
    previewImage,
    previewTitle,
    previewImageOffset,
    previewKey,
  } = props;

  return (
    <ChakraLink as={Link} to={`${postType}/${previewKey}`}>

    <Flex
      w="100%"
      h="90px"
      borderRadius="5px"
      flexDir="row"
      border="2px solid #3c4759"
      mb="6px"
      textAlign="center"
      verticalAlign="center"
      bg="#f2f9ff"
      color="#3c4759"
      _hover={{
        backgroundColor: "#2f3847",
        color: "white",
        cursor: "pointer",
        boxShadow: "0px 3px 5px 1px gray",
      }}
    >
      <Image
        src={previewImage}
        maxHeight="inherit"
        minWidth="50%"
        fit="cover"
        borderRadius="0"
        objectPosition={
          previewImageOffset ? `0% ${previewImageOffset}%` : undefined
        }
      />
      <Text
        fontSize="18px"
        fontWeight="bold"
        alignSelf="center"
        ml="auto"
        mr="auto"
        maxWidth='45%'
      >
        {previewTitle}
      </Text>
    </Flex>
    </ChakraLink>
  );
};

export default PostPreview;
