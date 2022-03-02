import React from "react";
import { Route, Switch } from 'react-router-dom';
import NextLaunch from "./pages/NextLaunch";
import PastLaunch from "./pages/PastLaunch";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/next" component={ NextLaunch } />
      <Route path="/past" component={ PastLaunch } />
    </Switch>
  );
}

export default App;
