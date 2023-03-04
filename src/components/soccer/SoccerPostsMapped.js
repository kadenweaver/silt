import React from "react";
import { useParams } from 'react-router-dom'
import SoccerPost from "./SoccerPost";
import { soccerPostContentList } from "./SoccerPostContent";

const SoccerPostsMapped = () => {
  const { id } = useParams();
  const postObj = soccerPostContentList && soccerPostContentList.at(id);
  const { postTitle, postDate, textHeader, postText, postImage } = postObj;
  return (
    <SoccerPost
      postTitle={postTitle}
      textHeader={textHeader}
      postDate={postDate}
      postImage={postImage}
      postText={postText}
      backNavPage="Movies"
    />
  );
};

export default SoccerPostsMapped;
