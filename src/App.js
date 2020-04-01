import React from "react";
import { Switch, Route } from "react-router-dom";
import "./fonts/fonts.css";

import StartPage from "./pages/start.component";
import FormPage from "./pages/form.component";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={props => <StartPage />} />
      <Route path="/form" render={props => <FormPage />} />
    </Switch>
  );
}

export default App;
