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

const ImageButton = styled.img`
  height: 80px;
  width: 80px;
  cursor: pointer;
  opacity: 0.2;

  &:hover {
    opacity: 1;
  }
`;

const ChoirImage = ({ onClick }) => (
  <ImageButton src={choirAvatar} alt="Choir Login" onClick={onClick} />
);

const DirectorImage = ({ onClick }) => (
  <ImageButton alt="Director Login" src={directorAvatar} onClick={onClick} />
);

const ChoirLogin = () => {
  const history = useHistory();

  return <ChoirImage onClick={() => history.push(routes.choir)} />;
};

const DirectorLogin = () => {
  const history = useHistory();

  return <DirectorImage onClick={() => history.push(routes.director)} />;
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
