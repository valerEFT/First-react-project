import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import Rating from "../../components/functions/Rating";
import { Button } from "../../components/buttons/WatchNow";
import { WatchBtn } from "../../components/buttons/Watchlist";
import AddIcon from "@mui/icons-material/Add";
import BackHomeButton from "../../components/buttons/BackHomeButton";

const Div = styled.div``;

const Image = styled.img`
  border-radius: 20px;
  margin-right: 124px;
  width: 452px;
  height: 568px;
`;

const MovieCard = styled.div`
  display: flex;
  gap: 105px;
  position: absolute;
  top: 281px;
  left: 95px;
`;

const MovieDetails = styled.div``;

const H2 = styled.h2`
  font-family: Lato;
  font-size: 68px;
  font-weight: 800;
  line-height: 81.6px;
`;

const Views = styled.p`
  font-family: Lato;
  font-size: 25px;
  font-weight: 600;
  line-height: 30px;
  margin-top: 22px;
`;

const IMDb = styled.img`
  width: 57px;
  height: 30px;
  margin-top: 27px;
  display: block;
`;

const Description = styled.p`
  font-family: Lato;
  font-size: 30px;
  font-weight: 600;
  line-height: 36px;
  margin-top: 26px;
`;

const MainDiv = styled.div`
  position: relative;
`;

const RatingWrapper = styled.div`
  margin-top: 22px;
`;

const WatchNow = styled(Button)`
  font-family: Lato;
  font-size: 22px;
  font-weight: 800;
  line-height: 22px;
  width: 240px;
  height: 71px;
  border: none;
`;

const WatchlistBtn = styled(WatchBtn)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Lato;
  font-size: 22px;
  font-weight: 800;
  line-height: 22px;
  color: #fff;
  width: 202px;
  height: 71px;
  filter: ${({ theme }) => (theme.isDarkMode ? "invert(0)" : "invert(1)")};
  border: none;
  margin-bottom: 100px;
`;

const ButtonWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  gap: 45.64px;
`;

const ImageWrapper = styled.div`
  margin-right: 124px;
  width: 452px;
  height: 568px;
  position: relative;
`;

const TopRatedContainer = styled.div`
  width: 169px;
  height: 35px;
  border-radius: 0 20px;
  background-color: #f8b319;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopRated = styled.span`
  font-family: Lato;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  color: #000;
`;

const baseUrl = "https://www.omdbapi.com/";
const apiKey = "?apikey=8eac0ca3";

const SelectedMovie = () => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}${apiKey}&i=${movieID}&plot=full`
        );
        if (response.data) {
          setMovie(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, [movieID]);

  if (!movie) return <div>Loading...</div>;

  return (
    <MainDiv>
      <Div>
        <BackHomeButton top={172} />
        <MovieCard>
          <MovieDetails>
            <H2>{movie.Title}</H2>
            <RatingWrapper>
              <Rating imdbRating={movie.imdbRating} starSize="38px" />
            </RatingWrapper>
            <Views>10M+ views</Views>
            <IMDb src="/images/IMDB.png" />
            <Description>{movie.Plot}</Description>
            <ButtonWrapper>
              <WatchlistBtn>
                <AddIcon sx={{ fontSize: "32px", fontWeight: "bold" }} />
                Watchlist
              </WatchlistBtn>
              <WatchNow>Watch Now</WatchNow>
            </ButtonWrapper>
          </MovieDetails>
          <ImageWrapper>
            <TopRatedContainer>
              <TopRated>Top rated</TopRated>
            </TopRatedContainer>
            <Image src={movie.Poster} />
          </ImageWrapper>
        </MovieCard>
      </Div>
    </MainDiv>
  );
};

export default SelectedMovie;
