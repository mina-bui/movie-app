// App Router
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import SingleMovie from '../components/SingleMovie';
import Favourites from '../components/Favourites';
import SideMenu from '../components/SideMenu';

function AppRouter() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <SideMenu />
          <Switch>
              <Route path={'/'} exact><Home /></Route>
              <Route path={'/about'}><About /></Route>
              <Route path={'/single-movie'}><SingleMovie /></Route>
              <Route path={'/favourites'}><Favourites /></Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
