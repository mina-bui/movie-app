// Footer

function Footer() {

  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer>
      <div className="footer-grid">
        <div className="contact">
          <h3>Get in Touch</h3>
        </div>

        <div className="contact-info">
          <h5>Email</h5>
          <p>mbui14@my.bcit.ca<br></br>(604)-412-7773</p>
        </div>

        <div className="social">
          <h5>Social Media</h5>
          <a href="www.instagram.com"><img src="/../assets/images/instagram-icon.png" id="instagram-icon"></img></a>
          <a href="www.facebook.com"><img src="/../assets/images/facebook-icon.png" id="facebook-icon"></img></a>
          <a href="www.twitter.com"><img src="/../assets/images/twitter-icon.png" id="twitter-icon"></img></a>

        </div>

        <div className="location">
          <h3>Where We Are</h3>
        </div>

        <div className="address">
          <h5>Address</h5>
          <p>555 Seymour Street<br></br>Vancouver, BC<br></br>V6B 3HP</p>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; {year} Filmdex</p>
      </div>

    </footer>
  );
}

export default Footer;