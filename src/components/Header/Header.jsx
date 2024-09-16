import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const HeaderWrapper = styled.header`
  display: flex;
  gap: 225px;
  align-items: center;
  margin-top: 61px;
  margin-right: 45px;
  justify-content: space-between;
`;

const LogoDiv = styled.div`
  display: flex;
`;

const LogoText = styled.h1`
  font-family: "Luckiest Guy", cursive;
  width: 117px;
  display: flex;
  flex-direction: column;
  font-size: 32px;
  font-weight: 400;
  line-height: 32px;
  color: #f8b319;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoDiv>
        <img style={{ width: 59 }} src="/images/logo.png" alt="Logo" />
        <LogoText>Honey Movies</LogoText>
      </LogoDiv>
      <Nav />
    </HeaderWrapper>
  );
};

export default Header;
