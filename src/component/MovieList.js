import React from "react";
import MovieCard from "./MovieCard";
import UseUpcomingMovies from "../Hooks/UseUpcomingMovies";

const MovieList = ({ title, movies }) => {
  // if (!movies || movies.length === 0) console.log("No movies available");

  return (
    movies && (
      <div className="p-3">
        <h1 className="px-6 my-2 text-3xl text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} posterpath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
