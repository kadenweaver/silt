import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import {
  Image,
  Flex,
  Text,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";

const PostPreview = props => {
  const {
    postType,
    previewImage,
    previewTitle,
    previewImageOffset,
    previewKey,
  } = props;
  const match = useRouteMatch();
  const previewBgColor = useColorModeValue('#f2f9ff', '#1f2428');
  const previewTxtColor = useColorModeValue('#3c4759', 'orange');
  const previewHoverBgColor = useColorModeValue('#2f3847', '#3c4759');
  const previewHoverTxtColor = useColorModeValue('white', 'white');

  return (
    <ChakraLink
      as={Link}
      to={{
        pathname: `${postType}/${previewKey}`,
        state: { prevPath: match.url },
      }}
    >
      <Flex
        w="100%"
        h="90px"
        borderRadius="5px"
        flexDir="row"
        border="2px solid #3c4759"
        mb="6px"
        textAlign="center"
        verticalAlign="center"
        bg={previewBgColor}
        color={previewTxtColor}
        _hover={{
          background: previewHoverBgColor,
          color: previewHoverTxtColor,
          cursor: "pointer",
          boxShadow: "0px 3px 5px 1px gray",
        }}
      >
        <Image
          src={previewImage}
          maxHeight="inherit"
          w="50%"
          maxWidth="50%"
          fit="cover"
          borderRadius="0"
          objectPosition={
            previewImageOffset ? `0% ${previewImageOffset}%` : undefined
          }
        />
        <Text
          fontSize="0.8em"
          fontWeight="bold"
          alignSelf="center"
          ml="auto"
          mr="auto"
          maxWidth="45%"
          noOfLines={3}
        >
          {previewTitle}
        </Text>
      </Flex>
    </ChakraLink>
  );
};

export default PostPreview;
