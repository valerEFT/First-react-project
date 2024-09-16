import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import axios from "axios";
import styled from "styled-components";
import MovieCard from "../components/Main/MainTopRated/MovieCard";
import BackHomeButton from "../components/buttons/BackHomeButton";
import { LinkedCard } from "../components/Main/MainTopRated/AddMore";

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 670px;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: auto;
  background: ${({ theme }) => (theme.isDarkMode ? "black" : "#fff")};
`;

const MainDiv = styled.div``;

const SwiperWrapper = styled.div``;

const H2 = styled.h2`
  font-family: Lato;
  font-size: 48px;
  font-weight: 800;
  line-height: 48px;
  margin-bottom: 66px;
  margin-left: 58px;
  margin-top: 103px;
`;

const baseUrl = "https://www.omdbapi.com/";
const apiKey = "?apikey=8eac0ca3";
const Url = `${baseUrl}${apiKey}&s=movie`;

const TopRated = () => {
  const [movies, setMovies] = useState([]);
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

  if (!movies.length) {
    return <h2>Loading...</h2>;
  }

  return (
    <MainDiv>
      <BackHomeButton top={69} />
      <H2>Top Rate Movies</H2>
      <SwiperWrapper>
        <StyledSwiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="TopRatedSwiper"
        >
          {movies.map((movie) => (
            <StyledSwiperSlide key={movie.imdbID}>
              <LinkedCard to={`/${movie.Title}/${movie.imdbID}`}>
                <MovieCard imdbID={movie.imdbID} />
              </LinkedCard>
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
      </SwiperWrapper>
    </MainDiv>
  );
};

export default TopRated;
