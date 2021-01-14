// Header
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Header() {
	return (
		<header>
			<div className="header-row">
				<h1><Link to={'/'}>Cinedex</Link></h1>
				<button className="btn-main-nav">
					<span className="hamburger-icon">
						<span className="line"></span>
						<span className="line"></span>
						<span className="line"></span>
					</span>
					<span className="sr-only">Menu</span>
				</button>
				<div className="search-bar"></div>
			</div>

			<div className="header-row">
				<Nav />
			</div>
    	</header>
  	);
}

export default Header;
