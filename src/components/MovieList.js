import React from 'react'
import {useSelector} from "react-redux"
import MovieShow from "./MovieShow"
function MovieList() {
  const {data, isLoading} = useSelector((state) => {
    return state.movies
  })



  const renderMovies = data?.map((movie) => {
    return <MovieShow key={movie.imdbID} movie={movie} />
  })

  let content = renderMovies;

  if (isLoading){
    content = <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  }

  if (data.length === 0){
    content = "No movies found"
  }

  return (
    <div className="moviegrid">{content}</div>
  )
}

export default MovieList
