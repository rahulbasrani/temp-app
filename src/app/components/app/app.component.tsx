import * as React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { SignupComponent } from "@components";
import { DIContext, getDependencies } from "@helpers";
import "./app.styles.css";
import "../signup/signup.style.css";
const App: React.FC = () => {
  return (
    <DIContext.Provider value={getDependencies()}>
      <div className="center-wrap">
        <Router>
          <Switch>
            <Route exact path="/" component={SignupComponent} />
          </Switch>
          <Switch>
            <Route exact path="/signup" component={SignupComponent} />
          </Switch>
        </Router>
      </div>
    </DIContext.Provider>
  );
};

export default App;
