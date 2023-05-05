import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
const apiKey = "8fa81461"
const fetchMovies = createAsyncThunk("movie/fetch", async (searchTerm) => {
  const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`)
  console.log(response)
  return response.data.Search
})

export {fetchMovies}
