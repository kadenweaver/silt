import "./App.css";
import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SoccerPostTable from "./components/soccer/SoccerPostTable";
import MusicPostTable from "./components/music/MusicPostTable";
import { Container, chakra } from "@chakra-ui/react";

import HomePostsTable from "./components/home/HomePostTable";
import { homePostPreviewList } from "./components/home/HomePostContent";

import { soccerPreviewContentList } from "./components/soccer/SoccerPostContent";

import { musicPostPreviewList } from "./components/music/MusicPostContent";

import MoviePostTable from "./components/movies/MoviePostTable";
import { moviePostPreviewList } from "./components/movies/MoviePostContent";

import GamesPostTable from "./components/games/GamesPostTable";
import { gamesPostPreviewList } from "./components/games/GamesPostContent";

import BackButton from "./components/BackButton";
import { MinNav } from "./components/MinNav";

const AppUI = () => {
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

  // games keys
  const NUM_GAME = gamesPostPreviewList?.length;
  const [gamesPostTableShow, setGamesPostTableShow] = useState(false);
  const [gamesPostsOpen, setGamesPostsOpen] = useState(
    Array(NUM_GAME).fill(false)
  );

  const isGamesPostOpen = useMemo(
    () => gamesPostsOpen.some(x => x === true),
    [gamesPostsOpen]
  );

  // home keys
  const NUM_HOME = homePostPreviewList?.length;
  const [homePostTableShow, setHomePostTableShow] = useState(true);
  const [homePostsOpen, setHomePostsOpen] = useState(
    Array(NUM_HOME).fill(false)
  );

  const isHomePostOpen = useMemo(
    () => homePostsOpen.some(x => x),
    [homePostsOpen]
  );

  // closes all posts in music, soccer, and movies
  const closeAllPosts = () => {
    setSoccerPostsOpen(Array(NUM_SOCC).fill(false));
    setMusicPostsOpen(Array(NUM_MUS).fill(false));
    setMoviePostsOpen(Array(NUM_MOV).fill(false));
    setGamesPostsOpen(Array(NUM_GAME).fill(false));
    setHomePostsOpen(Array(NUM_HOME).fill(false));
  };

  // nav drawer open/close
  const openNavDrawer = () => {
    setNavDrawerOpen(true);
  };
  const closeNavDrawer = () => {
    setNavDrawerOpen(false);
  };

  // closes a music post by opening the music table
  const closeMusicPost = () => {
    openMusicTable();
  };

  const onClickPost = (key, numPosts, tableFunc, postFunc) => {
    window.scrollTo(0, 0);
    var flattenedArray = Array(numPosts).fill(false);
    flattenedArray[key] = true;
    tableFunc(false);
    postFunc(flattenedArray);
  };

  // open music post by index in musicPostsOpen
  const onClickMusicPost = key => {
    onClickPost(key, NUM_MUS, setMusicPostTableShow, setMusicPostsOpen);
  };

  // closes a soccer post and opens the soccer table
  const closeSoccerPost = () => {
    openSoccerTable();
  };

  // opens a soccer post by index in soccerPostsOpen
  const onClickSoccerPost = key => {
    onClickPost(key, NUM_SOCC, setSoccerPostTableShow, setSoccerPostsOpen);
  };

  const closeMoviePost = () => {
    openMovieTable();
  };

  const onClickMoviePost = key => {
    onClickPost(key, NUM_MOV, setMoviePostTableShow, setMoviePostsOpen);
  };

  const closeGamesPost = () => {
    openGamesTable();
  };

  const onClickGamesPost = key => {
    onClickPost(key, NUM_GAME, setGamesPostTableShow, setGamesPostsOpen);
  };

  const closeHomePost = () => {
    openHomeTable();
  };

  const onClickHomePost = key => {
    onClickPost(key, NUM_HOME, setHomePostTableShow, setHomePostsOpen);
  };

  const closePostsAndTables = () => {
    window.scrollTo(0, 0);
    closeAllPosts();
    setNavDrawerOpen(false);
    setMusicPostTableShow(false);
    setMoviePostTableShow(false);
    setSoccerPostTableShow(false);
    setGamesPostTableShow(false);
    setHomePostTableShow(false);
  };

  const openHomeTable = () => {
    closePostsAndTables();
    setHomePostTableShow(true);
  };

  const openSoccerTable = () => {
    closePostsAndTables();
    setSoccerPostTableShow(true);
  };

  const openMusicTable = () => {
    closePostsAndTables();
    setMusicPostTableShow(true);
  };

  const openMovieTable = () => {
    closePostsAndTables();
    setMoviePostTableShow(true);
  };

  const openGamesTable = () => {
    closePostsAndTables();
    setGamesPostTableShow(true);
  };

  const closePost = isHomePostOpen
    ? closeHomePost
    : isSoccerPostOpen
    ? closeSoccerPost
    : isMusicPostOpen
    ? closeMusicPost
    : isGamesPostOpen
    ? closeGamesPost
    : closeMoviePost;

  const backButtonPageText = isHomePostOpen
    ? "Home"
    : isSoccerPostOpen
    ? "Soccer"
    : isMusicPostOpen
    ? "Music"
    : isGamesPostOpen
    ? "Games "
    : "Movies";

  return (
    <Router>
      <div className="App">
        <div className="background-div">

            <BackButton
              onClosePost={closePost}
              backNavPage={backButtonPageText} />


          <MinNav
            openNavDrawer={openNavDrawer}
            navDrawerOpen={navDrawerOpen}
            closeNavDrawer={closeNavDrawer}
            openHomeTab={openHomeTable}
            homeTabShow={homePostTableShow}
            openSoccerTable={openSoccerTable}
            soccerPostTableShow={soccerPostTableShow}
            openMusicTable={openMusicTable}
            musicPostTableShow={musicPostTableShow}
            openMovieTable={openMovieTable}
            moviePostTableShow={moviePostTableShow}
            isSoccerPostOpen={isSoccerPostOpen}
            isMusicPostOpen={isMusicPostOpen}
            isMoviePostOpen={isMoviePostOpen}
            openGamesTable={openGamesTable}
            gamesPostTableShow={gamesPostTableShow}
            isGamesPostOpen={isGamesPostOpen}
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
              <Switch>
                <Route path="/soccer">
                  <SoccerPostTable onClickSoccerPost={onClickSoccerPost} />
                </Route>
                <Route path="/music">
                  <MusicPostTable onClickMusicPost={onClickMusicPost} />
                </Route>
                <Route path="/movies">
                  <MoviePostTable onClickMoviePost={onClickMoviePost} />
                </Route>
                <Route path="/games">
                  <GamesPostTable onClickGamesPost={onClickGamesPost} />
                </Route>
                <Route path="/">
                  <HomePostsTable onClickHomePost={onClickHomePost} />
                </Route>
              </Switch>
            </Container>
          </chakra.div>
        </div>
      </div>
    </Router>
  );
};

export default AppUI;

