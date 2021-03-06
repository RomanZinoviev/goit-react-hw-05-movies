import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import s from '../HomePage/HomePage.module.css';

const HomePage = () => {
  const [popFilms, setPopFilms] = useState([]);
  const API_GET = 'https://api.themoviedb.org/3/trending/';
  const API_KEY = '04e9412e8b51c89a88481cdeb7f8adec';
  const location = useLocation();

  const getFilms = () => {
    axios
      .get(`${API_GET}movie/week?api_key=${API_KEY}`)
      .then(res => {
        const { results } = res.data;
          setPopFilms(results);          
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getFilms();
  }, []);
  return (
    <ul className={s.list}>
      {popFilms.map(({ id, title }) => {
        return (
          <li key={id} className={s.link}>
            <Link
                    to={`/movie/${id}`}
                    state={location.pathname}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default HomePage;
