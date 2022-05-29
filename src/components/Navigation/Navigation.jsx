import { NavLink} from 'react-router-dom';
import s from '../Navigation/Navigation.module.css';

export const Navigation = () => (
  <nav>
    <NavLink className={s.link} activeClassName={s.activLink} exact to="/">
      Home
    </NavLink>
    <NavLink className={s.link} activeClassName={s.activLink} to="/movies">
      Find
    </NavLink>
    <NavLink
      className={s.link}
      activeClassName={s.activLink}
      to="/movies/:movieId"
    >
      Movie Details
    </NavLink>
  </nav>
);
