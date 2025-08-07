import Header from "../components/header.js";
import Footer from "../components/footer.js";

function Detail() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="subforum">
          <div className="subforum-title">
            <h1>General Information</h1>
          </div>
          {[...Array(5)].map((_, index) => (
            <div key={index}>
              <div className="subforum-row">
                <div className="subforum-icon subforum-column center">
                  <i className="fa fa-car center"></i>
                </div>
                <div className="subforum-description subforum-column">
                  <h4><a href="#">Description Title</a></h4>
                  <p>
                    Description Content: let's try to be cool, otherwise, what's the point in living together with people you don't live.
                  </p>
                </div>
                <div className="subforum-stats subforum-column center">
                  <span>24 Posts | 12 Topics</span>
                </div>
                <div className="subforum-info subforum-column">
                  <b><a href="">Last post</a></b> by <a href="">JustAUser</a>
                  <br />on <small>12 Dec 2020</small>
                </div>
              </div>
              {index !== 4 && <hr className="subforum-devider" />}
            </div>
          ))}
        </div>

        <div className="subforum">
          <div className="subforum-title">
            <h1>General Information</h1>
          </div>
          {[...Array(4)].map((_, index) => (
            <div key={index}>
              <div className="subforum-row">
                <div className="subforum-icon subforum-column center">
                  <i className="fa fa-car center"></i>
                </div>
                <div className="subforum-description subforum-column">
                  <h4><a href="#">Description Title</a></h4>
                  <p>
                    Description Content: let's try to be cool, otherwise, what's the point in living together with people you don't live.
                  </p>
                </div>
                <div className="subforum-stats subforum-column center">
                  <span>24 Posts | 12 Topics</span>
                </div>
                <div className="subforum-info subforum-column">
                  <b><a href="">Last post</a></b> by <a href="">JustAUser</a>
                  <br />on <small>12 Dec 2020</small>
                </div>
              </div>
              {index !== 3 && <hr className="subforum-devider" />}
            </div>
          ))}
        </div>
      </div>

      <div className="forum-info">
        <div className="chart">
          MyForum - Stats &nbsp;<i className="fa fa-bar-chart"></i>
        </div>
        <span><u>5,369</u> Posts in <u>48</u> Topics by <u>8,124</u> Members.</span><br />
        <span>
          Latest post: <b><a href="">Random post</a></b> on Dec 15 2021 By <a href="">RandomUser</a>
        </span><br />
        <span>Check <a href="">the latest posts</a>.</span><br />
      </div>
      <Footer />
    </>
  );
}

export default Detail;
