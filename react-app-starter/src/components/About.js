// About
import { Link } from 'react-router-dom';

function About() {
  return (
 
     
      <section>
         <Link to={'/'} className="go-back">&#5176; Back</Link>
        <h2>About MoviesGo</h2>
        <p>
          MoviesGo is a movie database site hoping to satisfy the cinema needs of movie
          buffs. Whether you are planning to watch a new upcoming release, or want to
          learn more about solid block-buster classics, MoviesGo aims to provide a
          beautiful and seamless experience for all.
        </p>
        <p>
          Please feel free to browse through our selections. If there are any movies that
          interest you, go ahead and add them to your Favorites.
        </p>
        <p>
          This product uses the TMDb API but is not endorsed or certified by TMDb.
          For educational purposes only.
        </p>
      </section>
    
  );
}

export default About;
