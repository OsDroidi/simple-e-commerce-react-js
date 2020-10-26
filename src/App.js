import React from "react";
import Card from "./components/Card";
import CardDetails from "./components/CardDetails";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container mx-auto">
      <Switch>
        <Route exact path="/">
          <Card />
        </Route>
        <Route path="/:productId">
          <CardDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
