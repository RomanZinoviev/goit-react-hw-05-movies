import { NavLink, Outlet} from 'react-router-dom';
import s from '../Navigation/Navigation.module.css';

 const Navigation = () => (
  <><nav className={s.navigate}>
    <NavLink className={s.link} to="/">
      Home
    </NavLink>
    <NavLink className={s.link} to="/movies">
      Find
    </NavLink>    
  </nav>
    <Outlet />
  </>
);
export default Navigation;
