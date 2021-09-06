import {Component} from 'react';
import perfume from './jasonundressed.jpeg';
import cartier from './cartierGod.jpg';
import vinceStaples from './vinceStaples.jpeg';
import glacier from './Glacier.jpeg';
import lorde from './lorde.jpeg';
import bunny from './bunny.jpeg';
import { Container, Button } from 'semantic-ui-react';
import PostPreview from "./PostPreview";

import './App.css';


/*
 <div className="post-table-item">
     <Button className="post-button" onClick={onClickGlacierPost}></Button>
     <Container className='post-item-container'>
         <div clasName="post-table-item-image-container">
             <img className="post-table-item-image" src={glacier}></img>
         </div>
         <div className="post-table-item-title-container">
             <h5>John Glacier: Hopefully This Counts As A Snipe</h5>
         </div>
     </Container>
 </div>
 <div className="post-table-item">
     <Button className="post-button" onClick={onClickVincePost}></Button>
     <Container className='post-item-container'>
         <div clasName="post-table-item-image-container">
             <img className="post-table-item-image" src={vinceStaples}></img>
         </div>
         <div className="post-table-item-title-container">
             <h5>Vince Staple's Self-Titled Album Is His Best Yet By Far</h5>
         </div>
     </Container>
 </div>
 <div className="post-table-item">
     <Button className="post-button" onClick={onClickCartPost}></Button>
     <Container className='post-item-container'>
         <div clasName="post-table-item-image-container">
             <img className="post-table-item-image" src={cartier}></img>
         </div>
         <div className="post-table-item-title-container">
             <h5>I Have No Idea Who Cartier God Is But...</h5>
         </div>
     </Container>

 </div>
 <div className="post-table-item">
     <Button className="post-button" onClick={onClickPost}></Button>
     <Container className='post-item-container'>
         <div clasName="post-table-item-image-container">
             <img className="post-table-item-image" src={perfume}></img>
         </div>
         <div className="post-table-item-title-container">
             <h4>This Perfume Genius Remix Made A Good Song Better</h4>
         </div>
     </Container>

 </div>
 */


class MusicPostTable extends Component {

    render() {
        const {onClickPost, onClickCartPost, onClickVincePost, onClickGlacierPost, onClickLordePost, onClickMusicPost} = this.props;
        return (
            <div className="post-table-div">
                <div className="post-table-header">
                    <h2>Music</h2>
                </div>
                <PostPreview previewKey={"carolinePostShow"} previewTitle={'Caroline Polachek Follows Freshman Album With Exciting Single'} onClickMusicPost={onClickMusicPost} previewImage={bunny}>
                </PostPreview>
                <PostPreview previewKey={"lordePostShow"} previewTitle={'Lorde Releases New Album Including Contender For Song Of The Summer'} onClickMusicPost={onClickMusicPost} previewImage={lorde}>
                </PostPreview>
                <PostPreview previewKey={"glacierPostShow"} previewTitle={'John Glacier: Hopefully This Counts As A Snipe'} onClickMusicPost={onClickMusicPost} previewImage={glacier}>
                </PostPreview>
                <PostPreview previewKey={"vincePostShow"} previewTitle={"Vince Staple's Self-Titled Album Is His Best Yet By Far"} onClickMusicPost={onClickMusicPost} previewImage={vinceStaples}>
                </PostPreview>
                <PostPreview previewKey={"cartierPostShow"} previewTitle={"I Have No Idea Who Cartier God Is But..."} onClickMusicPost={onClickMusicPost} previewImage={cartier}>
                </PostPreview>
                <PostPreview previewKey={"perfumePostShow"} previewTitle={'This Perfume Genius Remix Made A Good Song Better'} onClickMusicPost={onClickMusicPost} previewImage={perfume}>
                </PostPreview>

            </div>
        );
    }
}

export default MusicPostTable;
