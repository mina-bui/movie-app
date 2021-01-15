// Nav
import { NavLink } from 'react-router-dom';

const Nav = ({ hideNav }) => (

    <nav onClick={hideNav}>
        <ul>
            <li>
                <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/favourites'}>Favourites</NavLink>
            </li>
            <li>
                <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
                <NavLink to={'/single-movie'}>Single Movie</NavLink>
            </li>
        </ul>
    </nav>
  );


export default Nav;
