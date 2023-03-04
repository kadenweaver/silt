import { useRouteMatch, Switch, Route } from 'react-router-dom'
import { musicPostPreviewList } from "./MusicPostContent";
import TabContainer from "../TabContainer";
import MusicPostsMapped from "./MusicPostsMapped"


const MusicPostTable = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/:id`}>
        <MusicPostsMapped />
      </Route>
      <Route path={match.path}>
        <TabContainer
          tabTitle="Music"
          postTabPreviewsList={musicPostPreviewList}
        />
      </Route>
    </Switch>
  );
};

export default MusicPostTable;
