
import './App.css';
import React, {Component} from 'react';
import jumpy from './Jumpluff.jpg';
import { Container, Table, Button } from 'semantic-ui-react';
import ChelseaPost from './ChelseaPost';
import PostTable from "./PostTable";
import SuperCupPost from "./SuperCupPost";
import MusicPostTable from "./MusicPostTable";
import PerfumePost from "./PerfumePost";
import CartierPost from "./CartierPost";
import VincePost from "./VincePost";
import FirstMatchPost from "./FirstMatchPost";
import GlacierPost from "./GlacierPost";
import MusicPost from "./MusicPost";

const defaultState = {
    postTableShow: false,
    postShow: false,
    musicPostShow: false,
    musicPostTableShow: false,
    perfumePostShow: false,
    superCupPostShow: false,
    firstMatchPostShow: false,
    vincePostShow: false,
    cartierPostShow: false,
    glacierPostShow: false,
    lordePostShow: false
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {postTableShow: true, postShow: false, musicPostShow: false, musicPostTableShow: false, perfumePostShow: false, cartierPostShow: false, superCupPostShow: false, firstMatchPostShow: false, vincePostShow: false, glacierPostShow: false, lordePostShow: false, carolinePostShow: false};
    }

    render() {
        const {postTableShow, postShow, perfumePostShow, musicPostTableShow, cartierPostShow, superCupPostShow, firstMatchPostShow, vincePostShow, glacierPostShow, lordePostShow, carolinePostShow} = this.state;
        return (
         <div className="App">
            <div className="background-div">
              <div className="sidebar">
                <Container className="sidebar-container">
                    <div className="sidebar-image-container">
                        <img className="sidebar-image" src={jumpy}></img>
                    </div>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell> Map</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Button onClick={this.onClosePost}>Soccer</Button>
                        </Table.Row>
                        <Table.Row>
                            <Button onClick={this.onOpenMusicTable}>Music</Button>
                        </Table.Row>
                    </Table.Body>
                </Container>
              </div>
              <div className="center-div">
                <Container className="post-container">
                    {postTableShow && <PostTable onClickPost={this.onClickPos} onClickSuperPost={this.onClickSuperPos} onClickFirstMatchPost={this.onClickFirstMatchPost}></PostTable>}
                    {postShow && <ChelseaPost onClosePost={this.onClosePost}></ChelseaPost>}
                    {superCupPostShow && <SuperCupPost onClosePost={this.onClosePost}></SuperCupPost>}
                    {firstMatchPostShow && <FirstMatchPost onClosePost={this.onClosePost}></FirstMatchPost>}
                {musicPostTableShow && <MusicPostTable onClickPost={this.onClickMusPos} onClickCartPost={this.onClickCartPost} onClickVincePost={this.onClickVincePost} onClickGlacierPost={this.onClickGlacierPost} onClickMusicPost={this.onClickMusicPost} ></MusicPostTable> }
                    {vincePostShow && <VincePost onClosePost={this.onCloseMusicPost}></VincePost>}
                    {perfumePostShow && <PerfumePost onClosePost={this.onCloseMusicPost}></PerfumePost>}
                    {cartierPostShow && <CartierPost onClosePost={this.onCloseMusicPost}></CartierPost>}
                    {glacierPostShow && <GlacierPost onClosePost={this.onCloseMusicPost}></GlacierPost>}
                    {lordePostShow && <MusicPost onClosePost={this.onCloseMusicPost} postTitle={"Lorde's Airy Pop Hits Hard At Times"}
            postDate={"August 23, 2021"} playerLink={'https://open.spotify.com/embed/track/6FE9EXi8TYg09hR4xv5PWJ?si=e1s1vt2zTcmM0Hj9_Gn36g&dl'} postText={["Lorde is really good", "blah blah blah just wanna see if this works"]}></MusicPost>}
                    {carolinePostShow && <MusicPost onClosePost={this.onCloseMusicPost}
                                                    postTitle={"Polachek Releases Baby Sound Single With Accompanying Video"}
                                                    postDate={"August 30, 2021"}
                                                    playerLink={'https://open.spotify.com/embed/track/1rYABrDmfqVmJMwaNJBUUb?si=A9_0SzkpRoujJzQnXfRr2g&dl'}
                                                    postText={["It seemed like just last year Caroline Polachek had graduated from anonymous Chairlift band member to full fledged pop goddess, blessing us with her album Pang and the iconic music video for 'So Hot You're Hurting My Feelings'. Well that DID happen last year, but Caroline is already at it again with her new single, 'Bunny Is A Rider'. The music video picks up right where 'So Hot' left off, cryptically portraying Caroline in a maze of boxes, evading a minotaur like creature with a teleportation device."]}
                                        >
                                        </MusicPost>}
                </Container>
              </div>
            </div>
        </div>
      );
    }

    onClickPos = () => {
        var stateRefresh = {postShow: false, postTableShow: false, musicPostShow: false, musicPostTableShow: false, perfumePostShow: false, cartierPostShow: false, superCupPostShow: false, firstMatchPostShow: false};
        stateRefresh.postShow = true;
        this.setState(stateRefresh);
    }
    
    onClickSuperPos = () => {
        var stateRefresh = {postShow: false, postTableShow: false, musicPostShow: false, musicPostTableShow: false, perfumePostShow: false, cartierPostShow: false, superCupPostShow: false, firstMatchPostShow: false};
        stateRefresh.superCupPostShow = true;
        this.setState(stateRefresh);
    }
    
    onClickFirstMatchPost = () => {
        var stateRefresh = {postShow: false, postTableShow: false, musicPostShow: false, musicPostTableShow: false, perfumePostShow: false, cartierPostShow: false, superCupPostShow: false, firstMatchPostShow: false};
        stateRefresh.firstMatchPostShow = true;
        this.setState(stateRefresh);
    }

    onClosePost = () => {
        var stateRefresh = {postShow: false, postTableShow: false, musicPostShow: false, musicPostTableShow: false, perfumePostShow: false, cartierPostShow: false, superCupPostShow: false, firstMatchPostShow: false};
        stateRefresh.postTableShow = true;
        this.setState(stateRefresh);
    }

    onCloseMusicPost = () => {
        debugger;
        var stateRefresh = {postShow: false, postTableShow: false, musicPostShow: false, musicPostTableShow: false, perfumePostShow: false, cartierPostShow: false, vincePostShow: false, glacierPostShow: false, lordePostShow: false, carolinePostShow: false};
        stateRefresh.musicPostTableShow = true;
        this.setState(stateRefresh);
    }

    onClickMusPos = () => {
        var stateRefresh = {postShow: false, postTableShow: false, musicPostShow: false, musicPostTableShow: false, perfumePostShow: false, cartierPostShow: false};
        stateRefresh.perfumePostShow = true;
        this.setState(stateRefresh);
    }
    onClickVincePost = () => {
        var stateRefresh = {postShow: false, postTableShow: false, musicPostShow: false, musicPostTableShow: false, perfumePostShow: false, cartierPostShow: false, vincePostShow: false};
        stateRefresh.vincePostShow = true;
        this.setState(stateRefresh);
    }
    onClickCartPost = () => {
        var stateRefresh = {postShow: false, postTableShow: false, musicPostShow: false, musicPostTableShow: false, perfumePostShow: false, cartierPostShow: false};
        stateRefresh.cartierPostShow = true;
        this.setState(stateRefresh);
    }
    onClickGlacierPost = () => {
        var stateRefresh = {postShow: false, postTableShow: false, musicPostShow: false, musicPostTableShow: false, perfumePostShow: false, cartierPostShow: false, glacierPostShow: false};
        stateRefresh.glacierPostShow = true;
        this.setState(stateRefresh);
    }
    
    onClickMusicPost = (key) => {
        debugger;
        var musicBools = {perfumePostShow: false, cartierPostShow: false, vincePostShow: false, glacierPostShow: false, lordePostShow: false, musicPostTableShow: false, carolinePostShow: false};
        musicBools[key] = true;
        this.setState(musicBools);
    }

    onOpenMusicTable = () => {
        var stateRefresh = {postShow: false, postTableShow: false, musicPostShow: false, musicPostTableShow: false, perfumePostShow: false, cartierPostShow: false, vincePostShow: false, glacierPostShow: false, lordePostShow: false, carolinePostShow: false};
        stateRefresh.musicPostTableShow = true;
        this.setState(stateRefresh);
    }
}

export default App;
