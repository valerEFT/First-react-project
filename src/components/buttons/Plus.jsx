import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 18.5px 20px;
  border-radius: 15px;
  background-color: rgba(249, 249, 249, 0.2);
  z-index: 12;
  position: absolute;
  left: 10px;
  bottom: 10px;
  cursor: pointer;
  border: none;
`;

const Plus = () => {
  return (
    <Button>
      <img src="/images/Vector 196.png" style={{ width: "17px" }} alt="plus" />
    </Button>
  );
};

export default Plus;
