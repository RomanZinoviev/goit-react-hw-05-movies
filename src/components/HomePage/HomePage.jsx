import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const HomePage = ({onSubmit}) => {
    const [popFilms, setPopFilms] = useState([]);
    const API_GET = "https://api.themoviedb.org/3/trending/";
    const API_KEY = "04e9412e8b51c89a88481cdeb7f8adec";   
    
    const getFilms = () => {
        axios.get(`${API_GET}movie/week?api_key=${API_KEY}`).then(res => {            
            const { results } = res.data;              
            setPopFilms(results);
        }).catch(err => console.log(err))
    };
    
    useEffect(() => {
        getFilms()
    }, []);
    return (
        <ul>
            {popFilms.map(({ id, title}) => {
                return(<li key={id} ><Link to={`/movie/${id}`}>{title}</Link></li>)
            })}
        </ul>
    )
};