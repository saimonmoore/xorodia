import React from "react";

import styled from "styled-components";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import ThemeWrapper from "./components/ThemeWrapper";

import choirAvatar from "./assets/choirAvatar.png";
import directorAvatar from "./assets/directorAvatar.png";

const routes = {
  root: "/",
  about: "/about",
  choir: "/choir",
  director: "/director",
};

const About = () => {
  return <div>App for Voxalba</div>;
};

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  > * {
    &:not(:first-child) {
      margin-left: 150px;
    }
  }
`;

const ChoirImage = styled.img`
  height: 80px;
  width: 80px;
  cursor: pointer;
`;

const DirectorImage = styled.img`
  height: 80px;
  width: 80px;
  cursor: pointer;
`;

const ChoirLogin = () => {
  const history = useHistory();

  return (
    <ChoirImage
      src={choirAvatar}
      alt="Choir Login"
      onClick={() => history.push(routes.choir)}
    />
  );
};

const DirectorLogin = () => {
  const history = useHistory();

  return (
    <DirectorImage
      alt="Director Login"
      src={directorAvatar}
      onClick={() => history.push(routes.director)}
    />
  );
};

const Home = () => {
  return (
    <HomeWrapper>
      <ChoirLogin />
      <DirectorLogin />
    </HomeWrapper>
  );
};

const ChoirPage = () => {
  return (
    <div>
      <h1>Choir Page</h1>
    </div>
  );
};
const DirectorPage = () => {
  return (
    <div>
      <h1>Director Page</h1>
    </div>
  );
};

function App() {
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
}

export default App;
