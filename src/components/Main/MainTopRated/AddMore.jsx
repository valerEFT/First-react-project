import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MovieCard from "./MovieCard";

const AddMore = styled.button`
  background-color: #f8b319;
  padding: 5px 10px;
  border-radius: 5px;
  height: 100%;
  margin: 200px 45% 100px 45%;
  cursor: pointer;
`;

export const LinkedCard = styled(Link)`
  color: ${({ theme }) => (theme.isDarkMode ? "#fff" : "black")};
  text-decoration: none;
  margin-top: 220px;

  &:nth-child(-n + 3) {
    margin-top: 0;
  }
`;

const AddMoreMovies = ({ movies, movieQuantity, setMovieQuantity }) => {
  const addMovie = () => {
    setMovieQuantity((prevCounter) => prevCounter + 3);
  };

  return (
    <>
      {movies.slice(0, movieQuantity).map((movie) => (
        <LinkedCard key={movie.imdbID} to={`/${movie.Title}/${movie.imdbID}`}>
          <MovieCard imdbID={movie.imdbID} />
        </LinkedCard>
      ))}
      <AddMore onClick={addMovie}>Add More</AddMore>
    </>
  );
};
export default AddMoreMovies;
