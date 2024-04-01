import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Tickets from "./pages/Tickets";
import TicketDetail from "./pages/TicketDetail";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/tickets">
          <Tickets />
        </Route>
        <Route exact path="/tickets/:id">
          <TicketDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
