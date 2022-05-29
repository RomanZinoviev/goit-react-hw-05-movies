import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage/HomePage';
import { MoviesPage } from './MoviesPage/MoviesPage';
import { MovieDetailsPage } from './MovieDetailsPage/MovieDetailsPage';
import { Navigation } from './Navigation/Navigation';
import { NotFoundViue } from './NotFoundViue/NotFoundViue';

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
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/movies"
          element={<MoviesPage onSubmit={setMovieIdHandler} />}
        />
        <Route
          path="/movies/:movieId"
          element={<MovieDetailsPage movieId={movieId} />}
        />
        <Route element={<NotFoundViue />} />
      </Routes>
    </div>
  );
};
