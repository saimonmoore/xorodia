import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ThemeWrapper from "./components/ThemeWrapper";

import { routes } from "./helpers";
import { Home, About, ChoirPage, DirectorPage } from "./routes";

const App = () => {
  return (
    <ThemeWrapper>
      <Router>
        <Switch>
          <Route path={routes.root} component={Home} />
          <Route path={routes.about} component={About} />
          <Route path={routes.choir} component={ChoirPage} />
          <Route path={routes.director} component={DirectorPage} />
        </Switch>
      </Router>
    </ThemeWrapper>
  );
};

export default App;
