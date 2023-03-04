import { useRouteMatch, Switch, Route } from 'react-router-dom'
import { moviePostPreviewList } from "./MoviePostContent";
import TabContainer from "../TabContainer";
import MoviePostsMapped from "./MoviePostsMapped"

const MoviePostTable = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/:id`}>
        <MoviePostsMapped />
      </Route>
      <Route path={match.path}>
        <TabContainer
          tabTitle="Movies"
          postTabPreviewsList={moviePostPreviewList}
        />
      </Route>
    </Switch>
  );
};

export default MoviePostTable;
