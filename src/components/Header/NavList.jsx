import React from "react";
import styled from "styled-components";
import ListItemComponent from "./ListItemComponent";

const NavLi = styled.nav`
  display: flex;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  gap: 50px;
`;

const NavList = () => {
  return (
    <NavLi>
      <Ul>
        <ListItemComponent />
      </Ul>
    </NavLi>
  );
};

export default NavList;
