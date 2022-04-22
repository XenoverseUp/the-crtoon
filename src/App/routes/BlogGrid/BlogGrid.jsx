import SearchBar from "./components/SearchBar/SearchBar";
import Subscribe from "./components/Subscribe/Subscribe";
import { casualData, higlightsData } from "./data";
import Highlight from "./components/Highlight/Highlight";
import DetailedFeedElement from "./components/DetailedFeedElement/DetailedFeedElement";
import { Footer } from "../../components";

import "./BlogGrid.scss";
import "./MediaQueries.scss";

const blogGrid = () => {
  return (
    <div className="blog-one">
      <div className="wrapper">
        <div className="blog-grid-header">
          <SearchBar />
          <h2>
            Some digital insights on <b>CRTOON</b> world.
          </h2>
          <p>
            Welcome to the <b>CRTOON</b> blog. You can find the writings of
            other users about the series you watched. Why don't you pick one and
            start reading?
          </p>
          <Subscribe />
        </div>
        <div className="content">
          <div className="blog-grid">
            <h3>Feed</h3>
            <div className="blogs">
              {casualData.map((data, i) => (
                <DetailedFeedElement key={`detailed-feed-${i}`} {...{ data }} />
              ))}
            </div>
          </div>

          <div className="blog-highlights">
            <h3>Highlights</h3>
            <div className="highlight-container">
              {higlightsData.map((data, i) => (
                <Highlight {...data} key={`blog-highlight-${i}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default blogGrid;
