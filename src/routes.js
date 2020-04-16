import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import LatestsPosts from "./views/LatestsPosts";
import CompletePost from "./views/CompletePost";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/latests-posts" component={LatestsPosts} />
      <Route exact path="/post/:id" component={CompletePost} />
    </Switch>
  );
};

export default Routes;
