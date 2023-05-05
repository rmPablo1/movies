import { createSlice, configureStore } from "@reduxjs/toolkit"
import { fetchMovies } from "./thunks/fetchMovies"
import { fetchMovie } from "./thunks/fetchMovie"
const moviesSlice = createSlice({
  name:"movie",
  initialState: {
    searchTerm: "",
    data: [],
    error: null,
    isLoading: false
  },
  reducers:{
    changeTerm(state, action) {
      state.searchTerm = action.payload
    }
  }
  ,
  extraReducers(builder){
    builder.addCase(fetchMovies.pending, (state, action) =>{
      state.isLoading = true
    })
    builder.addCase(fetchMovies.fulfilled, (state, action) =>{
      console.log("hi",action.payload)
      state.data = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.isLoading = false
      console.log(action.error)
      state.error = action.error
    })
  }
})

const singleMovieSlice = createSlice({
  name:"singleMovie",
  initialState:{
    data: {},
    isLoading: false,
    error: null
  },
  extraReducers(builder){
    builder.addCase(fetchMovie.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchMovie.fulfilled, (state, action) => {

      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(fetchMovie.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })
  }
})

const store = configureStore({
  reducer:{
    movies: moviesSlice.reducer,
    singleMovie: singleMovieSlice.reducer
  }
})

export {store}
export const {changeTerm} = moviesSlice.actions

export * from "./thunks/fetchMovie"
export * from "./thunks/fetchMovies"
