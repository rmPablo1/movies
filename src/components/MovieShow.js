import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import noImage from "../assets/noimage.png"
import Modal from './Modal'
import { fetchMovie } from '../store'

function MovieShow({movie}) {
  const [show, setShow] = useState(false)
  const {data, isLoading} = useSelector((state) => {
    return state.singleMovie
  })
  const dispatch = useDispatch()
  const handleClick = () => {
    setShow(true)
    dispatch(fetchMovie(movie.Title))
  }

  const handleClose = () =>{
    setShow(false)
  }

  let content;
  if (isLoading) {
    document.body.classList.add("modal-hidden")
    content = <div className="background-before-loading"><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
  } else {
    content = <Modal movie={movie} onClose={handleClose} data={data}/>
  }
  return (
    <div className="movie">
      <p class="movie-title">{movie.Title}</p>
      <p>{movie.Year}</p>
      <img onClick={handleClick} className="image" src={(movie.Poster!=="N/A")? movie.Poster : noImage} alt="movie poster"/>
      {show && content }
    </div>
  )
}

export default MovieShow
