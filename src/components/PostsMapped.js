import React from "react";
import { useParams } from "react-router-dom";
import GamesPost from "./games/GamesPost";
import MoviePost from "./movies/MoviePost";
import MusicPost from "./music/MusicPost";
import SoccerPost from "./soccer/SoccerPost";
import { homePostContentList } from "./home/HomePostContent";

const PostsMapped = props => {
  const { type } = props;
  const { id } = useParams();
  const postsList =
    type === "home"
      ? homePostContentList
      : homePostContentList.filter(post => post.postType === type).reverse();
  const postObj =
    postsList && postsList.filter(post => post.postType === type).at(id);
  const {
    postTitle,
    postDate,
    textHeader,
    postText,
    postImage,
    postBonusVideo,
    playerLink,
  } = postObj;
  return type === "games" ? (
    <GamesPost
      postTitle={postTitle}
      textHeader={textHeader}
      postDate={postDate}
      postImage={postImage}
      postText={postText}
      backNavPage="Home"
    />
  ) : type === "music" ? (
    <MusicPost
      postTitle={postTitle}
      postDate={postDate}
      playerLink={playerLink}
      postText={postText}
      postBonusVideo={postBonusVideo}
      backNavPage="Home"
    />
  ) : type === "movie" ? (
    <MoviePost
      postTitle={postTitle}
      postDate={postDate}
      postText={postText}
      postImage={postImage}
      backNavPage="Home"
    />
  ) : (
    <SoccerPost
      postTitle={postTitle}
      textHeader={textHeader}
      postDate={postDate}
      postImage={postImage}
      postText={postText}
      backNavPage="Home"
    />
  );
};

export default PostsMapped;
