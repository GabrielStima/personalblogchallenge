import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import service from "./services/ListPublications";

import Home from "./views/Home";
import LatestsPosts from "./views/LatestsPosts";
import CompletePost from "./views/CompletePost";

const Routes = ({ filterObjectMiddlewareCallback }) => {
  const [listPublications, setListPublications] = useState([]);

  useEffect(() => {
    let isSubscribed = true;
    service.getListPublications().then((res) => {
      if (isSubscribed) {
        setListPublications(res);
      }
    });
    return () => (isSubscribed = false);
  }, []);

  return (
    <Switch>
      <Route
        exact
        path="/"
        component={(props) => (
          <Home
            {...props}
            filterObjectMiddlewareCallback={filterObjectMiddlewareCallback}
            listPublications={listPublications}
          />
        )}
      />
      <Route
        exact
        path="/latests-posts"
        component={(props) => (
          <LatestsPosts
            {...props}
            listPublications={listPublications}
            filterObjectMiddlewareCallback={filterObjectMiddlewareCallback}
          />
        )}
      />
      <Route
        exact
        path="/post/:id"
        component={(props) => (
          <CompletePost {...props} listPublications={listPublications} />
        )}
      />
    </Switch>
  );
};

export default Routes;
