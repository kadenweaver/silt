import React from "react";
import { useParams } from "react-router-dom";
import MusicPost from "./MusicPost";
import { musicPostContentList } from "./MusicPostContent";

const MusicPostsMapped = () => {
  const { id } = useParams();
  const postObj = musicPostContentList && musicPostContentList.at(id);
  const { postTitle, postDate, playerLink, postText, postBonusVideo } = postObj;
  return (
    <MusicPost
      postTitle={postTitle}
      postDate={postDate}
      playerLink={playerLink}
      postText={postText}
      postBonusVideo={postBonusVideo}
      backNavPage="Movies"
    />
  );
};

export default MusicPostsMapped;
