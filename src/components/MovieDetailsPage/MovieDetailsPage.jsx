import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, Route, Routes, useParams } from "react-router-dom";
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import s from "../MovieDetailsPage/MovieDetailsPage.module.css"

export const MovieDetailsPage = () => {
    const [movieInfo, setMovieInfo] = useState(null);  
    const navigate = useNavigate();
    const {movieId} = useParams();
    

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
        navigate("/");
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
                <Link to={`cast`} className={s.link}>Cast</Link>
              </li>
              <li>
                <Link to={`reviews`} className={s.link}>Reviews</Link>
              </li>
            </ul>
            <Routes>
              <Route path={`cast`} element={<Cast />} />
              <Route path={`reviews`} element={<Reviews />} />
            </Routes>
          </div>
        );
    }
};