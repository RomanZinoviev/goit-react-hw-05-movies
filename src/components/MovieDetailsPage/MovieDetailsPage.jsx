import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

export const MovieDetailsPage = ({ movieId }) => {
    const [movieInfo, setMovieInfo] = useState(null);     

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
    }, [ movieId]);
    if (movieInfo) {
        return (        
            <div>
                 <p> {movieInfo.original_title}</p>
                <p>{movieInfo.overview}</p>
                <img src={`${wayImage}${movieInfo.poster_path}`} alt={movieInfo.original_title} />
                <ul>
                    <li><Link to="cast">Cast</Link></li>
                    <li><Link to="reviews">Reviews</Link></li>
                </ul>
           </div>
    )
    }
};