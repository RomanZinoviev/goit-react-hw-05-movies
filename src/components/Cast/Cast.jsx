import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import s from "../Cast/Cast.module.css"

 const Cast = () => {    
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
            <ul className={s.list}>
                {cast.map(actor => (
                <li key={actor.id} className={s.link}><h3 className={s.title}>Actor name: {actor.original_name}</h3>
                    <p className={s.text}>Role: {actor.character}</p>
                    <img className={s.img} src={actor.profile_path?`${wayImage}${actor.profile_path}`:"https://ipbmafia.ru/uploads/monthly_2018_07/895242-200.png.e10304d04e80f56d3ebaa863b4ccdd41.png"} alt={actor.name} />
                </li>
            ))}
            </ul>
        )
    }
};
export default Cast;