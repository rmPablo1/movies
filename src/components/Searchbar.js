import React from 'react'
import { useRef, useState, useEffect } from "react"
import { fetchMovie } from '../store'
import {useSelector, useDispatch } from "react-redux"
import { changeTerm } from '../store'
function Searchbar() {
  const [error, setError ] = useState(null)
  const dispatch = useDispatch()
  const isFirstInput = useRef(true)


  const {searchTerm} = useSelector((state) => {
    return state.movies
  })

  const previousMovie = useRef(searchTerm)

  useEffect(()=>{
    if (isFirstInput.current){
      isFirstInput.current = searchTerm === ''
      return
    }
    if (searchTerm === ''){
      setError("You must provide a name")
      return
    }

    if (searchTerm.length <= 3){
      setError("Your movie must have 3 letters or more")
      return
    }

    setError(null)
  }, [searchTerm])

  const handleChange = (event) => {
    dispatch(changeTerm(event.target.value))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (searchTerm === previousMovie.current) return
      previousMovie.current = searchTerm
      dispatch(fetchMovie(searchTerm))
      dispatch(changeTerm(''))
  }



  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input placeholder="Avengers, Batman..."className="input" value={searchTerm} onChange={handleChange}/>
        {error && <p className="error"style={{color: "red"}}>{error}</p>}
      </form>
    </div>
  )
}

export default Searchbar
