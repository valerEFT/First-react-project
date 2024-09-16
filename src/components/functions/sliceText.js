import React from "react";

const sliceText = (text, amount) => {
  if (text.length >= amount) {
    return text.slice(0, amount) + "...";
  }
  return text;
};

export default sliceText;
