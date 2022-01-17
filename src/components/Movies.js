import React from "react";
import { movies } from "../data";

// const movieGenres = movies.map(movie.genre => {
//   return (
//     <li>{movie.genre}</li>
//   )
// })

// const movieGenres = movies.map(movie => {
//   return (
//     movie.genres.map(genre => {
//       return (
//         <li>{genre}</li>
//       )
//     })
//   )
// })

const movieList = movies.map(movie => {
  return (
    <div className="movieCard" style={ {border: 'solid black 1px'} } key={movie.title}>
      <p>{movie.title}</p>
      <p>Time: {movie.time} minutes</p>
      <div>Genres:
        <ul>
          {movie.genres.map(genre => {
            return (
              <li key={genre}>{genre}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
})

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  )
}

export default Movies;
