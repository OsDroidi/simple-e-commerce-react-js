import React from "react";
import Card from "./components/Card";
import CardDetails from "./components/CardDetails";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Card />
        </Route>
        <Route path="/:productId">
          <CardDetails />
        </Route>
      </Switch>
    </>
  );
}

export default App;
