// Header
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Header() {
	return (
		<header>
			<div className="header-row header-row-01">
				<h1><Link to={'/'}>Cinedex</Link></h1>
				<button className="btn-main-nav">
					<span className="hamburger-icon">
						<span className="line"></span>
						<span className="line"></span>
						<span className="line"></span>
					</span>
					<span className="sr-only">Menu</span>
				</button>
			</div>

			<div className="search-bar"></div>

			<div className="header-row header-row-nav">
				<Nav />
			</div>

			<div className="header-form-select">
				<ul>
					<li className="form-select popular">Popular</li>

				</ul>
			</div>



    	</header>
  	);
}

export default Header;
