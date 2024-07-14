import logo from "../../images/SunnySpoonLogo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Sunny Spoon Logo" className="header__logo" />
      <nav className="nav">
        <ul className="nav__links">
          <li className="nav__link">
            <a href="#link-home">Home</a>
          </li>
          <li className="nav__link">
            <a
              href="https://github.com/prince21241/Project-Sunny-Spoon/blob/main/README.md"
              target="_blank"
            >
              About
            </a>
          </li>
          <li className="nav__link">
            <a href="#link-contact">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
