import React from 'react'
import noImage from "../assets/noimage.png"
function MovieShow({movie}) {
  console.log(movie)
  return (
    <div className="movie">
      <p class="movie-title">{movie.Title}</p>
      <p>{movie.Year}</p>
      <img className="image" src={(movie.Poster!=="N/A")? movie.Poster : noImage} alt="movie poster"/>
    </div>
  )
}

export default MovieShow
