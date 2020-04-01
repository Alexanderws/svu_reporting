import React from "react";
import styled from "styled-components";

import OsloKommuneLogoWhite from "../assets/oslo-kommune-white.logo";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 20px 60px;
  background-color: #2a2859;
  color: white;
`;

const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 500;
`;

const Header = () => {
  return (
    <Container>
      <OsloKommuneLogoWhite size={100} />
      <Title>Smittervernsutstyr</Title>
    </Container>
  );
};

export default Header;
