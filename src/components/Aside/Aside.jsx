import React from "react";
import DarkMode from "../DarkMode";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AsideBar = styled.aside`
  position: relative;
`;

const Nav = styled.nav``;

const Ul = styled.ul`
  list-style: none;
  margin-top: 59px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FirstUl = styled(Ul)`
  margin-top: 39px;
`;

const ListTitle = styled.li`
  font-family: Lato;
  font-weight: 700;
  font-size: 18px;
  line-height: 21.6px;
  color: ${({ theme }) =>
    theme.isDarkMode ? "rgba(249, 249, 249, 0.67)" : "black"};
`;

const Li = styled.li`
  color: ${({ theme }) => (theme.isDarkMode ? "#fff" : "black")};
  margin-top: 15px;
  display: "flex";
  gap: 15px;
  &:nth-child(2) {
    color: ${({ theme }) => (theme.isDarkMode ? "#fff" : "black")};
    text-decoration: none;
    font-family: Lato, sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 21.6px;
    display: flex;
    gap: 15px;
  }
`;
const StyledLink = styled(Link)`
  color: ${({ theme }) => (theme.isDarkMode ? "#fff" : "black")};
  text-decoration: none;
  font-family: Lato, sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 21.6px;
  display: flex;
  gap: 15px;
`;

const Image = styled.img`
  filter: ${({ theme }) => (theme.isDarkMode ? "invert(0)" : "invert(1)")};
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 10px;
  left: -143px;
  z-index: -1;
  filter: ${({ theme }) => (theme.isDarkMode ? "invert(0)" : "invert(1)")};
`;

const Aside = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <AsideBar>
      <BackgroundImage src="/images/bg.png" />
      <Nav>
        <FirstUl>
          <ListTitle>Menu</ListTitle>
          <Li>
            <DarkMode />
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </Li>
          <Li>
            <StyledLink style={{ color: "#F8B319" }} to="/">
              <img src="/images/Squircle.png" alt="Home" />
              Home
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to="/">
              <Image src="/images/Discover.png" alt="Discover" />
              Discover
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to="/">
              <Image src="/images/Award.png" alt="Awards" />
              Awards
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to="/">
              <Image src="/images/Celebrities.png" alt="Celebrities" />
              Celebrities
            </StyledLink>
          </Li>
        </FirstUl>
        <Ul>
          <ListTitle>Library</ListTitle>
          <Li>
            <StyledLink to="/">
              <Image src="/images/Recent.png" alt="Recent" />
              Recent
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to="/top-rated">
              <Image src="/images/Top Rated.png" alt="Top Rated" />
              Top Rated
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to="/">
              <Image src="/images/Downloaded.png" alt="Downloaded" />
              Downloaded
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to="/">
              <Image src="/images/Playlists.png" alt="Playlists" />
              Playlists
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to="/">
              <Image src="/images/Watchlist.png" alt="Watchlist" />
              Watchlist
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to="/">
              <Image src="/images/Completed.png" alt="completed" />
              Completed
            </StyledLink>
          </Li>
        </Ul>
        <Ul>
          <ListTitle>General</ListTitle>
          <Li>
            <StyledLink to="/">
              <Image
                src="/images/Settings.png"
                alt="Settings
              "
              />
              Settings
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to="/">
              <Image src="/images/Log Out.png" alt="Log Out" />
              Log Out
            </StyledLink>
          </Li>
        </Ul>
      </Nav>
    </AsideBar>
  );
};

export default Aside;
