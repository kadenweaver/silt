import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { gamesPostPreviewList } from "./GamesPostContent";
import TabContainer from "../TabContainer";
import GamesPostsMapped from "./GamesPostsMapped";

const GamesPostTable = props => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/:id`}>
        <GamesPostsMapped />
      </Route>
      <Route path={match.path}>
        <TabContainer
          tabTitle="Games"
          postTabPreviewsList={gamesPostPreviewList}
        />
      </Route>
    </Switch>
  );
};

export default GamesPostTable;
