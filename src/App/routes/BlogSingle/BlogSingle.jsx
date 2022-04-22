import { singleBlogData } from "./data";
import { GoPrimitiveDot } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";
import { Clamp, Footer } from "../../components";

import "./BlogSingle.scss";
import { usePointer } from "../../contexts/CustomCursorProvider";

const BlogSingle = () => {
  const pointer = usePointer();

  return (
    <div className="blog-single">
      <div className="wrapper">
        <img src={singleBlogData.cover.src} alt={singleBlogData.cover.alt} />
        <div className="main-content">
          <div className="single-blog-header">
            <span>
              {singleBlogData.author.name}
              <GoPrimitiveDot />
              {singleBlogData.date.toLocaleString("en-US", {
                month: "long",
                year: "numeric",
                day: "2-digit",
              })}
            </span>
            <h1>{singleBlogData.title}</h1>
            <p>{singleBlogData.subtitle}</p>
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: singleBlogData.content }}
          ></div>
          <div className="recommendeds">
            <h5>
              Want to read <span>more</span>?
            </h5>
            <div className="container">
              {singleBlogData.recommendeds.map(({ title, cover, date }, i) => (
                <div
                  key={`recommended-car-${i}`}
                  className="recommended-card"
                  {...pointer}
                >
                  <img src={cover} alt={title} />
                  <Clamp clamp={2} element="h6">
                    {title}
                  </Clamp>
                  <span>
                    <BiTimeFive />
                    {date.toLocaleString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogSingle;
