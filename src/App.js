import React from 'react'
import Searchbar from './components/Searchbar'
import MovieList from './components/MovieList'
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import { fetchMovies } from './store'

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchMovies("Harry Potter"))
  })

  return (
    <div className="container">
      <Searchbar/>
      <MovieList />
    </div>
  )
}

export default App
