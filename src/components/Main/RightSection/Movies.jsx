import React from "react";
import styled from "styled-components";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import { MoreInfo } from "../../buttons/WatchNow";
import Plus from "../../buttons/Plus";

const Wrapper = styled.div`
  margin-top: 60px;
  margin-left: 227px;
`;

const MainTitle = styled.h2`
  font-family: Lato;
  font-size: 30px;
  font-weight: 800;
  line-height: 30px;
`;

const Card = styled.div`
  width: 237px;
  height: 298px;
  margin-top: 30px;
  position: relative;
`;

const Title = styled.h3`
  font-family: Lato;
  font-size: 24px;
  font-weight: 800;
  line-height: 24px;
  position: absolute;
  top: 21px;
  left: 21px;
  color: #fff;
`;

const Episodes = styled.p`
  position: absolute;
  left: 10px;
  top: 199px;
  font-family: Lato;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  color: rgba(249, 249, 249, 0.7);
`;

const Genre = styled.p`
  position: absolute;
  right: 10px;
  top: 199px;
  font-family: Lato;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  color: rgba(249, 249, 249, 0.7);
`;

const Stars = styled.p`
  position: absolute;
  left: 21px;
  top: 57px;
`;

const Image = styled.img`
  width: 100%;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FullStar = styled(StarRoundedIcon)`
  color: #f8b319;
  font-size: 15px;
`;

const HalfStar = styled(StarHalfRoundedIcon)`
  color: #f8b319;
  font-size: 15px;
`;

const Movies = () => {
  return (
    <Wrapper>
      <MainTitle>Movies</MainTitle>
      <CardWrapper>
        <Card>
          <Image src="/images/LokiMovies.png" />
          <Title>Loki</Title>
          <Stars>
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <HalfStar />
          </Stars>
          <Episodes>6 Ep</Episodes>
          <Genre>Superhero</Genre>
          <MoreInfo>More Info</MoreInfo>
          <Plus />
        </Card>
        <Card>
          <Image src="/images/movie2.png" />
          <Title>Chernobyl</Title>
          <Stars>
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
          </Stars>
          <Episodes>5 Ep</Episodes>
          <Genre>Mini Series</Genre>
          <MoreInfo>More Info</MoreInfo>
          <Plus />
        </Card>
        <Card>
          <Image src="/images/movie3.png" />
          <Title>Rick and Morty</Title>
          <Stars>
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
          </Stars>
          <Episodes>49 Ep</Episodes>
          <Genre>Fantasy</Genre>
          <MoreInfo>More Info</MoreInfo>
          <Plus />
        </Card>
      </CardWrapper>
    </Wrapper>
  );
};

export default Movies;
