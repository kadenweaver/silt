import React from "react";
import GamesPost from "../games/GamesPost"
import MoviePost from "../movies/MoviePost"
import MusicPost from "../music/MusicPost"
import SoccerPost from "../soccer/SoccerPost"
import { homePostContentList } from "./HomePostContent";

const HomePostsMapped = props => {
  const { homePostsOpenLegend, closeHomePost } = props;

  return (
    <>
      {homePostContentList &&
        homePostContentList.map(
          (x, index) =>
          homePostsOpenLegend[index] && (
              x.postType === 'games' ? 
                <GamesPost
                onClosePost={closeHomePost}
                postTitle={x.postTitle}
                textHeader={x.textHeader}
                postDate={x.postDate}
                postImage={x.postImage}
                postText={x.postText}
                backNavPage="Home"
              /> : x.postType === 'music' ? 
              <MusicPost
                onClosePost={closeHomePost}
                postTitle={x.postTitle}
                postDate={x.postDate}
                playerLink={x.playerLink}
                postText={x.postText}
                postBonusVideo={x.postBonusVideo}
                backNavPage="Home"
              />
              : x.postType === 'movie' ? 
              <MoviePost
                onClosePost={closeHomePost}
                postTitle={x.postTitle}
                postDate={x.postDate}
                postText={x.postText}
                postImage={x.postImage}
                backNavPage="Home"
            />
              : 
              <SoccerPost
                onClosePost={closeHomePost}
                postTitle={x.postTitle}
                textHeader={x.textHeader}
                postDate={x.postDate}
                postImage={x.postImage}
                postText={x.postText}
                backNavPage="Home"
            />
            )
        )}
    </>
  );
};

export default HomePostsMapped;
