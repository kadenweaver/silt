import React from "react";
import { useParams } from 'react-router-dom'
import GamesPost from "./GamesPost";
import { gamesPostContentList } from "./GamesPostContent";

const GamesPostsMapped = () => {
  const { id } = useParams();
  const postObj = gamesPostContentList && gamesPostContentList.at(id);
  const { postTitle, textHeader, postDate, postImage, postText } = postObj;
  return (
    <GamesPost
      postTitle={postTitle}
      textHeader={textHeader}
      postDate={postDate}
      postImage={postImage}
      postText={postText}
      backNavPage="Games" />

  );
};

export default GamesPostsMapped;
