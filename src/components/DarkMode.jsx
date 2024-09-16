import React from "react";
import { enableDarkMode, disableDarkMode } from "../features/slices/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const DarkMode = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  const toggleDarkMode = () => {
    dispatch(isDarkMode ? disableDarkMode() : enableDarkMode());
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <img
          style={{ width: "20px" }}
          src="/images/lightMode.png"
          alt="sun"
        ></img>
      ) : (
        <img
          style={{ width: "20px" }}
          src="/images/darkMode.png"
          alt="moon"
        ></img>
      )}
    </button>
  );
};

export default DarkMode;
