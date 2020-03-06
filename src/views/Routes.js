// the main routes of our app are defined here using react-router
// https://reacttraining.com/react-router/web/example/basic

import React from "react";
import { Switch, Route } from "react-router-dom";

import PostList from "./posts/PostList";
import Account from "./account/Account";
import Post from "./posts/Post";
import Error from "./misc/Error";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={PostList} />
    <Route path="/account" component={Account} />
    <Route path="/:slug" component={Post} />
    <Route component={Error} />
  </Switch>
);

export default Routes;
