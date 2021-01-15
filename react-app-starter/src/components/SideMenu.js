// SideMenu
import Nav from './Nav';
import { Link } from 'react-router-dom';


function SideMenu() {

  return (
    <main>
        <section>
            <div className="side-menu-main">
                <div className="side-logo-button">
                    <Link to={'/'}>
                        <img className="side-logo" src="/assets/images/database_logo_green.png" alt='Movie Database Logo' />
                    </Link>
                </div>

                <div className="side-menu-search">
                    <div className="side-menu-search-icon">
                        <img src="/assets/images/search_icon.png" alt="Search Bar Icon"/>
                    </div>
                    <div className="search-bar-line"></div>
                </div>

                <div className="side-menu-nav">
                    <div className="side-home-button">
                        <div className="side-home-logo">
                            <img src="/assets/images/home_button_icon.png" alt="Home Button Icon"/>
                        </div>
                        <div className="side-home-link">
                            <a href="#0">Home</a>
                        </div>
                    </div>

                    <div className="side-favourites-button">
                        <div className="side-favourites-logo">
                            <img src="/assets/images/favourite_icon.png" alt="Favourite Icon"/>
                        </div>
                        <div className="side-favourites-link">
                            <a href="#0">Favourites</a>
                        </div>
                    </div>

                    <div className="side-about-button">
                        <div className="side-about-logo">
                            <img src="/assets/images/about_icon.png" alt="About Icon"/>
                        </div>
                        <div className="side-about-link">
                            <a href="#0">About</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
}

export default SideMenu;
