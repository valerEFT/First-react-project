import React from "react";
import styled from "styled-components";
import Aside from "../Aside/Aside";
import Swipe from "./RightSection/Swipe";
import Movies from "./RightSection/Movies";
import MainTopRated from "./MainTopRated/MainTopRated";

const Main = styled.main``;

const AsideSectionWrapper = styled.section`
  display: flex;
  width: 1155px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainComponent = () => {
  return (
    <Main>
      <AsideSectionWrapper>
        <Aside />
        <Column>
          <Swipe />
          <Movies />
        </Column>
      </AsideSectionWrapper>
      <MainTopRated />
    </Main>
  );
};

export default MainComponent;
