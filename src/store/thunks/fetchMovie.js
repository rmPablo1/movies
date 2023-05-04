import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
const apiKey = "8fa81461"

const fetchMovie = createAsyncThunk("singleMovie/fetch", async (movie) => {
  const response = await axios.get(`https://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`)
  return response.data
})


export {fetchMovie}
