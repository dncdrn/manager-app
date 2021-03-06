import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import PostList from "./page/PostList";
import PostListWithComments from "./page/PostListWithComments";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/posts">
            <PostList />
          </Route>
          <Route path="/posts/:postID">
            <PostListWithComments />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
