import { useState, useEffect } from "react";
import axios from "axios";

export const HomePage = ({onSubmit}) => {
    const [popFilms, setPopFilms] = useState([]);
    const API_GET = "https://api.themoviedb.org/3/trending/";
    const API_KEY = "04e9412e8b51c89a88481cdeb7f8adec";
    const wayImage = "https://image.tmdb.org/t/p/w500";
    
    const getFilms = () => {
        axios.get(`${API_GET}movie/week?api_key=${API_KEY}`).then(res => {            
            const { results } = res.data;              
            setPopFilms(results);
        }).catch(err => console.log(err))
    };
    const getFilmId = (e) => {
        const filmId=e.currentTarget.value;
        onSubmit(filmId)
    };
    useEffect(() => {
        getFilms()
    }, []);
    return (
        <ul>
            {popFilms.map(({ id, title, overview, poster_path }) => {
                return(<li key={id} onClick={getFilmId} value={id}><p>{title}</p><img src={`${wayImage}${poster_path}`} alt={title} /><p>{overview}</p></li>)
            })}
        </ul>
    )
};