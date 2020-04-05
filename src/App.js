import React from "react";
import { Switch, Route } from "react-router-dom";

import { routes } from "./helpers";
import { Home, About, ChoirPage, DirectorPage } from "./routes";

const App = () => {
  return (
    <Switch>
      <Route path={routes.about}>
        <About />
      </Route>
      <Route path={routes.choir}>
        <ChoirPage />
      </Route>
      <Route path={routes.director}>
        <DirectorPage />
      </Route>
      <Route path={routes.root}>
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
