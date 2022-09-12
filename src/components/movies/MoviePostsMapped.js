import React from "react";
import MoviePost from "./MoviePost";
import { moviePostContentList } from "./MoviePostContent";

const MoviePostsMapped = props => {
  const { moviePostsOpenLegend, closeMoviePost } = props;

  return (
    <>
      {moviePostContentList &&
        moviePostContentList.map(
          (x, index) =>
            moviePostsOpenLegend[index] && (
              <MoviePost
                onClosePost={closeMoviePost}
                postTitle={x.postTitle}
                postDate={x.postDate}
                postText={x.postText}
                postImage={x.postImage}
                backNavPage="Movie"
              />
            )
        )}
    </>
  );
};

export default MoviePostsMapped;
