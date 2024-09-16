import React from "react";
import styled from "styled-components";

const Li = styled.li`
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  text-decoration: none;
  list-style: none;
  color: ${({ theme }) => (theme.isDarkMode ? "#fff" : "black")};
`;

const ListItemComponent = () => {
  return (
    <>
      <Li style={{ color: "#F8B319" }} to="/movies">
        Movies
      </Li>
      <Li>TV Shows</Li>
      <Li>Anime</Li>
    </>
  );
};

export default ListItemComponent;
