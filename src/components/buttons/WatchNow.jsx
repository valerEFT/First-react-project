import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  background-color: #f8b319;
  border-radius: 15px;
  color: black;
  z-index: 11;
  font-family: Lato;
  cursor: pointer;
`;

export const MoreInfo = styled(Button)`
  padding: 17.5px 32.5px;
  margin: 0px 10px 10px 0px;
  font-family: Lato;
  font-size: 18px;
  font-weight: 800;
  line-height: 18px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const WatchNow = () => {
  return <Button>Watch Now</Button>;
};

export default WatchNow;
