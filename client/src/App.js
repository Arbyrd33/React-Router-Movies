import React, { useState, useEffect } from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';

import Movie from './Movies/Movie'
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';

export default function App (props) {
  // const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          console.log("res", response.data);
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  // const addToSavedList = id => {
  //   // This is stretch. Prevent the same movie from being "saved" more than once
  // };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
             
        <Route path={`/:id`}>
          <Movie movies={movieList}/>
        </Route>

        <Route path="/">
          <MovieList movies={movieList}></MovieList>
        </Route>


    </div>
  );
}
