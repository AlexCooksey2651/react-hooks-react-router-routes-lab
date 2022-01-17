import React from "react";
import { directors } from "../data";

const directorList = directors.map(director => {
  return (
    <div className="directorCard" style={ {border: 'solid black 1px'} } key={director.name}>
      <p>{director.name}</p>
      <div>Filmography:
        <ul>
          {director.movies.map(movie => {
            return (
              <li key={movie}>{movie}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
})

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorList}
    </div>
  )
}

export default Directors;
