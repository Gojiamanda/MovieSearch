import React from "react";

const Movie =({Title, Poster, Year})=>{

  return(
    <div className="movie">
      <h2>{Title}</h2>
      <div>
        <img 
          width="200"
          src={Poster}
        />
      </div>
      <p>{Year}</p>
    </div>
  )
}

export default Movie;