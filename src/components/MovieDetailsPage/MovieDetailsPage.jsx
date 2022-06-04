import { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";
import { Link, useNavigate, Route, Routes, useParams, useLocation } from "react-router-dom";
// import { Cast } from '../Cast/Cast';
// import { Reviews } from '../Reviews/Reviews';
import s from "../MovieDetailsPage/MovieDetailsPage.module.css"
const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"))

const MovieDetailsPage = () => {
    const [movieInfo, setMovieInfo] = useState(null);  
  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();    

    const API_GET = "https://api.themoviedb.org/3/movie/";
    const API_KEY = "04e9412e8b51c89a88481cdeb7f8adec";   
    const wayImage = "https://image.tmdb.org/t/p/w500";    
    
    const getFilmsById = (movieId) => {
        axios.get(`${API_GET}${movieId}?api_key=${API_KEY}`).then(res => {            
          setMovieInfo(res.data);           
        }).catch(err => console.log(err))
    };
    useEffect(() => {
        if(!movieId){return}
        getFilmsById(movieId);
    }, [movieId]);
    const goBackHandle = () => {
        navigate(location.state);
    }
    if (movieInfo) {
        return (
          <div>
            <button onClick={goBackHandle} className={s.button}>Go back</button>
            <p>Original name:  {movieInfo.original_title}</p>
            <p>About: {movieInfo.overview}</p>
            <img
              src={`${wayImage}${movieInfo.poster_path}`}
              alt={movieInfo.original_title}
                />                
            <ul>
              <li>
                <Link to={`cast`} state={location.state} className={s.link}>Cast</Link>
              </li>
              <li>
                <Link to={`reviews`} state={location.state} className={s.link}>Reviews</Link>
              </li>
            </ul>
            <Suspense fallback={<>Loading...</>}>
              <Routes>
              <Route path={`cast`} element={<Cast />} />
              <Route path={`reviews`} element={<Reviews />} />
            </Routes>
            </Suspense>
          </div>
        );
    }
};
export default MovieDetailsPage;