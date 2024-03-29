import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingmovies:null
    },
    reducers:{
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingmovies = action.payload
        }
    }
})
export const {addNowPlayingMovies} =movieSlice.actions;
export default movieSlice.reducer;