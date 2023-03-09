import { VStack, IconButton, Icon, Link as ChakraLink, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import { BiMusic, BiHomeAlt, BiFootball, BiCameraMovie, BiSun, BiMoon } from "react-icons/bi";
import { BsController} from "react-icons/bs";

import { DrawerButton } from "./DrawerButton";

const MiniButton = props => {
  const { icon, active } = props;
  const activeBgColor = useColorModeValue('#2f3847', '#a3b9cc')
  const activeTxtColor = useColorModeValue('white', '#1f2428')
  const inactiveBgColor = useColorModeValue('#a3b9cc', '#1f2428')
  const inactiveTxtcolor = useColorModeValue('#3c4759', 'orange')

  return (
    <IconButton
      bg={active ? activeBgColor : inactiveBgColor}
      color={active ? activeTxtColor : inactiveTxtcolor}
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
    toggleColorMode,
    colorMode,
  } = props;
  const location = useLocation();
  const match = useRouteMatch()

  const minNavBgColor = useColorModeValue('#a3b9cc', '#1f2428')
  const minNavTxtColor = useColorModeValue('#3c4759','orange')
  const minNavHvrBgColor = useColorModeValue('#3c4759', '#2f3847')
  const minNavHvrTxtColor = useColorModeValue('white', 'white')
  const minNavColorModeIcon = useColorModeValue(BiSun, BiMoon)
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
      bg={minNavBgColor}
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
          <MiniButton icon={colorMode === 'light' ? BiSun : BiMoon} active={false} />
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
      {navDrawerOpen && (
        <Tooltip borderRadius='2%' label='toggle the color mode' placement='bottom'>
          <IconButton icon={<Icon as={minNavColorModeIcon} fontSize='18px'/>}  size='md' bg={minNavBgColor} color={minNavTxtColor} _hover={{bg: minNavHvrBgColor, color: minNavHvrTxtColor}} onClick={() => toggleColorMode()}/>
        </Tooltip>
      )}
    </VStack>
  );
};
