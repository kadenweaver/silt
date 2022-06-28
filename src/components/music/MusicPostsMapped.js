import React from "react";
import MusicPost from "./MusicPost";
import { musicPostContentList } from "./MusicPostContent";

const MusicPostsMapped = props => {
  const { musicPostsOpenLegend, closeMusicPost } = props;

  return (
    <>
      {musicPostContentList &&
        musicPostContentList.map(
          (x, index) =>
            musicPostsOpenLegend[index] && (
              <MusicPost
                onClosePost={closeMusicPost}
                postTitle={x.postTitle}
                postDate={x.postDate}
                playerLink={x.playerLink}
                postText={x.postText}
                postBonusVideo={x.postBonusVideo}
                backNavPage="Music"
              />
            )
        )}
    </>
  );
};

export default MusicPostsMapped;
