import React from "react";
import styled from "styled-components";
import NavList from "./NavList";
import SearchBar from "./SearchBar";

const NavBar = styled.div`
  display: flex;
  gap: 100px;
`;

const Nav = () => {
  return (
    <NavBar>
      <NavList />
      <SearchBar />
    </NavBar>
  );
};

export default Nav;
