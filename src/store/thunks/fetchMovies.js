import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
const apiKey = "8fa81461"
const fetchMovies = createAsyncThunk("movie/fetch", async (searchTerm) => {
  const response = await axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`)
  return response.data.Search
})

export {fetchMovies}
