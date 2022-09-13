import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <div className="brand">
            <i className="bi bi-building"></i>
            <span>BizAd</span>
            </div>
            <div className="nav-options">
                <span>
                    Services
                </span>
                <span>
                    About
                </span>
            </div>
        </nav>
    );
}

export default Navbar;