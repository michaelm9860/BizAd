import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <Link to={"/"} className="brand">
            <i className="bi bi-building"></i>
            <span>BizAd</span>
            </Link>
            <div className="nav-options">
                <Link to={'/services'}>
                    Services
                </Link>
                <Link to={'/about'}>
                    About
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;