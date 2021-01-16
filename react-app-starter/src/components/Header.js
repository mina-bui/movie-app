// Header
//import Nav from './Nav';
import { Link } from 'react-router-dom';
//import Navbar from './Nav/Navbar';


const Header = ({ handleOpenNav }) => {

	return (
		<header>
			<div className="header-row header-row-01">
				<Link to={'/'}>
					<img className="header-logo" src="/assets/images/database_logo_green.png" alt='Movie Database Logo' />
				</Link>

				<div className="search-bar"></div>
				<div className="search-bar-icon">
					<img src="/assets/images/search_icon.png" alt="Search Bar Icon"/>
				</div>
		
				<button className="btn-main-nav" onClick={handleOpenNav}>
					<span className="hamburger-icon">
						<span className="line"></span>
						<span className="line"></span>
						<span className="line"></span>
					</span>
					<span className="sr-only">Menu</span>
				</button>
			</div>

			<div className="header-form-select">
				<div className="form-popular">
					<a href="#">Popular</a>
				</div>
				<div className="form-top-rated">
					<a href="#">Top Rated</a>
				</div>
				<div className="form-upcoming">
					<a href="#">Upcoming</a>
				</div>
				<div className="form-now-playing">
					<a href="#">Now Playing</a>
				</div>
			</div>
    	</header>
  	);
}

export default Header;
