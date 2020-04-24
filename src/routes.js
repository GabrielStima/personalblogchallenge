import React, { useState, useEffect, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import service from "./services/ListPublications";
import SpinnerLoaderComponent from "./components/SpinnerLoaderComponent";
const Home = lazy(() => import("./views/Home"));
const LatestsPosts = lazy(() => import("./views/LatestsPosts"));
const CompletePost = lazy(() => import("./views/CompletePost"));

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
    <Suspense fallback={<SpinnerLoaderComponent />}>
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
    </Suspense>
  );
};

export default Routes;
