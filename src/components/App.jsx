import { Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage/HomePage';
import { MoviesPage } from './MoviesPage/MoviesPage';
import { MovieDetailsPage } from './MovieDetailsPage/MovieDetailsPage';
import { Navigation } from './Navigation/Navigation';
import { NotFoundViue } from './NotFoundViue/NotFoundViue';

export const App = () => {  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movie/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundViue />} />
        </Route>
      </Routes>
    </div>
  );
};
