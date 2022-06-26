import {Component} from 'react';
import perfume from '../../pictures/jasonundressed.jpeg';
import cartier from '../../pictures/cartierGod.jpg';
import vinceStaples from '../../pictures/vinceStaples.jpeg';
import glacier from '../../pictures/Glacier.jpeg';
import lorde from '../../pictures/lorde.jpeg';
import bunny from '../../pictures/bunny.jpeg';
import capriSongs from '../../pictures/capriSongs.jpeg';
import PostPreview from "../PostPreview";
import Pantone from "../../pictures/Pantone.jpeg"
import grace from "../../pictures/grace.png"
import { chakra, Heading } from '@chakra-ui/react'

import '../../App.css';

class MusicPostTable extends Component {

    render() {
        const { onClickMusicPost } = this.props;
        return (
            <chakra.div
              mt='2%'
              width='100%'
              mr='auto'
              ml='auto'>
                <chakra.div className="post-table-header"
                    backgroundColor='#3c4759'
                    border='1px solid #3c4754'
                    teextAlign='center'
                    mb='2.5%'
                    borderRadius='3px'
                    color='white'
                    h='100px'
                    fontSize='50px'>
                    <Heading mt='3.5' fontSize='50px' fontWeight='light'>Music</Heading>
                </chakra.div>
                <PostPreview previewKey={8} previewTitle={'She is Beauty, She is Grace'} onClickMusicPost={onClickMusicPost} previewImage={grace} previewImageOffset='40'/>
                <PostPreview previewKey={7} previewTitle={'Here are Some Songs and Videos I Like'} onClickMusicPost={onClickMusicPost} previewImage={Pantone} />
                <PostPreview previewKey={6} previewTitle={'Saggi Moon, Pisce Veen, Capri Sun'} onClickMusicPost={onClickMusicPost} previewImage={capriSongs} previewImageOffset='20'/>
                <PostPreview previewKey={5} previewTitle={'Caroline Polachek Follows Freshman Album With Exciting Single'} onClickMusicPost={onClickMusicPost} previewImage={bunny} previewImageOffset='0'/>
                <PostPreview previewKey={4} previewTitle={'Lorde Releases New Album Including Contender For Song Of The Summer'} onClickMusicPost={onClickMusicPost} previewImage={lorde} previewImageOffset='10'/>
                <PostPreview previewKey={3} previewTitle={'John Glacier: Hopefully This Counts As A Snipe'} onClickMusicPost={onClickMusicPost} previewImage={glacier} previewImageOffset='0'/>
                <PostPreview previewKey={2} previewTitle={"Vince Staple's Self-Titled Album Is His Best Yet By Far"} onClickMusicPost={onClickMusicPost} previewImage={vinceStaples} previewImageOffset='10'/>
                <PostPreview previewKey={1} previewTitle={"I Have No Idea Who Cartier God Is But..."} onClickMusicPost={onClickMusicPost} previewImage={cartier} previewImageOffset='75'/>
                <PostPreview previewKey={0} previewTitle={'This Perfume Genius Remix Made A Good Song Better'} onClickMusicPost={onClickMusicPost} previewImage={perfume} previewImageOffset='1'/>
            </chakra.div>
        );
    }
}

export default MusicPostTable;
