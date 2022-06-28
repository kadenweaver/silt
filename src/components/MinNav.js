import { VStack, IconButton, Icon } from "@chakra-ui/react";
import { BiMusic, BiHomeAlt, BiFootball, BiCameraMovie } from "react-icons/bi";

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
    openHomeTab,
    homeTabShow,
    openSoccerTable,
    soccerPostTableShow,
    openMusicTable,
    musicPostTableShow,
    isSoccerPostOpen,
    isMusicPostOpen
  } = props;

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
          <MiniButton icon={BiHomeAlt} active={homeTabShow} />
          <MiniButton icon={BiFootball} active={soccerPostTableShow || isSoccerPostOpen} />
          <MiniButton icon={BiMusic} active={musicPostTableShow || isMusicPostOpen} />
          <MiniButton icon={BiCameraMovie} />
        </>
      )}
      {navDrawerOpen && (
        <>
          <DrawerButton
            buttonTitle="Home"
            openTab={openHomeTab}
            active={homeTabShow}
            icon={BiHomeAlt}
          />
          <DrawerButton
            buttonTitle="Soccer"
            openTab={openSoccerTable}
            active={soccerPostTableShow || isSoccerPostOpen}
            icon={BiFootball}
          />
          <DrawerButton
            buttonTitle="Music"
            openTab={openMusicTable}
            active={musicPostTableShow || isMusicPostOpen}
            icon={BiMusic}
          />
          <DrawerButton buttonTitle="Movies" icon={BiCameraMovie} />
        </>
      )}
    </VStack>
  );
};
