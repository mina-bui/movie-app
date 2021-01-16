// Footer

function Footer() {

  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer>
      <div class="contact">
        <h3>Get in Touch</h3>

      </div>
      <div class="contact-info">
        <h5>Email</h5>
        <p>
          customerservice@filmdex.ca
            <br></br>
            (604)-123-456
          </p>
      </div>
      <div class="social">
        <h5>Social Media</h5>

        <a href="www.instagram.com">
          <img src="/../assets/images/instagram-icon.png"></img>
        </a>

        <a href="www.facebook.com">
          <img src="/../assets/images/facebook-icon.png"></img>
        </a>

        <a href="www.twitter.com">
          <img src="/../assets/images/twitter-icon.png"></img>
        </a>

      </div>
      <div class="location">
        <h3>Where We Are</h3>
      </div>
      <div class="address">
        <h5>Address</h5>
        <p>
            Filmdex Headquarters
            <br></br>
            555 Seymour Street
            <br></br>
            Vancouver, BC V6B 3H6
          </p>
      </div>
      <p>&copy; {year} Movie Corp.</p>
    </footer>
  );
}

export default Footer;
