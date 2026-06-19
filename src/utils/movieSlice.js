import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    upcommingMovies : [],
    key: null,
  },
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },

    setTopRated: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    setUpcommigMovies: (state , action) => {
      state.upcommingMovies = action.payload;
    },
    setKey: (state, action) => {
      state.key = action.payload;
    },
  },
});

export const { setNowPlayingMovies, setKey, setPopularMovies , setTopRated  , setUpcommigMovies} =
  movieSlice.actions;
export default movieSlice.reducer;
// name : movies;
// initialState : {
// value : null
// }
// Reducer : {
// MovieData : (state , action) => {
// value.state = action.payload
// }
// }
