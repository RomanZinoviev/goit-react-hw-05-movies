import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import { HomePage } from './HomePage/HomePage';
// import { MoviesPage } from './MoviesPage/MoviesPage';
// import { MovieDetailsPage } from './MovieDetailsPage/MovieDetailsPage';
//  import { Navigation } from './Navigation/Navigation';
// import { NotFoundViue } from './NotFoundViue/NotFoundViue';
const HomePage = lazy(() => import("./HomePage/HomePage"));
const MoviesPage = lazy(() => import("./MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./MovieDetailsPage/MovieDetailsPage"));
 const Navigation = lazy(() => import("./Navigation/Navigation"));
const NotFoundViue = lazy(() => import("./NotFoundViue/NotFoundViue"));

export const App = () => {  
  return (
    <div style={{       
      fontSize: 16,
      paddingLeft: 50,
      paddingRight: 50,
      paddingTop: 50,       
      }}
    >      
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route path="/" element={<Navigation />}>
            <Route index element={<HomePage />} />
            <Route path="/goit-react-hw-05-movies" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movie/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundViue />} />
        </Route>
      </Routes>
      </Suspense>
    </div>
  );
};
