import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: [],
    key : null,
  },
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    setKey : (state , action) => {
    state.key = action.payload;
 }
  },
});

export const { setNowPlayingMovies , setKey } = movieSlice.actions;
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