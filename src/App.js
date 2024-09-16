import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";
import Routing from "./Routing/Routing";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => (theme.isDarkMode ? "black" : "#fff")};
    color: ${({ theme }) => (theme.isDarkMode ? "#fff" : "black")};
    transition: all 0.1s ease;
  }
`;

const App = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <ThemeProvider theme={{ isDarkMode }}>
      <GlobalStyle />
      <div className="app">
        <Routing />
      </div>
    </ThemeProvider>
  );
};

export default App;
