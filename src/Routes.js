import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";

export const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Redirect to="/" from="/" />
        </Switch>
      </Router>
    </div>
  );
};
