import React, { useEffect, useState } from "react";
import axios from "axios";
import sliceText from "../../functions/sliceText";
import styled from "styled-components";
import Rating from "../../functions/Rating";
const baseUrl = "https://www.omdbapi.com/";
const apiKey = "?apikey=8eac0ca3";

const Div = styled.div`
  position: relative;
  width: 295px;
  height: 417px;
  text-align: left;
`;

const H3 = styled.h3`
  margin-top: 15px;
  font-family: Lato;
  font-size: 29.24px;
  font-weight: 600;
  line-height: 35.09px;
`;

const CornerDiv = styled.div`
  width: 77px;
  height: 38px;
  background-color: #f8b319;
  border-radius: 0px 17px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 295px;
  height: 417px;
  border-radius: 17px;
`;

const RateInCorner = styled.span`
  font-family: Lato;
  font-size: 23px;
  font-weight: 600;
  line-height: 27.6px;
  color: black;
`;

const Release = styled.p`
  font-family: Lato;
  font-size: 17px;
  font-weight: 700;
  line-height: 20.4px;
  margin-top: 11px;
  color: ${({ theme }) =>
    theme.isDarkMode ? " rgba(249, 249, 249, 0.7)" : " black"};
`;

const Description = styled.p`
  font-family: Lato;
  font-size: 14px;
  font-weight: 600;
  line-height: 16.8px;
  margin-top: 15px;
`;

const MovieCard = ({ imdbID }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}${apiKey}&i=${imdbID}&plot=full`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getMovieDetails();
  }, [imdbID]);

  if (!movieDetails) return <p>Loading...</p>;

  return (
    <Div>
      <Image src={movieDetails.Poster} alt={movieDetails.Title} />
      <H3>{movieDetails.Title}</H3>
      <Rating imdbRating={movieDetails.imdbRating} starSize="21px" />
      <Release>{movieDetails.Released}</Release>
      <Description>{sliceText(movieDetails.Plot, 110)}</Description>
      <CornerDiv>
        <RateInCorner>{movieDetails.imdbRating / 2}</RateInCorner>
      </CornerDiv>
    </Div>
  );
};

export default MovieCard;
