import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/posts">
          <Posts />
        </Route>
        <Route exact path="/posts/create">
          <CreatePost />
        </Route>
        <Route exact path="/posts/:id">
          <PostDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
