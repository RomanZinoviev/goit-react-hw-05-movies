import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage/HomePage';
import { MoviesPage } from './MoviesPage/MoviesPage';
import { MovieDetailsPage } from './MovieDetailsPage/MovieDetailsPage';
import { Navigation } from './Navigation/Navigation';
import { NotFoundViue } from './NotFoundViue/NotFoundViue';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  const [movieId, setMovieId] = useState(null);
  const setMovieIdHandler = id => {
    setMovieId(id);
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
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage onSubmit={setMovieIdHandler}/>} />
          <Route
            path="movies"
            element={<MoviesPage onSubmit={setMovieIdHandler} />}
          />
          <Route
            path="movie/:movieId"
            element={<MovieDetailsPage movieId={movieId} />}
          >
            <Route path='cast' element={<Cast movieId={movieId} />} />
            <Route path='reviews' element={<Reviews movieId={movieId}/>}/>
          </Route>
          <Route path='*' element={<NotFoundViue />} />
        </Route>
      </Routes>
    </div>
  );
};
