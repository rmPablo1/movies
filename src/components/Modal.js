import ReactDOM from "react-dom"
import React from 'react'
import noImage from "../assets/noimage.png"
import { fetchMovie } from "../store"
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
function Modal({movie, onClose}) {
  const dispatch = useDispatch()
  const data = useSelector((state) =>{
    return state.singleMovie.data
  })
  
  useEffect(()=>{
    document.body.classList.add("modal-hidden")
    dispatch(fetchMovie(movie.Title))

    return () => {
      document.body.classList.remove("modal-hidden")
    }
  },[dispatch, movie.Title])

  return (
    ReactDOM.createPortal(
      <div className="container-modal">
      <div onClick={onClose} className="background-modal"></div>
      <div className="inside-modal">
        <img className="image-modal" src={(movie.Poster!=="N/A")? movie.Poster : noImage} alt="movie poster"/>
        <div className="inside-modal-description">
          <h2 style={{marginTop:"50px", marginRight:"30px", color: "white"}}>{movie.Title} ({movie.Year})</h2>
          <p className="description"><span>Plot:</span> {data.Plot}</p>
          <p className="description"><span>Director: </span>{data.Director}</p>
          <p className="description"><span>Actors:</span> {data.Actors}</p>
          <p className="description"><span>Runtime:</span> {data.Runtime}</p>
          {data.Ratings && <p className="description"><span>Reviews: </span>{data.Ratings[0].Value}</p>}
          <button onClick={onClose} className="button-modal">CLOSE</button>
        </div>
      </div>
    </div>
      , document.querySelector(".portal-modal"))
  )
}

export default Modal
