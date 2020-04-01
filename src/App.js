import React from "react";
import { Switch, Route } from "react-router-dom";
import "./fonts/fonts.css";

import FormPage from "./pages/form.component";

function App() {
  return (
    <Switch>
      <Route path="/" render={props => <FormPage />} />
    </Switch>
  );
}

export default App;
