import { createSlice } from "@reduxjs/toolkit";



const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies : null,
        popularMovies: null,
        upComingMovies: null,
        topRatedMovies: null,
        trailerMovie : null,
    },
    reducers:{
        nowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        popularMovies: (state,action)=>{
            state.popularMovies = action.payload;
        },
        upComingMovies: (state,action)=>{
            state.upComingMovies = action.payload;
        },
        topRatedMovies: (state,action)=>{
            state.topRatedMovies = action.payload;
        },
        trailerMovie : (state, action)=>{
            state.trailerMovie = action.payload;
        }
    }
})

export const { nowPlayingMovies, popularMovies, upComingMovies, topRatedMovies, trailerMovie } = moviesSlice.actions;

export default moviesSlice.reducer;