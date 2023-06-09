import React from 'react'
import {useSelector} from "react-redux"
import MovieShow from "./MovieShow"
import {nanoid} from "@reduxjs/toolkit"
function MovieList() {
  const {data, isLoading} = useSelector((state) => {
    return state.movies
  })

  const renderMovies = data?.map((movie) => {
    return <MovieShow key={nanoid()} movie={movie} />
  })

  let content = renderMovies;
  if (isLoading){
    content = <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  }

  return (
    <div className="moviegrid">{content}</div>
  )
}

export default MovieList
