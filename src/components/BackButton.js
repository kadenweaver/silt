import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Flex, Button, Icon, useColorModeValue } from "@chakra-ui/react";
import { BiLeftArrowCircle } from "react-icons/bi";

const BackButton = () => {
  const {goBack, push} = useHistory()
  const location = useLocation()
  const path = location?.pathname
  const id = path?.split('/')?.slice(1)?.at(1)

  const prev = location?.state?.prevPath
  const backDefined = prev && typeof prev === 'string'
  const pathList = ['soccer', 'music', 'movies', 'games']
  const pathIndex = backDefined && pathList.findIndex(x => prev.includes(x))
  const label = pathIndex !== undefined && pathIndex >= 0 ? pathList.at(pathIndex).charAt(0).toUpperCase() + pathList.at(pathIndex).slice(1) : 'Home'

  const buttonText = pathIndex >= -1 ? `Back to ${label}` : `Go to ${label}`
  const buttonFunc = () => pathIndex >= -1 ? goBack() : push('/') 

  const buttonTxtColor = useColorModeValue('#3c4759', 'orange')
  const buttonBgColor = useColorModeValue('#fffef5', '#1f2428')
  const buttonHoverBgColor = useColorModeValue('#dae4ed', '#21272b')
  const buttonHoverTxtColor = useColorModeValue('white', '#1f2428')
  const buttonTColor = useColorModeValue('#3c4759', '#dae4ed')

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
          onClick={buttonFunc}
          width="fit-content"
          textAlign="center"
          p="2"
          h="9"
          backgroundColor={buttonBgColor}
          color={buttonTxtColor}
          position="fixed"
          ml="62vw"
          borderRadius="3px"
          fontSize=".65em"
          border="1px solid black"
          leftIcon={<Icon as={BiLeftArrowCircle} />}
          _after={{
            content: `""`,
            backgroundColor: buttonHoverBgColor,
            width: "100%",
            zIndex: "-1",
            position: "absolute",
            height: "100%",
            top: "7px",
            left: "7px",
            transition: "0.2s",
          }}
          _hover={{
            color: buttonHoverTxtColor,
            border: "none",
            boxShadow: "0px 1px 5px 1px gray",
            _after: {
              borderRadius: "3px",
              top: "0px",
              left: "0px",
              backgroundColor: buttonTColor,
            },
          }}
        >
          {buttonText}
        </Button>
    </Flex>
  );
};

export default BackButton;
