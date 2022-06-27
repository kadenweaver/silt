
import './App.css';
import React, { useState } from 'react';
import jumpy from './pictures/Jumpluff.jpg';
import SoccerPostTable from "./components/soccer/SoccerPostTable";
import MusicPostTable from "./components/music/MusicPostTable";
import TabContainer from './components/TabContainer';

import { 
    Drawer, 
    DrawerOverlay, 
    DrawerContent, 
    Button, 
    Icon,
    Container,
    chakra,
    Image
 } from '@chakra-ui/react'
import { 
    BiX,
    BiChevronRight, 
    BiMusic, 
    BiHomeAlt, 
    BiFootball, 
    BiCameraMovie,
} from 'react-icons/bi';

import SoccerPostsMapped from './components/soccer/SoccerPostsMapped'
import { soccerPreviewContentList } from './components/soccer/SoccerPostContent'

import MusicPostsMapped from './components/music/MusicPostsMapped'
import { musicPostPreviewList } from './components/music/MusicPostContent';

import { DrawerButton } from './components/DrawerButton'

const AppUI = () => {

    const [homeTabShow, setHomeTabShow] = useState(true)

    // nav drawer
    const [navDrawerOpen, setNavDrawerOpen] = useState(false)

    // soccer keys
    const NUM_SOCC = soccerPreviewContentList?.length
    const [postTableShow, setPostTableShow] = useState(false)
    const [soccerPostsOpen, setSoccerPostsOpen] = useState(Array(NUM_SOCC).fill(false))

    // music keys
    const NUM_MUS = musicPostPreviewList?.length
    const [musicPostTableShow, setMusicPostTableShow] = useState(false)
    const [musicPostsOpen, setMusicPostsOpen] = useState(Array(NUM_MUS).fill(false))


    // closes all posts in music and soccer 
    const closeAllPosts = () => {
        setSoccerPostsOpen(Array(NUM_SOCC).fill(false))
        setMusicPostsOpen(Array(NUM_MUS).fill(false))
    }

    const closeSoccerPostsTablesDrawer = () => {
        closeAllPosts()

        //close tables
        setPostTableShow(false)
        setMusicPostTableShow(false)
        setHomeTabShow(false)

        closeNavDrawer()
    }

    // nav drawer open/close
    const openNavDrawer = () => {
        setNavDrawerOpen(true)
    }
    const closeNavDrawer = () => {
        setNavDrawerOpen(false)
    }

    // closes everything else and opens the home tab
    const openHomeTab = () => {
        closeSoccerPostsTablesDrawer()
        setHomeTabShow(true)
    }

    // closes a music post by opening the music table
    const closeMusicPost = () => {
        openMusicTable()
    }

    // open music post by index in musicPostsOpen
    const onClickMusicPost = (key) => {
        window.scrollTo(0, 0)
        var flattenedArray = Array(NUM_MUS).fill(false)
        flattenedArray[key] = true
        setMusicPostTableShow(false)
        setMusicPostsOpen(flattenedArray)
    }


    // closes a soccer post and opens the soccer table
    const closeSoccerPost = () => {
       openSoccerTable()
    }
    
    // opens a soccer post by index in soccerPostsOpen
    const onClickSoccerPost = (key) => {
        var flattenedArray = Array(NUM_SOCC).fill(false)
        flattenedArray[key] = true
        setPostTableShow(false)
        setSoccerPostsOpen(flattenedArray) 
    }

    const openSoccerTable = () => {
        window.scrollTo(0, 0)
        closeAllPosts()
        setHomeTabShow(false)
        setNavDrawerOpen(false)
        setMusicPostTableShow(false)
        setPostTableShow(true)
    }

    const openMusicTable = () => {
        window.scrollTo(0, 0)
        closeAllPosts()
        setHomeTabShow(false)
        setNavDrawerOpen(false)
        setPostTableShow(false)
        setMusicPostTableShow(true)
    }

    return (
         <div className="App">
            <div className="background-div">

             {!navDrawerOpen && (
                 <Button
                    pos='fixed'
                    backgroundColor='#3c4759'
                    h='100vh'
                    w='2%'
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
             )}
              <Drawer 
                isOpen={navDrawerOpen} 
                placement='left' 
                size='xs'
                onClose={closeNavDrawer}
                closeOnOverlayClick
                closeOnEsc>
                <DrawerOverlay/>
                <DrawerContent backgroundColor='#e6eef5'>
                    <Container width='100%' mr='auto' ml='auto' p='0'>
                        <Button 
                            pos='absolute' 
                            top='0'
                            right='0'
                            overflow='hidden'
                            size='sm' 
                            bg='#e6eef5'
                            borderRadius='5% 0 0 5%'
                            color='#3c4759'
                            fontSize='28'
                            _focus={{border: 'none'}}
                            _hover={{
                                fontSize: '30'
                            }}
                            onClick={() => closeNavDrawer()}>
                            <Icon as={BiX} />
                        </Button>
                        <chakra.div className="sidebar-image-container"
                            w='100%'
                            h='20%'
                            mt='2%'
                            mr='auto'
                            ml='auto'
                            mb='30%'>
                            <Image h='180' display='block' mr='auto' ml='auto' src={jumpy}></Image>
                        </chakra.div>
                        <DrawerButton
                          buttonTitle='Home'
                          openTab={openHomeTab}
                          active={homeTabShow}
                          icon={BiHomeAlt}
                        />
                        <DrawerButton
                          buttonTitle='Soccer'
                          openTab={openSoccerTable}
                          active={postTableShow}
                          icon={BiFootball}
                        />
                        <DrawerButton
                          buttonTitle='Music'
                          openTab={openMusicTable}
                          active={musicPostTableShow}
                          icon={BiMusic}
                        />
                        <DrawerButton
                          buttonTitle='Movies'
                          icon={BiCameraMovie}
                        />
                    </Container>
                </DrawerContent>
              </Drawer>
              <chakra.div 
                  backgroundColor='#fffef5'
                  mt='none'
                  w='88%'
                  ml='auto'
                  mr='auto'
                  minHeight='100vh'
                  height='100%'
                  color='#000000'
                  top='0'
                  overflow='auto'>
                <Container 
                    width='100%'
                    mr='auto'
                    ml='auto'
                    mb='13vh'>

                    {homeTabShow && <TabContainer tabTitle={'Home'}/>}              

                    {postTableShow && <SoccerPostTable onClickSoccerPost={onClickSoccerPost}></SoccerPostTable>}

                    <SoccerPostsMapped 
                      soccerPostsOpenLegend={soccerPostsOpen}
                      closeSoccerPost={closeSoccerPost}
                    />

                    {musicPostTableShow && <MusicPostTable onClickMusicPost={onClickMusicPost} ></MusicPostTable> }
                    <MusicPostsMapped
                      musicPostsOpenLegend={musicPostsOpen}
                      closeMusicPost={closeMusicPost}
                    />
                </Container>
              </chakra.div>
            </div>
        </div>
    );
}

export default AppUI;
