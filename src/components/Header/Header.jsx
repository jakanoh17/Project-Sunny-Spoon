import Header from "./Header.css"
import logo from "../../images/SunnySpoonLogo.svg"
function Header () {
    return (<header className="header">
        <img className="header__logo" src={logo} />
        <div className="nav__bar">
        <nav className="nav"></nav>
        </div>
    </header>
    )
}