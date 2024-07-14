import footerSpoon from "../../images/Spoon-Footer.svg";
import instagramIcon from "../../images/Insta.svg";
import youtubeIcon from "../../images/Youtube.svg";

function Footer() {
  return (
    <footer className="footer" id="link-contact">
      <p className="footer__copyright">
        &copy; 2024 Prince Raval, Cordilia Crow-Drummond, <br />
        Jennifer Akanoh, and Michael Watson
      </p>
      <div className="footer__content">
        <img src={footerSpoon} alt="Spoon" className="footer__logo" />
      </div>
      <div className="footer__social">
        <img
          src={instagramIcon}
          alt="Instagram Icon"
          className="footer__social-icon"
        />
        <img
          src={youtubeIcon}
          alt="Youtube Icon"
          className="footer__social-icon"
        />
      </div>
    </footer>
  );
}

export default Footer;
