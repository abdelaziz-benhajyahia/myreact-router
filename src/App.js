import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import MovieList from './Components/MovieList/MovieList';
import './App.css';
import {moviesData} from './Contants/data'
import AddMovie from './Components/AddMovie/AddMovie';
import FilterByName from './Components/FilterByName/FilterByName';
import FilterByRate from './Components/Rating/Rating'
import { BrowserRouter, Route, Router } from 'react-router-dom';

function App(){
  const [movies, setMovies] = useState(moviesData)
  const [inputSearch, setInputSearch] = useState("")
  const [rating, setRating] = useState(0)

  const add = (newMovie) => {
    setMovies([...movies, newMovie])
  }

    return (
      <BrowserRouter>
      <div className='App'>
        <h1>My Movie App</h1>
        <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch}/>
        <FilterByRate isMovieRating={false} rating={rating} setRating={setRating}/>
        <MovieList movies={movies} inputSearch={inputSearch} rating={rating}/>
        <AddMovie add={add}/>
        {/* <Router>
          <Route />
        </Router> */}
      </div>
      </BrowserRouter>
    );
}

export default App;