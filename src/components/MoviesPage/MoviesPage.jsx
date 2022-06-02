import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import s from "../MoviesPage/MoviesPage.module.css"

const MoviesPage = () => {
    const [films, setFilms] = useState(null);
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    const API_GET = "https://api.themoviedb.org/3/search/movie";
    const API_KEY = "04e9412e8b51c89a88481cdeb7f8adec";
    
    const getFilms = (film) => {
        axios.get(`${API_GET}?api_key=${API_KEY}&query=${film}`).then(res => {
            const { results } = res.data;
            setFilms(results);
        }).catch(err => console.log(err))
    };
    const submitHandler = (e) => {
        e.preventDefault();
        getFilms(value);
    };
    const inputChange = (e) => {
        setValue(e.target.value)
    };
    const homeHandle = () => {
        navigate(-1);
    };
    
    return (
        <>
            <button onClick={homeHandle} className={s.but}>Go back</button>
            <form className={s.form}>
                <button type="submit" className={s.button} onClick={submitHandler}>
                    <span className={s.buttonLabel}>Search</span>
                </button>
                <input
                    className={s.input}
                    type="text"
                    value={value}
                    onChange={inputChange}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search films" />
            </form>
            <ul className={s.list} >
                {films && films.map(({ id, title }) => {
                    return (<li key={id} className={s.link}><Link to={`/movie/${id}`}>{title}</Link></li>);
                })}
            </ul></>
    )
};
export default MoviesPage;