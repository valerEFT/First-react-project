import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BackHomeWrapper = styled(Link)`
  display: flex;
  gap: 21px;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => (theme.isDarkMode ? "#fff" : "black")};
  position: relative;
  left: 50px;
  width: 230px;
`;

const BackHome = styled.p`
  font-family: Lato;
  font-size: 28px;
  font-weight: 800;
  line-height: 28px;
  text-decoration: none;
`;

const Btn = styled.button`
  background-color: rgba(249, 249, 249, 0.2);
  filter: ${({ theme }) => (theme.isDarkMode ? "invert(0)" : "invert(1)")};
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 15px;
  cursor: pointer;
`;

const BackHomeButton = ({ top }) => {
  return (
    <BackHomeWrapper style={{ top: top }} to="/">
      <Btn>
        <img src="/images/Previous.png" />
      </Btn>
      <BackHome>Back Home</BackHome>
    </BackHomeWrapper>
  );
};

export default BackHomeButton;
