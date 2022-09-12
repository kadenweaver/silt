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

import MoviePostsMapped from "./components/movies/MoviePostsMapped";
import MoviePostTable from "./components/movies/MoviePostTable";
import { moviePostPreviewList } from "./components/movies/MoviePostContent"


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

  // movie keys
  const NUM_MOV = moviePostPreviewList?.length;
  const [moviePostTableShow, setMoviePostTableShow] = useState(false);
  const [moviePostsOpen, setMoviePostsOpen] = useState(
    Array(NUM_SOCC).fill(false)
  );

  const isMoviePostOpen = useMemo(
    () => moviePostsOpen.some(x => x === true),
    [moviePostsOpen]
  );

  // closes all posts in music, soccer, and movies
  const closeAllPosts = () => {
    setSoccerPostsOpen(Array(NUM_SOCC).fill(false));
    setMusicPostsOpen(Array(NUM_MUS).fill(false));
    setMoviePostsOpen(Array(NUM_MOV).fill(false));
  };

  const closeSoccerPostsTablesDrawer = () => {
    closeAllPosts();

    //close tables
    setSoccerPostTableShow(false);
    setMusicPostTableShow(false);
    setMoviePostTableShow(false);
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

  const onClickMoviePost = key => {
    var flattenedArray = Array(NUM_MOV).fill(false);
    flattenedArray[key] = true;
    setMoviePostTableShow(false);
    setMoviePostsOpen(flattenedArray);
  }

  const closeMoviePost = () => {
    openMovieTable();
  }

  const openSoccerTable = () => {
    window.scrollTo(0, 0);
    closeAllPosts();
    setHomeTabShow(false);
    setNavDrawerOpen(false);
    setMusicPostTableShow(false);
    setMoviePostTableShow(false);
    setSoccerPostTableShow(true);
  };

  const openMusicTable = () => {
    window.scrollTo(0, 0);
    closeAllPosts();
    setHomeTabShow(false);
    setNavDrawerOpen(false);
    setSoccerPostTableShow(false);
    setMoviePostTableShow(false);
    setMusicPostTableShow(true);
  };

  const openMovieTable = () => {
    window.scrollTo(0, 0);
    closeAllPosts();
    setHomeTabShow(false);
    setNavDrawerOpen(false);
    setSoccerPostTableShow(false);
    setMusicPostTableShow(false);
    setMoviePostTableShow(true);
  }

  return (
    <div className="App">
      <div className="background-div">
        {(isSoccerPostOpen || isMusicPostOpen || isMoviePostOpen) && (
          <BackButton
            onClosePost={isSoccerPostOpen ? closeSoccerPost : isMusicPostOpen ? closeMusicPost : closeMoviePost}
            backNavPage={isSoccerPostOpen ? "Soccer" : isMusicPostOpen ? "Music" : "Movies"}
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
          openMovieTable={openMovieTable}
          moviePostTableShow={moviePostTableShow}
          isSoccerPostOpen={isSoccerPostOpen}
          isMusicPostOpen={isMusicPostOpen}
          isMoviePostOpen={isMoviePostOpen}
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
              <SoccerPostTable onClickSoccerPost={onClickSoccerPost} />
            )}

            <SoccerPostsMapped
              soccerPostsOpenLegend={soccerPostsOpen}
              closeSoccerPost={closeSoccerPost}
            />

            {musicPostTableShow && (
              <MusicPostTable onClickMusicPost={onClickMusicPost} />
            )}
            <MusicPostsMapped
              musicPostsOpenLegend={musicPostsOpen}
              closeMusicPost={closeMusicPost}
            />

            {moviePostTableShow && (
              <MoviePostTable onClickMoviePost={onClickMoviePost} />
            )}

            <MoviePostsMapped
              moviePostsOpenLegend={moviePostsOpen}
              closeMoviePost={closeMoviePost}
            />
          </Container>
        </chakra.div>
      </div>
    </div>
  );
};

export default AppUI;
