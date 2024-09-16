import React from "react";
import Header from "../components/Header/Header";
import MainComponent from "../components/Main/MainComponent";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  return (
    <StyledDiv>
      <Header />
      <MainComponent />
    </StyledDiv>
  );
};

export default Home;
