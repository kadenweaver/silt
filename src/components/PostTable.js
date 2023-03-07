import React, { useMemo } from "react";
import { useRouteMatch, useParams, Switch, Route } from "react-router-dom";
import NewTabContainer from "./NewTabContainer";
import PostsMapped from "./PostsMapped";
import { homePostPreviewList } from "./home/HomePostContent";

const PostTable = () => {
  const match = useRouteMatch();
  const { page } = useParams();
  const pathData = [
    { path: undefined, type: "home", title: "Home" },
    { path: "soccer", type: "soccer", title: "Soccer" },
    { path: "music", type: "music", title: "Music" },
    { path: "movies", type: "movies", title: "Movies" },
    { path: "games", type: "games", title: "Games" },
  ];
  const { type, title } = pathData.find(x => x.path === page);
  const previews = useMemo(
    () =>
      type === "home"
        ? homePostPreviewList
        : homePostPreviewList.filter(x => x.postType === type),
    [type]
  );

  return (
    <Switch>
      <Route path={`${match.path}/:id`}>
        <PostsMapped type={type} />
      </Route>
      <Route path={match.path}>
        <NewTabContainer tabTitle={title} postTabPreviewsList={previews} />
      </Route>
    </Switch>
  );
};

export default PostTable;
