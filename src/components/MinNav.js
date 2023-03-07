import { VStack, IconButton, Icon, Link as ChakraLink } from "@chakra-ui/react";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import { BiMusic, BiHomeAlt, BiFootball, BiCameraMovie } from "react-icons/bi";
import { BsController } from "react-icons/bs";

import { DrawerButton } from "./DrawerButton";

const MiniButton = props => {
  const { icon, active } = props;
  return (
    <IconButton
      bg={active ? "#2f3847" : "#a3b9cc"}
      color={active ? "white" : "#3c4759"}
      w="100%"
      borderRadius=""
      fontSize="20px"
      icon={<Icon as={icon} />}
    />
  );
};

export const MinNav = props => {
  const {
    navDrawerOpen,
    closeNavDrawer,
    openNavDrawer,
  } = props;
  const location = useLocation();
  const match = useRouteMatch()

  const path = location?.pathname;
  const pathSplit = path.split('/').at(1)
  const pathList = ["", "soccer", "music", "movies", "games"];
  const buttonTitles = ["Home", "Soccer", "Music", "Movies", "Games"];
  const pathIcons = [
    BiHomeAlt,
    BiFootball,
    BiMusic,
    BiCameraMovie,
    BsController,
  ];

  const activeIndex = path && pathList.findIndex(x => x === pathSplit);
  return (
    <VStack
      w={navDrawerOpen ? "12%" : "4%"}
      bg="#a3b9cc"
      position="fixed"
      h="100vh"
      pt="1"
      onMouseEnter={openNavDrawer}
      onMouseLeave={closeNavDrawer}
      transition={"width 1s"}
    >
      {!navDrawerOpen && (
        <>
          {pathIcons.map((icon, index) => 
            <MiniButton icon={icon} active={index === activeIndex} key={`min-button_${index}`}/>
          )}
        </>
      )}
      {navDrawerOpen && (
        <>
          {pathList.map((path, index) => (
            <ChakraLink as={Link} to={{pathname: `/${path}`, state: {prevPath: match}}} w="100%" key={`drawer-button_${index}`}>
              <DrawerButton
                buttonTitle={buttonTitles.at(index)}
                active={index === activeIndex}
                icon={pathIcons.at(index)}
              />
            </ChakraLink>
          ))}
        </>
      )}
    </VStack>
  );
};
