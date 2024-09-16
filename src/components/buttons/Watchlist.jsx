import React from "react";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";

export const WatchBtn = styled.button`
  background-color: rgba(249, 249, 249, 0.2);
  border-radius: 15px;
  color: #fff;
  z-index: 11;
  display: flex;
  align-items: center;
  font-family: Lato;
  cursor: pointer;
`;
const Watchlist = () => {
  return (
    <WatchBtn>
      <AddIcon sx={{ fontSize: "32px", fontWeight: "bold" }} /> Watchlist
    </WatchBtn>
  );
};

export default Watchlist;
