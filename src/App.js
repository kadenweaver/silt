
import './App.css';
import React, { useState } from 'react';
import jumpy from './pictures/Jumpluff.jpg';
import SoccerPost from './components/soccer/SoccerPost'
import PostTable from "./components/soccer/PostTable";
import MusicPostTable from "./components/music/MusicPostTable";
import MusicPost from "./components/music/MusicPost";
import TabContainer from './components/TabContainer';
// soccer pictures 
import Kai from "./pictures/sadBoyKai.webp"
import FirstMatch from "./pictures/FirstMatch.jpg"
import SuperCup from "./pictures/SuperCup.jpeg"
import apChels from "./pictures/APChelsea.jpeg"
//
import MappedPost from './components/MappedPost';
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


const AppUI = () => {

    const [homeTabShow, setHomeTabShow] = useState(true)

    // nav drawer
    const [navDrawerOpen, setNavDrawerOpen] = useState(false)

    // soccer keys
    const NUM_SOCC = 4
    const [postTableShow, setPostTableShow] = useState(false)
    const [soccerPostsOpen, setSoccerPostsOpen] = useState(Array(NUM_SOCC).fill(false))

    // music keys
    const NUM_MUS = 9
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
                        <chakra.div className="sidebar-image-container"
                            w='100%'
                            h='20%'
                            mt='2%'
                            mr='auto'
                            ml='auto'
                            mb='30%'>
                            <Image h='180' display='block' mr='auto' ml='auto' src={jumpy}></Image>
                        </chakra.div>
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
                        <Button 
                            onClick={openHomeTab}
                            w='100%'
                            h='65px'
                            backgroundColor={homeTabShow ? '#e6eef5' : '#3c4759'}
                            color={homeTabShow ? '#3c4759' : 'white'}
                            _hover={homeTabShow ? 
                                {
                                    backgroundColor: '#e6eef5',
                                    color: '#3c4759'
                                } :
                                {
                                    backgroundColor: '#2f3847',
                                    color: 'white'
                                }
                            }
                            mr='auto'
                            ml= 'auto'
                            mb='none'
                            borderBottom={homeTabShow ? '2px solid #a3b7cc' : 'none'}
                            borderRadius='0'
                            leftIcon={<Icon as={BiHomeAlt}/>}>
                                Home
                        </Button>
                        <Button 
                            onClick={openSoccerTable}
                            w='100%'
                            h='65px'
                            backgroundColor={postTableShow ? '#e6eef5' : '#3c4759'}
                            color={postTableShow ? '#3c4759' : 'white'}
                            _hover={postTableShow ? 
                                {
                                    backgroundColor: '#e6eef5',
                                    color: '#3c4759'
                                } :
                                {
                                    backgroundColor: '#2f3847',
                                    color: 'white'
                                }
                            }
                            mr='auto'
                            ml= 'auto'
                            mb='none'
                            borderBottom={postTableShow ? '2px solid #a3b7cc' : 'none'}
                            borderTop={postTableShow ? '2px solid #a3b7cc' : 'none'}
                            borderRadius='0'
                            leftIcon={<Icon as={BiFootball}/>}>
                                Soccer
                        </Button>
                        <Button 
                            onClick={openMusicTable}
                            w='100%'
                            h='65px'
                            backgroundColor={musicPostTableShow ? '#e6eef5' : '#3c4759'}
                            color={musicPostTableShow ? '#3c4759' : 'white'}
                            _hover={musicPostTableShow ? 
                                {
                                    backgroundColor: '#e6eef5',
                                    color: '#3c4759'
                                } :
                                {
                                    backgroundColor: '#2f3847'
                                }
                            }
                            mr='auto'
                            ml='auto'
                            mb='none'
                            borderBottom={musicPostTableShow ? '2px solid #a3b7cc' : 'none'}
                            borderTop={musicPostTableShow ? '2px solid #a3b7cc' : 'none'}
                            borderRadius='0'
                            leftIcon={<Icon as={BiMusic}/>}>
                                Music
                        </Button>
                        <Button 
                            onClick={openMusicTable}
                            w='100%'
                            h='65px'
                            backgroundColor='#3c4759'
                            color='white'
                            _hover={
                                {
                                    backgroundColor: '#2f3847',
                                    color: 'white'
                                }
                            }
                            mr='auto'
                            ml='auto'
                            mb='none'
                            border='none'
                            borderRadius='0'
                            leftIcon={<Icon as={BiCameraMovie}/>}>
                                Movies
                        </Button>
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
                 /* max-height: 100vh; */
                  top='0'
                  overflow='auto'>
                <Container 
                    width='100%'
                    mr='auto'
                    ml='auto'
                    mb='13vh'>

                    {homeTabShow && <TabContainer tabTitle={'Home'}/>}              

                    {postTableShow && <PostTable onClickSoccerPost={onClickSoccerPost}></PostTable>}
                    {soccerPostsOpen[0] && (
                        <SoccerPost
                            onClosePost={closeSoccerPost}
                            postTitle={"Chelsea Are Champions Of Europe"} 
                            postDate={"May 31, 2021"} 
                            postImage={apChels} 
                            backNavPage='Soccer'
                            textHeader="The Blues write a new chapter in their legacy as European giants, meeting expectations based on massive summer signings"
                            postText={
                                [
                                    "After negating City's offense in the CL Final, Chelsea pose an intimidating threat going forward. They can bank on a depth of young talent reinforced by proven professionals marked by consistent quality. Despite an otherwise tumultous season end, Chelsea's light at the end of the tunnel is shining brighter than ever.",                                    
                                    "Homegrown starlets Mason Mount and Reece James will likely stay at the club as long as found talent Ben Chilwell, Christian Pulisic, Timo Werner, and Kai Havertz, especially since the group has proven they can succeed at the highest level.",
                                    "We were looking forward to this game so much that we decided to guess the Chelsea starting lineup"
                                ]
                            }
                        />
                    )}
                    {soccerPostsOpen[1] && (
                        <SoccerPost 
                            onClosePost={closeSoccerPost}
                            postTitle={"Chelsea Are Super Champions Of Europe"} 
                            postDate={"Aug 17, 2021"} 
                            postImage={SuperCup} 
                            backNavPage='Soccer'
                            textHeader="Tuchel's Men Edged Past The EL Champions 6-5 On Penalties, Though The Side Appeared Polished And In Control"
                            postText={
                                [
                                    "What better way to troll Chelsea fans than to sub Kepa Arrizabalaga on for a last minute \"penalties specialist\" appearance in the UEFA Super Cup. Somehow it worked: the Spanish keeper blocked spot kicks from Aissa Mandi and Raul Albiol, almost stopping a third with a unique strategy that involved diving to his right all but once.", 
                                    "Hakim Ziyech's early goal wasn't enough to secure a victory for Chelsea. The Algerian struck in the first half, arching the ball over the keeper into the opposite side of the net. Kai Havertz provided the assist after being played in brilliantly on the left side by an inspired Marcos Alonso pass.  Gerard Moreno equalized 30 minutes into the second half on a sharply worked passing play by the Spanish side. Moreno found Boulaye Dia near the goal line and made the most out of the return pass from his Senegalese teammate.",
                                    "What proceeded was a bizarre penalty shootout-- it certaintly started that way with Kepa's substitution late in extra time. Chelsea shot first, but fell behind immediately with a weak effort from Havertz of all players. Marcos Alonso slipped at the spot during his shot in proper John Terry nightmare fashion, and sudden death saw Toni Rudiger step up and dispatch an emphatic finish."
                                ]
                            }
                        />
                    )}
                    {soccerPostsOpen[2] && (
                        <SoccerPost 
                            onClosePost={closeSoccerPost}
                            postTitle={"Chelsea Shine In Opening Day Win"} 
                            postDate={"August 18, 2021"} 
                            postImage={FirstMatch} 
                            backNavPage='Soccer'
                            textHeader='Chelsea Took No Prisoners Against Palace, Scoring Two Before Half And Sealing The Win With A Third Soon After The Break'
                            postText={
                                [
                                    "Soccer has evolved to the point where you have to hold your breath on the first day of the season, even when the opponent is Crystal Palace, even when your team has just won the Champion's League. The spirit at Chelsea is clearly one that burns brightly enough to dissapate that cloud of doubt. And with City dropping points so early in the season, there's nothing but high hopes for the Blues.", 
                                    "For the opening half hour this match looked like one of those stalemates caused by the smaller team's defensive ridgidity. Chelsea kept the Eagles in their own defensive third but failed to find the back of the net. I THINK Mason Mount won the freekick at the edge of the 18 that led to Chelsea's first goal. I know for a fact that I called Marcos Alonso scoring when I saw him lined up behind the ball on the right corner. That guy must practice that every single day, Vicente Guaita was left glued to the spot as he watched the free kick slam into the top right corner of his goal.",
                                    "Christian Pulisic struck next, falling over as his attempt skipped off of the outstretched leg of Cheikhou Kouyate and over a prone Guaita. Why is he always falling when he scores? Mount worked an incredible one-two with Azpilicueta on the right flank to open himself up for the cross that led to Pulisic's shot. We went into the locker room at half feeling positive about the result, but there's a certain saying about this type of lead. Luckily, Trevor Chalobah scored a long-raged effort on his debut to put Chelsea three ahead. What a way to start off your senior team run at the outset of a season; it's nice to see Tuchel bringing along academy players."
                                ]
                            }
                        />
                    )}
                    {soccerPostsOpen[3] && (
                        <SoccerPost 
                            onClosePost={closeSoccerPost} 
                            postTitle={"Chelsea Comback Thwarted In Late Stages By Clinical Madrid"} 
                            postDate={"April 13, 2022"} 
                            postImage={Kai} 
                            backNavPage='Soccer'
                            textHeader="Despite An Incredible Second Leg Victory, Chelsea CL Campaign Ended By Madrid Goal In Extra Time"
                            postText={
                                [
                                    "Pure heartbreak, anyways, has it been a while since I last blogged about Chelsea?", "It's tough to be mad at the current squad with everything that's happened to Chelsea in the past year. Our dream team fell apart with injuries to Reece James and Ben Chilwell, in fact, you can probably see where we lost hold of the prem shortly after they got injured.", 
                                    "Then you have our defeat to Liverpool in the League Cup, losing our owner due to his part in the war in Ukraine, and now this tragic defeat. Chelsea players and fans alike seem to be relishing still in this last season before...well...who knows what will happen? There's plenty to celebrate despite the hard times.","It's a mix of factors lifting Chelsea spirits, multiple reasons to stay hopeful that if just the right things happen, Chelsea might not only survive a change in ownership, but thrive through it.", 
                                    "For once, our position in the league seems secure, even though we dropped first place in early December. A campaign void of many losses has supported a steady view from third, from which we watch Arsenal, United, West Ham, and Tottenham claw for fourth. Touch wood, but it looks unlikely that Chelsea will have to worry about playing CL football next year, especially now that we can turn our almost complete attention to the remaining 8 matches.", 
                                    "This season also still represents the opportunity for silverware, with an FA Cup semifinal against Crystal Palace coming later this month. We could face a distracted Liverpool or City side in the final if we advance.",
                                    "Thanks to a sharp coach and world class players, Chelsea have felt like a top team this season, like the European champions we are. Next season will surely demand new players, namely some centerbacks and a left fullback, but it's a joy to watch the current Chelsea squad work their magic. If our new owners can keep our manager and some of the club's key players, I don't think anyone will forget when we took it to Real Madrid in their own stadium."
                                ]
                            }   
                        /> 
                    )}



                    {musicPostTableShow && <MusicPostTable onClickMusicPost={onClickMusicPost} ></MusicPostTable> }
                    {musicPostsOpen[0] && (
                        <MusicPost 
                            onClosePost={closeMusicPost}
                            postTitle="Groove Out: Jim E Stack Remixes Perfume Genius's 'Without You' To Funk EDM Perfection"
                            postDate='June 23, 2021'
                            playerLink='https://open.spotify.com/embed/track/0WOsGA4a7Rio2t0osKmYVa'
                            postText={['I\'ve been getting into Perfume Genius more after seeing his album, Set My Heart on Fire Immediately, get such high ratings last year. Many of the tracks from the original album are lively and intricately woven, my favorite being "On The Floor". Two of the better tracks off the ensuing remix album are A.G. Cook\'s light, static take on "Describe", and this bouncy rhythm switch for "Without You".']}
                            backNavPage='Music'>
                        </MusicPost>
                    )}
                    {musicPostsOpen[1] && (
                        <MusicPost 
                            onClosePost={closeMusicPost}
                            postTitle='Cartier God and Bladee: Who Invented Volume Throttling?'
                            postDate='June 23, 2021'
                            playerLink='https://open.spotify.com/embed/track/7tlu2KkAfOaCZMpDEQ8Npy?si=Qnjv-zJ6TY-gCMiQFzzBYg'
                            postText={['Spotify keeps pushing this song on me, I think their bot has detected a slight interest in Bladee. It\'s a pretty weak song but I do like that they used a volume wobble through the entirety of the track, it invokes a crystal like hollowness. Hold on, I just found out Cartier God is a SoundCloud producer, does that make Bladee a SoundCloud rapper? Sad Boys 4 lyfe.']}
                            backNavPage='Music'>
                        </MusicPost>
                    )}
                    {musicPostsOpen[2] && (
                        <MusicPost 
                            onClosePost={closeMusicPost}                            
                            postTitle="Staples Released An Album Of Mellow Sampled Raps, Finally Living Up To His Potential"
                            postDate='August 20, 2021'
                            playerLink='https://open.spotify.com/embed/playlist/2gymXGRl1CLdN1mAdyZtIE?si=lbiG8wJ3TAuGskheN2jQng&dl'
                            postText={[
                                'Vince Staples is a rare example of an artist that has plenty of powerful singles without having released a solid album. I first started listening to him with the track "Norf Norf" from his debut album, Summertime \'06. The California native introduced himself there with a unique identity, something he maintained through his subsequent works. Memorable opening lines like \"Bitch, you thirsty? Please, grab a Sprite\" and clear allusions to his adolescence in Long Beach would stick from there on out.',
                                'These elements hinted at a rapper with great potential:  someone who has a story to tell, but doesn\'t take themselves seriously enough to shy away from the corny side of rap. What followed was a couple of club singles and not much else. Staples released "Big Fish" and "FUN!", two colossal hits that still let him down in terms of overall acclaim. I watched Vince open for Tyler, the Creator in February of 2018, soon thereafter the rapper started a pity party GoFundMe to address criticisms of his live performances. Other tracks like "745" and "Yeah Right" weren\'t enough to supplement his hits, and his delivery in concert was lackluster at best.',
                                'In the three years since his last album, Staples has clearly dedicated more time than ever to his eponymous work. With producer Kenny Beats drafting a somber yet curious soundscape for the album, Staples rhymes with an experienced certainty, detailing his life from a more mature perspective. "This is another take on myself that I might not have had before," claims the Long Beach native. With the help of Beats, as well as vocals from producer Reske and singer Fousheé, he can be confident that this will stand as his most complete work yet.'
                            ]}
                            backNavPage='Music'>
                        </MusicPost>
                    )}
                    {musicPostsOpen[3] && (
                        <MusicPost 
                            onClosePost={closeMusicPost}
                            postTitle='Up And Coming John Glacier Makes Bedroom Hop'
                            postDate='August 20, 2021'
                            playerLink='https://open.spotify.com/embed/track/5TaJDVZLSreKLg31wRR284?si=U0ccOg31S0CHxJNK4jF2yQ&dl'
                            postText={['Not much is known about John Glacier save her online persona. The artist boasts no Wikipedia page, and only one interview pops up on Google. The rest is left to be interpreted from her SoundCloud and Instagram accounts. Nevertheless, Glacier is an exciting prospect in the music world. The UK artist is supposed to release an upcoming collaboration with producer Vegyn, whose signature muffled touch also appears on Icing. Together they should combine to create plenty of Bedroom Hop, a play on the pop genre made popular in the late 2010s, characterized by lofi production and overprocessed sounds.']}
                            backNavPage="Music">
                        </MusicPost>
                    )}
                    {musicPostsOpen[4] && (
                        <MusicPost 
                            onClosePost={closeMusicPost} 
                            postTitle={"Lorde's Airy Pop Hits Hard At Times"}
                            postDate={"August 23, 2021"} 
                            playerLink={'https://open.spotify.com/embed/track/6FE9EXi8TYg09hR4xv5PWJ?si=e1s1vt2zTcmM0Hj9_Gn36g&dl'} 
                            postText={["Lorde is really good", "blah blah blah just wanna see if this works"]}
                            backNavPage={"Music"}
                        />
                    )}
                    {musicPostsOpen[5] && (
                        <MusicPost 
                            onClosePost={closeMusicPost}
                            postTitle={"Polachek Releases Baby Sound Single With Accompanying Video"}
                            postDate={"August 30, 2021"}
                            playerLink={'https://open.spotify.com/embed/track/1rYABrDmfqVmJMwaNJBUUb?si=A9_0SzkpRoujJzQnXfRr2g&dl'}
                            postText={["It seemed like just last year Caroline Polachek had graduated from anonymous Chairlift band member to full fledged pop goddess, blessing us with her album Pang and the iconic music video for 'So Hot You're Hurting My Feelings'. Well that DID happen last year, but Caroline is already at it again with her new single, 'Bunny Is A Rider'. The music video picks up right where 'So Hot' left off, cryptically portraying Caroline in a maze of boxes, evading a minotaur like creature with a teleportation device."]}
                            backNavPage={"Music"}
                        />
                    )}
                    {musicPostsOpen[6] && (
                        <MusicPost 
                            onClosePost={closeMusicPost}
                            postTitle={"Twigs Makes a Mixtape That Sparkles Without Reinventing Much of Anything"}
                            postDate={"January 29, 2022"}
                            playerLink={'https://open.spotify.com/embed/track/6EeuY84I1Q3UJvpPN6iSzw?utm_source=generator'}
                            postText={["Lotta campy trap shit on this one. Go twigs, go dance in front of that random building in London. "]}
                            backNavPage={"Music"}
                        />
                    )}
                    {musicPostsOpen[7] && (
                        <MappedPost 
                            onClosePost={closeMusicPost}
                            postTitle={"Just Some Random Songs I Found"} 
                            postDate={"April 13, 2022"}
                            backNavPage={"Music"}
                            componentMap={
                                [
                                    {type: 'header-4', header: 'Magdalena Bay Is Okay I Guess', styled: true},
                                    {type: 'yt', ytLink: 'https://www.youtube.com/embed/dXLCHvRsgRQ', ytLinkTitle: 'Magdalena Bay All Day' },
                                    {type: 'text', text: "Aye"},
                                    {type: 'header-4', header: "Tinashe Knows It, Babe", styled: true},
                                    {type: 'yt', ytLink: 'https://www.youtube.com/embed/KI-IiIt-xpg?t=7', ytLinkTitle: 'knowsItBabe'}
                                ]
                            }
                        />
                    )}
                    {musicPostsOpen[8] && (
                        <MusicPost 
                            onClosePost={closeMusicPost}
                            postTitle={"Ives Packs an Album Full of Unabashedly Unique Pop"} 
                            postDate={"June 16, 2022"}
                            playerLink={'https://open.spotify.com/embed/playlist/0Xr8FKd7WGtUcZqdwMRgpz?utm_source=generator&theme=0'}
                            postText={
                                [
                                    "The above playlist is meant to celebrate the wonderful frontrunners from Grace Ives' new album, and the music videos that accompany them. Hopefully soon we get a music video for Burn Bridges :)",
                                    "My first Ives encounter was on her freshman effort, Icing on the Cake, which undoubtedly holds up, but seemed as though it could be a one off dance hit from a budding artist. The richness of her sound has expanded meteorically-- on Janky Star she mastered not only the driving force of the dance notes, but also the aura of the spaces in between.",
                                    "On a record where it's clear she collects inspiration from many different sources-- her voice cutting with Lana-like silkiness, lighthearted indie pop production rem·i·nis·cent of Passion Pit, LCD, The New Pornographers --she also brings a defined personality and offbeat swagger that demand appreciation.",
                                    "Her music videos sometimes don't have a quality option beyond 480p. I think that sums it up pretty well."
                                ]
                            }
                            backNavPage={"Music"}
                        />
                    )}
                </Container>
              </chakra.div>
            </div>
        </div>
    );
}

export default AppUI;
