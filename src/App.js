import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NotFound from "./Components/NotFound";
const Home = lazy(() => import("./Components/home/Home"));
const New = lazy(() => import("./Components/new/New"));

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new" component={New} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
