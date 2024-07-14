import Header from "./Header.css"
import logo from "../../images/SunnySpoonLogo.svg"
function Header () {
    return (<header className="header">
        <img className="header__logo" src={logo} />
        <nav className="nav" />
    </header>
    )
}