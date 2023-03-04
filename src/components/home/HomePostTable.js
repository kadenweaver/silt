import React from "react";
import { homePostPreviewList } from "./HomePostContent";
import TabContainer from "../TabContainer";

const HomePostTable = props => {
  const { onClickHomePost } = props;

  return (
    <TabContainer
      tabTitle="Home"
      postTabPreviewsList={homePostPreviewList}
      onPreviewClick={onClickHomePost}
    />
  );
};

export default HomePostTable;