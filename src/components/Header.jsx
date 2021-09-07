import logo from '../logo.svg';
import "./Header.css";

const Header = () => {
    return (
        <header className="header-wrapper">
            <img className="logo" src={logo} alt="logo" />
            <h1 className="app-name">Todo-App</h1>
        </header>
    )
}

export default Header;