import React from 'react';

export default function MovieList(props) {
  console.log("props", props);
  console.log( "props.movies", props.movies );
  console.log("This is a test");
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
        ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  // console.log(`${title} data`, props);

  return (
    <div className="movie-card">
      <h2 onClick={    ()=>{console.log(`${title} data`, props)}   }>{title}</h2>
      {/* NIFTY */}
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
