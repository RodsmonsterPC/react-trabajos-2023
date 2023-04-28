import "./navbar.css";
import logo from "./images/logo.svg";
const Navbar = () => {
  return (
    <>
      <nav className="navbar-menu">
        <div className="logo-menu">
          <img src={logo} alt="logo" />
          <div className="browser">
            <a href="youtube.com">Features</a>
            <a href="youtube.com">Company</a>
            <a href="youtube.com">Careers</a>
            <a href="youtube.com">About</a>
          </div>
        </div>
        <div>
          <button className="btn-login">Login</button>
          <button className="btn-register">Register</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
