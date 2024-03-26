import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies : null,
        trailerMovie : null,
    },
    reducers:{
        nowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        trailerMovie : (state, action)=>{
            state.trailerMovie = action.payload;
        }
    }
})

export const {nowPlayingMovies, trailerMovie} = moviesSlice.actions;

export default moviesSlice.reducer;