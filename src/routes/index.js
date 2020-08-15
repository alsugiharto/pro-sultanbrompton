import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./Landing";
import Productdetails from "./Productdetails";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/productdetails" component={Productdetails} />
    </Switch>
  </BrowserRouter>
);
