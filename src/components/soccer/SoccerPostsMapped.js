import React from "react";
import SoccerPost from "./SoccerPost";
import { soccerPostContentList } from "./SoccerPostContent";

const SoccerPostsMapped = props => {
  const { soccerPostsOpenLegend, closeSoccerPost } = props;

  return (
    <>
      {soccerPostContentList &&
        soccerPostContentList.map(
          (x, index) =>
            soccerPostsOpenLegend[index] && (
              <SoccerPost
                onClosePost={closeSoccerPost}
                postTitle={x.postTitle}
                textHeader={x.textHeader}
                postDate={x.postDate}
                postImage={x.postImage}
                postText={x.postText}
                backNavPage="Soccer"
              />
            )
        )}
    </>
  );
};

export default SoccerPostsMapped;
