import './Header.css'

function Header(props) {
    return (
        <div className="header-main">
            <div className="header-content">
                {props.children}
            </div>
        </div>
    );
}

export default Header;