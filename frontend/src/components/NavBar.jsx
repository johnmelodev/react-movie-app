import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/Favorites">Favorites</Link>
      </div>
    </nav>
  );
}

export default NavBar;
