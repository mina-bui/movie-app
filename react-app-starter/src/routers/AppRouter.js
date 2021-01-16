// App Router
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import SingleMovie from '../components/SingleMovie';
import Favourites from '../components/Favourites';
import MainNavigation from '../components/MainNavigation';

function AppRouter() {

  const [navOpen, setNavOpen] = useState(false);

  function handleOpenNav(){
    setNavOpen(!navOpen);
  }

  return (
    <Router>
      <div className={navOpen ? 'wrapper show' : 'wrapper hide'}>
        <Header handleOpenNav={handleOpenNav} navOpen={navOpen} />
        <main>
          <MainNavigation />
          <Switch>
            <Route path={'/'} exact><Home /></Route>
            <Route path={'/about'}><About /></Route>
            <Route path={'/single-movie'}><SingleMovie /></Route>
            <Route path={'/favourites'}><Favourites /></Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
