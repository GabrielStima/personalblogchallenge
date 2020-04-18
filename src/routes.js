import React from "react";
import { Switch, Route } from "react-router-dom";
import service from "./services/ListPublications";

import Home from "./views/Home";
import LatestsPosts from "./views/LatestsPosts";
import CompletePost from "./views/CompletePost";

const getListPublications = async () => {
  return await service.getListPublications();
};

const listPublications = getListPublications();

const Routes = ({ filterObjectMiddlewareCallback }) => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={() => (
          <Home
            filterObjectMiddlewareCallback={filterObjectMiddlewareCallback}
            listPublications={listPublications}
          />
        )}
      />
      <Route
        exact
        path="/latests-posts"
        component={() => (
          <LatestsPosts
            listPublications={listPublications}
            filterObjectMiddlewareCallback={filterObjectMiddlewareCallback}
          />
        )}
      />
      <Route
        exact
        path="/post/:id"
        component={() => <CompletePost listPublications={listPublications} />}
      />
    </Switch>
  );
};

export default Routes;
