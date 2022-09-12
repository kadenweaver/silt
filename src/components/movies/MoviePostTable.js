import { moviePostPreviewList } from "./MoviePostContent";
import TabContainer from "../TabContainer";

const MoviePostTable = props => {
  const { onClickMoviePost } = props;

  return (
    <TabContainer
      tabTitle="Movies"
      postTabPreviewsList={moviePostPreviewList}
      onPreviewClick={onClickMoviePost}
    />
  );
};

export default MoviePostTable;
