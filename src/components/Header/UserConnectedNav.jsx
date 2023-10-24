import { Link } from "react-router-dom";

export default function UserConnectedNav() {

    const handleSignOut = () => {
        sessionStorage.removeItem("authToken");
        window.location.href= "/";
    };

    return (
        <div>
            <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            Tony
            </Link>
            <Link onClick={handleSignOut} className="main-nav-item" to="/">
            <i className="fa fa-sign-out"></i>
            Sign Out
            </Link>
      </div>
    );
}