import React from 'react';
import {Link} from 'react-router-dom';

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
        ))}
    </div>
  );
}


function MovieDetails(props) {
  const { title, director, metascore} = props.movie;

  function distraction(){
    console.log(`${title} data`, props, `Movie-ID: `, props.movie.id);
  }

  
  return (
    <div className="movie-card">
      <Link to={`/movies/${props.movie.id}`}>
      <h2 onClick={distraction}>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      </Link>
    </div>
  );
}
