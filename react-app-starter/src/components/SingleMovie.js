// Single Movie

const SingleMovie = () => {

  /*   function toggleOverview() {
      var OverviewInfo = document.getElementsByClassName("overview-info");
      if (OverviewInfo.style.display === "none") {
        OverviewInfo.style.display = "block";
      } else {
        OverviewInfo.style.display = "none";
      }
    }
  
    function toggleMedia() {
      var MediaInfo = document.getElementsByClassName("media-info");
      if (MediaInfo.style.display === "none") {
        MediaInfo.style.display = "block";
      } else {
        MediaInfo.style.display = "none";
      }
    }
  
    function toggleRelated() {
      var RelatedInfo = document.getElementsByClassName("related-info");
      if (RelatedInfo.style.display === "none") {
        RelatedInfo.style.display = "block";
      } else {
        RelatedInfo.style.display = "none";
      }
    } */

  return (

    <section className="single-movie-section">
      <section className="grid-container">
        <div className="title-desc">
          <h2>Memories of Murder</h2>
          <p>Release Date: 10/19/2020</p>
          <p>Crime, Drama, Thriller</p>
          <p>Runtime: 2H1 11M</p>
        </div>

        <div className="poster">
          <img src="https://www.insidethekraken.com/wp-content/uploads/2018/10/Memories-of-Murder-poster.jpg"></img>
          <p><img src="/../assets/images/play_icon.png" className="play_icon"></img><a href="#0">Watch Trailer</a></p>
        </div>

        <div className="rating">
          <p className="singlemovie-rating">Rating: <span>81%</span></p>
        </div>

        <div className="fave">
          <p><img src="/../assets/images/favourite_icon.png" className="favourite_icon"></img><a href="#0">Add / Remove Favorites</a></p>
        </div>

        {/*         <div className="overview" onClick={toggleOverview()}>
 */}        <div className="overview">
          <h3><a href="#0" className="not-active">Overview</a></h3>
        </div>

        {/*         <div className="media" onClick={toggleMedia()}>
 */}        <div className="media">
          <h3><a href="#0">Media</a></h3>
        </div>

        {/*         <div className="related" onClick={toggleRelated()}>
 */}        <div className="related">
          <h3><a href="#0">Related Movies</a></h3>
        </div>

        <div className="tab-info">
          <div className="overview-info">
            <p>In 1986, Park (Song Kang-ho) and Cho (Kim Roi-ha) are two simple-minded detectives assigned to a double murder investigation in a South Korean province. But when the murderer strikes several more times with the same pattern, the detectives realize that they are chasing the country's first documented serial killer. Relying on only their basic skills and tools, Park and Jo attempt to piece together the clues and solve the case in this thriller based on true events.</p>
          </div>
          <div className="media-info">
            <p>Media Info Section</p>
          </div>
          <div className="related-info">
            <p>Related Info Section</p>
          </div>
        </div>

      </section>
    </section>
  );
}

export default SingleMovie;
