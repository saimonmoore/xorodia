import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { routes } from "../../helpers";
import choirAvatar from "./assets/choirAvatar.png";
import directorAvatar from "./assets/directorAvatar.png";

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

export default Home;
