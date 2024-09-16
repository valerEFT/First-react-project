import React from "react";
import { Routes, Route } from "react-router-dom";
import SelectedMovie from "../pages/SelectedMoviePage/SelectedMovie";
import Home from "../pages/Home";
import TopRated from "../pages/TopRated";

const Routing = () => {
  return (
    <Routes>
      <Route path="/:title/:movieID" element={<SelectedMovie />} />
      <Route path="/" element={<Home />} />
      <Route path="/top-rated" element={<TopRated />} />
    </Routes>
  );
};

export default Routing;
