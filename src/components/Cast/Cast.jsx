import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Cast = () => {    
    const [cast, setCast] = useState(null);   
    const {movieId} = useParams();

    const API_GET = "https://api.themoviedb.org/3/movie/";
    const API_KEY = "04e9412e8b51c89a88481cdeb7f8adec";
    const wayImage = "https://image.tmdb.org/t/p/w138_and_h175_face";  
    
    const getCast = (movieId) => {
        axios.get(`${API_GET}${movieId}/credits?api_key=${API_KEY}`).then(res => {            
            setCast(res.data.cast);             
        }).catch(err => console.log(err))
    };
    useEffect(() => {
        if(!movieId){return}
        getCast(movieId);
    }, [movieId]);
    if (cast) {
        return (
            <ul>
                {cast.map(actor => (
                <li key={actor.id}><h3>{actor.original_name}</h3>
                    <p>{actor.character}</p>
                    <img src={`${wayImage}${actor.profile_path}`} alt={actor.name} />
                </li>
            ))}
            </ul>
        )
    }
};