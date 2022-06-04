import { useState, useEffect} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import s from "../MoviesPage/MoviesPage.module.css"

const MoviesPage = () => {
    const [films, setFilms] = useState(null);
    const [value, setValue] = useState("");
    const [needFilm, setNeedFilm] = useState(localStorage.getItem("film"));
    const navigate = useNavigate();
    const location = useLocation();    

    const API_GET = "https://api.themoviedb.org/3/search/movie";
    const API_KEY = "04e9412e8b51c89a88481cdeb7f8adec";
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getFilms = (film) => {        
        axios.get(`${API_GET}?api_key=${API_KEY}&query=${film}`).then(res => {
            const { results } = res.data;    
            if (results.length === 0) { 
                setNeedFilm("");
                console.log(needFilm)
                return alert(`not found ${value}`);
            };
            localStorage.setItem("film", needFilm);
            setFilms(results);                        
        }).catch(err => console.log(err))
    };
    useEffect(() => {
        if(needFilm===""||needFilm===null){return}
        getFilms(needFilm);        
    },[getFilms, needFilm])
    const submitHandler = (e) => {
        e.preventDefault(); 
        if (value === "") { return alert("Write somthing") };        
        setNeedFilm(value);        
        setValue("");
    };
    const inputChange = (e) => {
        setValue(e.target.value)
    };
    const homeHandle = () => {
        navigate("/");
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
                    return (<li key={id} className={s.link}><Link  to={`/movie/${id}`}
                    state={location.pathname}>{title}</Link></li>);
                })}
            </ul></>
    )
};
export default MoviesPage;