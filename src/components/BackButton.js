import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Flex, Button, Icon } from "@chakra-ui/react";
import { BiLeftArrowCircle } from "react-icons/bi";

const BackButton = () => {
  const {goBack} = useHistory()
  const location = useLocation()
  const path = location?.pathname
  const id = path?.split('/')?.slice(1)?.at(1)

  const prev = location?.state?.prevPath
  const backDefined = prev && typeof prev === 'string'
  const pathList = ['soccer', 'music', 'movies', 'games']
  const pathIndex = backDefined && pathList.findIndex(x => prev.includes(x))
  const label = pathIndex !== undefined && pathIndex >= 0 ? pathList.at(pathIndex).charAt(0).toUpperCase() + pathList.at(pathIndex).slice(1) : 'Home'

  return (
    id  &&
      <Flex
        position="fixed"
        w="100%"
        h="7%"
        pr="3%"
        pt="4"
        flexDir="row"
        justifyContent="flex-end"
      >
        <Button
          onClick={goBack}
          width="fit-content"
          textAlign="center"
          p="2"
          h="9"
          backgroundColor="#fffef5"
          color="#3c4759"
          position="fixed"
          ml="62vw"
          borderRadius="3px"
          fontSize=".65em"
          border="1px solid black"
          leftIcon={<Icon as={BiLeftArrowCircle} />}
          _after={{
            content: `""`,
            backgroundColor: "#dae4ed",
            width: "100%",
            zIndex: "-1",
            position: "absolute",
            height: "100%",
            top: "7px",
            left: "7px",
            transition: "0.2s",
          }}
          _hover={{
            color: "white",
            border: "none",
            boxShadow: "0px 1px 5px 1px gray",
            _after: {
              borderRadius: "3px",
              top: "0px",
              left: "0px",
              backgroundColor: "#3c4759",
            },
          }}
        >
          {`Back to ${label}`}
        </Button>
    </Flex>
  );
};

export default BackButton;
