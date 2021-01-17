// SideMenu
import Nav from './Nav';
import { Link } from 'react-router-dom';


function MainNavigation() {

    return (
        <section className="main-navigation">
            <div className="side-menu-main">

                <div className="side-logo-button">
                    <Link to={'/'}><img className="side-logo" src="/assets/images/database_logo_green.png" alt='Movie Database Logo' /></Link>
                </div>

                <div className="side-menu-search">
                    <div className="side-menu-search-icon">
                        <Link to={'/'}><img src="/assets/images/search_icon.png" alt="Search Bar Icon" /></Link>
                    </div>
                    <div className="search-bar-line"></div>
                </div>

                <div className="side-menu-nav">
                    <div className="side-home-button">
                        <div className="side-home-logo">
                            <Link to={'/'}><img src="/assets/images/home_button_icon.png" alt="Home Button Icon" /></Link>
                        </div>
                        <Link to={'/'}><div className="side-home-name">Home</div></Link>
                    </div>

                    <div className="side-favourites-button">
                        <div className="side-favourites-logo">
                            <Link to={'/favourites'}><img src="/assets/images/favourite_icon.png" alt="Favourite Icon" /></Link>
                        </div>
                        <div className="side-favourites-link">
                            <Link to={'/favourites'}><div className="side-favourites-name">Favourites</div></Link>
                        </div>
                    </div>

                    <div className="side-about-button">
                        <div className="side-about-logo">
                            <Link to={'/about'}><img src="/assets/images/about_icon.png" alt="About Icon" /></Link>
                        </div>
                        <div className="side-about-link">
                            <Link to={'/about'}><div className="side-about-name">About</div></Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default MainNavigation;
