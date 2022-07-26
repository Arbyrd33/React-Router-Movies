import React from 'react';
import {useHistory} from 'react-router-dom';
export default function MovieList(props) {
  // console.log("props", props);
  // console.log( "props.movies", props.movies );
  // console.log("This is a test");
  const movies = props.movies;
  // console.log("MovieList movies:  ", movies);
  


  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
        ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore} = props.movie;

  const history = useHistory();
  
  const routeToMovie = () => {
    // console.log("History is... ", history);
    history.push(`/movies/:${props.movie.id}`)
  }


  function distraction(){
    console.log(`${title} data`, props, `Movie-ID: `, props.movie.id);
  }

  


  return (
    <div className="movie-card" onClick={routeToMovie}>
      <h2 onClick={distraction}>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
