import { Fragment, memo } from "react";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import DownloadAppButton from "../../routes/Home/components/FourtBody/DownloadAppButton/DownloadAppButton";
import { usePointer } from "../../contexts/CustomCursorProvider";
import { Clamp } from "..";

import "./Footer.scss";
import "./MediaQueries.scss";
import footer from "../../data/footer";
import { Link } from "react-router-dom";

const Footer = memo(() => {
  const date = new Date();
  const pointer = usePointer();

  const handleSubmit = e => e.preventDefault(); // Integrate with backend.

  return (
    <Fragment>
      <div className="e-mail" data-scroll>
        <div className="content">
          <h4>Join to our e-mail list</h4>
          <p>
            Subscribe to our e-mail list to get latest news from our community
            and be the first to take advantages of opportunities.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="email-input">
            <input type="text" name="e-mail" id="e-mail" required />
            <label htmlFor="e-mail">E-Mail</label>
          </div>
          <button {...pointer}>Subscribe</button>
        </form>
      </div>
      <footer className="footer">
        <section>
          <main>
            <aside>
              <article className="info">
                <h4>{footer.infoTitle}</h4>
                <Clamp clamp={6}>{footer.infoContent}</Clamp>
              </article>
              <article className="links">
                {footer.navigationLinks.map(({ name, path }, i) => (
                  <Link className="link" to={path} key={`footer-link-${i}`}>
                    <p>{name}</p>
                  </Link>
                ))}
              </article>
            </aside>
            <aside>
              <div className="social">
                <h4>Social</h4>
                <div className="icons">
                  <a className="link" href={footer.socialMediaLinks.instagram}>
                    <AiOutlineInstagram />
                  </a>
                  <a className="link" href={footer.socialMediaLinks.youtube}>
                    <AiOutlineYoutube />
                  </a>
                  <a className="link" href={footer.socialMediaLinks.twitter}>
                    <AiOutlineTwitter />
                  </a>
                </div>
              </div>
              <div className="app">
                <h4>{footer.appSectionTitle}</h4>
                <DownloadAppButton platform="apple" />
                <span></span>
                <DownloadAppButton platform="google" />
              </div>
            </aside>
          </main>
          <div className="horizontal-separator"></div>
          <aside>
            <div>
              <img src={footer.flag.src} alt={footer.flag.alt} />
              <p>France</p>
              <span>
                &copy; {date.getFullYear()} {footer.trademark}
              </span>
            </div>
            <div>
              <h6>
                <Link className="link" to={footer.legacyLinks.termsOfUse}>
                  Terms of Use
                </Link>{" "}
              </h6>
              <h6>
                <Link className="link" to={footer.legacyLinks.privacyPolicy}>
                  Privacy & Cookie Policy
                </Link>
              </h6>
              <h6>
                <Link className="link" to={footer.legacyLinks.cookieSettings}>
                  Cookie Settings
                </Link>
              </h6>
            </div>
          </aside>
        </section>
      </footer>
    </Fragment>
  );
});

export default Footer;
