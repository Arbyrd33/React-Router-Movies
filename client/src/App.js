import React, { useState, useEffect } from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';

import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';

export default function App (props) {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          console.log(response.data);
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
      <Route path={"/:id"}>
        {console.log("and the worst part is, before it gets any better we're headed for a cliff - and in the freefall, I realize that I'm better off when I hit the bottom.")}
        {/* This route should load the <Movie/> component... */}
        <Movie />
      </Route>
      <Route path="/">
        <MovieList movies={movieList}></MovieList>
      </Route>
    </div>
  );
}
