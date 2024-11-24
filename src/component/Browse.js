import React from "react";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import LoginPage from "./LoginPage";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import UsePopularMovies from "../Hooks/UsePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  UsePopularMovies();

  return (
    <div>
      <LoginPage />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
