import { createSlice, configureStore } from "@reduxjs/toolkit"
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
    builder.addCase(fetchMovie.pending, (state, action) =>{
      state.isLoading = true
    })
    builder.addCase(fetchMovie.fulfilled, (state, action) =>{
      state.data = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchMovie.rejected, (state, action) => {
      state.isLoading = false
      console.log(action.error)
      state.error = action.error
    })
  }
})

const store = configureStore({
  reducer:{
    movies: moviesSlice.reducer
  }
})

export {store}
export const {changeTerm} = moviesSlice.actions

export * from "./thunks/fetchMovie"
