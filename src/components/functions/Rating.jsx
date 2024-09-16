import React from "react";
import styled from "styled-components";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const OrangeStar = styled(StarRoundedIcon)`
  color: #f8b319;
`;

const OrangeStarHalf = styled(StarHalfRoundedIcon)`
  color: #f8b319;
`;

const OrangeStarBorder = styled(StarBorderRoundedIcon)`
  color: #f8b319;
`;

const Rating = ({ imdbRating, starSize }) => {
  const rating = imdbRating / 2;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div style={{ marginTop: "4px" }}>
      {Array.from({ length: fullStars }, (_, index) => (
        <OrangeStar style={{ fontSize: starSize }} key={`full-${index}`} />
      ))}
      {hasHalfStar && <OrangeStarHalf style={{ fontSize: starSize }} />}
      {Array.from({ length: emptyStars }, (_, index) => (
        <OrangeStarBorder
          style={{ fontSize: starSize }}
          key={`empty-${index}`}
        />
      ))}
    </div>
  );
};

export default Rating;
