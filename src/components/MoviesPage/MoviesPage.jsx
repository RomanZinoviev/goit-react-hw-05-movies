import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import s from "../MoviesPage/MoviesPage.module.css"

export const MoviesPage = ({onSubmit}) => {
    const [films, setFilms] = useState(null);
    const [value, setValue] = useState("");

    const API_GET = "https://api.themoviedb.org/3/search/movie";
    const API_KEY = "04e9412e8b51c89a88481cdeb7f8adec";
    const wayImage = "https://image.tmdb.org/t/p/w500";
    const getFilms = (film) => {
        axios.get(`${API_GET}?api_key=${API_KEY}&query=${film}`).then(res => {            
            const { results } = res.data;             
            setFilms(results);
        }).catch(err => console.log(err))
    };
    const submitHandler = (e) => {
        e.preventDefault();
        getFilms(value);
        // onSabmit(value);
    };
    const inputChange = (e) => {
        setValue(e.target.value)
    };
    // useEffect(() => {
    //     if (!films) { return };
    //     getFilms(value);
    // }, [films]);
    const getFilmId = (e) => {
        const filmId=e.currentTarget.value;
        onSubmit(filmId)
    };
    return (
        <><form className={s.form}>
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
            <ul >
                {films&&films.map(({ id, title }) => {
                    return (<li key={id} onClick={getFilmId} value={id}><Link to={`/movie/${id}`}>{title}</Link></li>);
                })}
            </ul></>
    )
}