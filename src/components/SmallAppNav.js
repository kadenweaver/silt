import { useRouteMatch, useLocation, Link } from "react-router-dom";
import {
  IconButton,
  Icon,
  Link as ChakraLink,
  VStack,
  DrawerOverlay,
  Drawer,
  DrawerContent,
  Text,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { BiMenu } from "react-icons/bi";

export const SmallAppNav = props => {
  const { openNavDrawer, navDrawerOpen, closeNavDrawer } = props;
  const onButtonClick = navDrawerOpen ? closeNavDrawer : openNavDrawer;

  const location = useLocation();
  const match = useRouteMatch();

  const path = location?.pathname;
  const pathSplit = path.split("/").at(1);
  const pathList = ["", "soccer", "music", "movies", "games"];
  const buttonTitles = ["Home", "Soccer", "Music", "Movies", "Games"];
  const activeIndex = path && pathList.findIndex(x => x === pathSplit);
  return (
    <>
      {!navDrawerOpen && (
        <IconButton
          onClick={onButtonClick}
          mt="4%"
          bg="#a3b9cc"
          position="fixed"
          left="1"
          size="md"
          borderRadius="3px"
          fontSize="20px"
          zIndex={5}
          icon={<Icon as={BiMenu} />}
        />
      )}
      {navDrawerOpen && (
        <Drawer
          isOpen={navDrawerOpen}
          onClose={closeNavDrawer}
          closeOnOverlayClick
          size='full'
          placement="bottom"
        >
          <DrawerOverlay />
          <DrawerContent h='100%'>
            <DrawerCloseButton size='lg' color='white' fontWeight='extrabold' left={2} top={2}/>
            <VStack bg="#3c4759" h='100%' pt='30%' >
              {buttonTitles.map((x, index) => (
                <ChakraLink
                  as={Link}
                  to={{
                    pathname: `/${pathList.at(index)}`,
                    state: { prevPath: match },
                  }}
                  w="fit-content"
                  key={index}
                >
                  <Text fontSize="3em" color={index === activeIndex ? 'black' : 'white' } onClick={closeNavDrawer}>
                    {x}
                  </Text>
                </ChakraLink>
              ))}
            </VStack>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};
