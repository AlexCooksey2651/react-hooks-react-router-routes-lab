import React from "react";
import { actors } from "../data";

const actorList = actors.map(actor => {
  return (
    <div className="actorCard" style={ {border: 'solid black 1px'} } key={actor.name}>
      <p>{actor.name}</p>
      <div>Filmography:
        <ul>
          {actor.movies.map(movie => {
            return (
              <li key={movie}>{movie}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
})

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorList}
    </div>
  )
}

export default Actors;
