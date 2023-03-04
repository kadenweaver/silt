import React from "react";
import { useParams } from 'react-router-dom'
import MoviePost from "./MoviePost";
import { moviePostContentList } from "./MoviePostContent";

const MoviePostsMapped = () => {
  const { id } = useParams();
  const postObj = moviePostContentList && moviePostContentList.at(id);
  const { postTitle, postDate, postImage, postText } = postObj;
  return (
    <MoviePost
      postTitle={postTitle}
      postDate={postDate}
      postImage={postImage}
      postText={postText}
      backNavPage="Movies" />

  );
};

export default MoviePostsMapped;
