import "./App.css";
import React, { useState, useMemo } from "react";
import SoccerPostTable from "./components/soccer/SoccerPostTable";
import MusicPostTable from "./components/music/MusicPostTable";
import TabContainer from "./components/TabContainer";
import { Container, chakra } from "@chakra-ui/react";

import SoccerPostsMapped from "./components/soccer/SoccerPostsMapped";
import { soccerPreviewContentList } from "./components/soccer/SoccerPostContent";

import MusicPostsMapped from "./components/music/MusicPostsMapped";
import { musicPostPreviewList } from "./components/music/MusicPostContent";

import BackButton from "./components/BackButton";
import { MinNav } from "./components/MinNav";

const AppUI = () => {
  const [homeTabShow, setHomeTabShow] = useState(true);

  // nav drawer
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  // soccer keys
  const NUM_SOCC = soccerPreviewContentList?.length;
  const [soccerPostTableShow, setSoccerPostTableShow] = useState(false);
  const [soccerPostsOpen, setSoccerPostsOpen] = useState(
    Array(NUM_SOCC).fill(false)
  );

  const isSoccerPostOpen = useMemo(
    () => soccerPostsOpen.some(x => x === true),
    [soccerPostsOpen]
  );
  console.log("isSoccerPostOpen ", isSoccerPostOpen);
  // music keys
  const NUM_MUS = musicPostPreviewList?.length;
  const [musicPostTableShow, setMusicPostTableShow] = useState(false);
  const [musicPostsOpen, setMusicPostsOpen] = useState(
    Array(NUM_MUS).fill(false)
  );

  const isMusicPostOpen = useMemo(
    () => musicPostsOpen.some(x => x),
    [musicPostsOpen]
  );

  // closes all posts in music and soccer
  const closeAllPosts = () => {
    setSoccerPostsOpen(Array(NUM_SOCC).fill(false));
    setMusicPostsOpen(Array(NUM_MUS).fill(false));
  };

  const closeSoccerPostsTablesDrawer = () => {
    closeAllPosts();

    //close tables
    setSoccerPostTableShow(false);
    setMusicPostTableShow(false);
    setHomeTabShow(false);

    closeNavDrawer();
  };

  // nav drawer open/close
  const openNavDrawer = () => {
    setNavDrawerOpen(true);
  };
  const closeNavDrawer = () => {
    setNavDrawerOpen(false);
  };

  // closes everything else and opens the home tab
  const openHomeTab = () => {
    closeSoccerPostsTablesDrawer();
    setHomeTabShow(true);
  };

  // closes a music post by opening the music table
  const closeMusicPost = () => {
    openMusicTable();
  };

  // open music post by index in musicPostsOpen
  const onClickMusicPost = key => {
    window.scrollTo(0, 0);
    var flattenedArray = Array(NUM_MUS).fill(false);
    flattenedArray[key] = true;
    setMusicPostTableShow(false);
    setMusicPostsOpen(flattenedArray);
  };

  // closes a soccer post and opens the soccer table
  const closeSoccerPost = () => {
    openSoccerTable();
  };

  // opens a soccer post by index in soccerPostsOpen
  const onClickSoccerPost = key => {
    var flattenedArray = Array(NUM_SOCC).fill(false);
    flattenedArray[key] = true;
    setSoccerPostTableShow(false);
    setSoccerPostsOpen(flattenedArray);
  };

  const openSoccerTable = () => {
    window.scrollTo(0, 0);
    closeAllPosts();
    setHomeTabShow(false);
    setNavDrawerOpen(false);
    setMusicPostTableShow(false);
    setSoccerPostTableShow(true);
  };

  const openMusicTable = () => {
    window.scrollTo(0, 0);
    closeAllPosts();
    setHomeTabShow(false);
    setNavDrawerOpen(false);
    setSoccerPostTableShow(false);
    setMusicPostTableShow(true);
  };

  return (
    <div className="App">
      <div className="background-div">
        {(isSoccerPostOpen || isMusicPostOpen) && (
          <BackButton
            onClosePost={isSoccerPostOpen ? closeSoccerPost : closeMusicPost}
            backNavPage={isSoccerPostOpen ? "Soccer" : "Music"}
          />
        )}

        <MinNav
          openNavDrawer={openNavDrawer}
          navDrawerOpen={navDrawerOpen}
          closeNavDrawer={closeNavDrawer}
          openHomeTab={openHomeTab}
          homeTabShow={homeTabShow}
          openSoccerTable={openSoccerTable}
          soccerPostTableShow={soccerPostTableShow}
          openMusicTable={openMusicTable}
          musicPostTableShow={musicPostTableShow}
          isSoccerPostOpen={isSoccerPostOpen}
          isMusicPostOpen={isMusicPostOpen}
        />

        <chakra.div
          backgroundColor="#fffef5"
          mt="none"
          w="88%"
          ml="auto"
          mr="auto"
          minHeight="100vh"
          height="100%"
          color="#000000"
          top="0"
          overflow="auto"
        >
          <Container width="100%" mr="auto" ml="auto" mb="13vh">
            {homeTabShow && <TabContainer tabTitle={"Home"} />}

            {soccerPostTableShow && (
              <SoccerPostTable
                onClickSoccerPost={onClickSoccerPost}
              ></SoccerPostTable>
            )}

            <SoccerPostsMapped
              soccerPostsOpenLegend={soccerPostsOpen}
              closeSoccerPost={closeSoccerPost}
            />

            {musicPostTableShow && (
              <MusicPostTable
                onClickMusicPost={onClickMusicPost}
              ></MusicPostTable>
            )}
            <MusicPostsMapped
              musicPostsOpenLegend={musicPostsOpen}
              closeMusicPost={closeMusicPost}
            />
          </Container>
        </chakra.div>
      </div>
    </div>
  );
};

export default AppUI;

/*
                <NavDrawer 
                    navDrawerOpen={navDrawerOpen}
                    closeNavDrawer={closeNavDrawer}
                    openHomeTab={openHomeTab}
                    homeTabShow={homeTabShow}
                    openSoccerTable={openSoccerTable}
                    soccerPostTableShow={soccerPostTableShow}
                    openMusicTable={openMusicTable}
                    musicPostTableShow={musicPostTableShow}
                />
*/

/*
                <Button
                    pos='fixed'
                    backgroundColor='#3c4759'
                    h='100vh'
                    w='2%'
                    disabled={navDrawerOpen}
                    onClick={openNavDrawer}
                    alignContent='center'
                    verticalAlign='center'
                    borderRadius='0'
                    _hover={{
                        backgroundColor: '#abbbcc',
                        color: '#3c4759'
                    }}>
                    <Icon fontSize='32' mt='30%' as={BiChevronRight} />
                </Button>
*/
