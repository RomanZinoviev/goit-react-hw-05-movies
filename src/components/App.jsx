import { useState } from "react";
import { HomePage } from "./HomePage/HomePage";
import { MoviesPage } from "./MoviesPage/MoviesPage";
import { MovieDetailsPage } from "./MovieDetailsPage/MovieDetailsPage";

export const App = () => {
  const [movieId, setMovieId] = useState(null);
  const setMovieIdHandler = (id) => {
    setMovieId(id)
  };    
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      <HomePage onSubmit={setMovieIdHandler}/>
      <MoviesPage onSubmit={setMovieIdHandler} />
     { movieId&&<MovieDetailsPage movieId={movieId}/>}
    </div>
  );
};
