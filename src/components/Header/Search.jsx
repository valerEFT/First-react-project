import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MovieContainer = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  z-index: 144;
  border-radius: 12px;
`;

const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

const MovieItem = styled.div`
  text-align: center;
  display: flex;
  border: 4px solid black;
  background-color: teal;
`;

const MovieTitle = styled.h2`
  font-size: 22px;
  font-family: Lato;
`;

const MovieImage = styled.img`
  width: 100px;
  height: auto;
  flex-shrink: 0;
`;

const Search = ({ movieTitle }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchByName = async () => {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=8eac0ca3&s=${movieTitle}`
      );

      setResults(response.data.Search || []);
    };

    if (movieTitle) {
      fetchByName();
    } else {
      setResults([]);
    }
  }, [movieTitle]);

  return (
    <MovieContainer>
      <MovieList>
        {results.map((movie) => (
          <MovieItem key={movie.imdbID}>
            <MovieImage src={movie.Poster} alt={movie.Title} />
            <MovieTitle>{movie.Title}</MovieTitle>
          </MovieItem>
        ))}
      </MovieList>
    </MovieContainer>
  );
};

export default Search;
