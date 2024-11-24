import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    Trailer: null,
    PopularMovies: null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.Trailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailer, addPopularMovies } =
  movieSlice.actions;
export default movieSlice.reducer;
