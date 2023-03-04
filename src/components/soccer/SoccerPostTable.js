import React from "react";
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import { soccerPreviewContentList } from "./SoccerPostContent";
import TabContainer from "../TabContainer";
import SoccerPostsMapped from "./SoccerPostsMapped";

const SoccerPostTable = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/:id`}>
        <SoccerPostsMapped />
      </Route>
      <Route path={match.path}>
        <TabContainer
          tabTitle="Soccer"
          postTabPreviewsList={soccerPreviewContentList}
        />
      </Route>
    </Switch>
  );
};

export default SoccerPostTable;
