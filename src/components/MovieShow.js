import React from 'react'
import noImage from "../assets/noimage.png"
import {useState} from "react"
import Modal from "./Modal"
function MovieShow({movie}) {
  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
    
  }
  return (
    <div className="movie">
      <p className="movie-title">{movie.Title}</p>
      <p>{movie.Year}</p>
      <img onClick={() => setShow(true)} className="image" src={(movie.Poster!=="N/A")? movie.Poster : noImage} alt="movie poster"/>
      {show && <Modal onClose={handleClose}movie={movie} />}
    </div>
  )
}

export default MovieShow
