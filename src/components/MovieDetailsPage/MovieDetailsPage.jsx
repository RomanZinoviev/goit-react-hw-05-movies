import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, Route, Routes, useParams } from "react-router-dom";
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';

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
            <p> {movieInfo.original_title}</p>
            <p>{movieInfo.overview}</p>
            <img
              src={`${wayImage}${movieInfo.poster_path}`}
              alt={movieInfo.original_title}
                />
                <button onClick={goBackHandle}>Go back</button>
            <ul>
              <li>
                <Link to={`cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`reviews`}>Reviews</Link>
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