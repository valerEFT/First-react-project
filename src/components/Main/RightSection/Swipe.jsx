import React from "react";
import { WatchBtn } from "../../buttons/Watchlist";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../../buttons/WatchNow";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation } from "swiper/modules";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
const Title = styled.h3`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 11;
  margin-top: 40px;
  margin-left: 40px;
  font-family: Lato;
  font-size: 48px;
  font-weight: 800;
  line-height: 48px;
  color: #fff;
`;

const WatchNow = styled(Button)`
  padding: 17px 45px;
  font-family: Lato;
  font-size: 18px;
  font-weight: 800;
  line-height: 18px;
  position: absolute;
  right: 20px;
  bottom: 21px;
`;
const WtchBtn = styled(WatchBtn)`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 12px 25px;
  border: none;
  margin-bottom: 21px;
  margin-left: 20px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 800;
`;

const Swipe = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="/images/CR.jfif" alt="2 man and 1 women"></img>
        <Title>The Crown</Title>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/loki.jfif" alt="loki and other main characters"></img>
        <Title>Loki</Title>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/chernobyl.png" alt="people with chemical suits"></img>
        <Title>Chernobyl</Title>
      </SwiperSlide>
      <WatchNow>Watch Now</WatchNow>
      <WtchBtn>
        <AddIcon sx={{ fontSize: "32px", fontWeight: "bold" }} />
        Watchlist
      </WtchBtn>
    </Swiper>
  );
};

export default Swipe;
