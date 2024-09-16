import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import AddMoreMovies from "./AddMore";

const Section = styled.section`
  margin-top: 210px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 34px;
  width: 999px;
`;

const H2 = styled.h2`
  font-family: Lato;
  font-size: 48px;
  font-weight: 800;
  line-height: 48px;
  margin-bottom: 66px;
`;

const Rights = styled.h2`
  font-family: Luckiest Guy;
  font-size: 32px;
  font-weight: 400;
  line-height: 32px;
  color: #f8b319;
  margin: 0 auto;
  margin-bottom: 75px;
`;

const baseUrl = "https://www.omdbapi.com/";
const apiKey = "?apikey=8eac0ca3";
const Url = `${baseUrl}${apiKey}&s=movie`;

const MainTopRated = () => {
  const [movies, setMovies] = useState([]);
  const [movieQuantity, setMovieQuantity] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Url);
        setMovies(response.data.Search);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Section>
      <H2>Top Rated Movies</H2>
      <Wrapper>
        <AddMoreMovies
          movies={movies}
          movieQuantity={movieQuantity}
          setMovieQuantity={setMovieQuantity}
        />
        <Rights>2024. All rights recerved, developed by Valeri</Rights>
      </Wrapper>
    </Section>
  );
};

export default MainTopRated;
