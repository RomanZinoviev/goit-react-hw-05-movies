import { useState, useEffect } from "react";
import axios from "axios";

export const Cast = ({ movieId }) => {    
    const [reviews, setReviews] = useState(null);    

    const API_GET = "https://api.themoviedb.org/3/movie/";
    const API_KEY = "04e9412e8b51c89a88481cdeb7f8adec";
    const wayImage = "https://image.tmdb.org/t/p/w500";
    
    const getReviews = (movieId) => {
        axios.get(`${API_GET}${movieId}/reviews?api_key=${API_KEY}`).then(res => {            
            setReviews(res.data);            
        }).catch(err => console.log(err))
    };
    getReviews(movieId);
};