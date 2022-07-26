import React, { useState, useEffect } from 'react';
import {
  useRouteMatch
} from 'react-router-dom';
import axios from 'axios';

export default function Movie(props) {
  console.log(props.movies[0].id);
  const [movie, setMovie] = useState();
const {url, path} = useRouteMatch();
console.log(url, path);
  let id = parseInt(path);
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/movies/data`) // Study this endpoint with Postman
      .then(response => {
        console.log("ressss", response)
        // Study this response with a breakpoint or log statements
        // and set the response data as the 'movie' slice of state
      })
      .catch(error => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, [id]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}
