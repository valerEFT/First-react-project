import React from "react";
import styled from "styled-components";
import Search from "./Search";
import { useState } from "react";

const SearchWrapper = styled.div`
  position: relative;
`;

const Searchbar = styled.input`
  background-color: #21242d;
  width: 315px;
  height: 56px;
  border-radius: 12px;
  border: 1px solid rgba(249, 249, 249, 0.1);
  color: #fff;
  color: ${({ theme }) => (theme.isDarkMode ? "#fff" : "black")};
  background-color: ${({ theme }) => (theme.isDarkMode ? "#21242D" : "#fff")};
  filter: ${({ theme }) => (theme.isDarkMode ? "invert(0)" : "invert(1)")};
  padding-left: 64px;
`;

const KeyIcon = styled.img`
  position: absolute;
  left: 270px;
  top: 16px;
`;

const SearchIcon = styled.img`
  position: absolute;
  left: 25px;
  top: 16px;
`;

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const userInput = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <SearchWrapper>
      <Searchbar
        onChange={userInput}
        value={searchInput}
        placeholder="Search"
      />
      <SearchIcon src="/images/Search.png" alt="Search" />
      <KeyIcon src="/images/Key.png" alt="Key" />
      <Search movieTitle={searchInput} />
    </SearchWrapper>
  );
};

export default SearchBar;
