import { Link } from "react-router-dom";

export default function UserConnectedNav() {
    return (
        <div>
            <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            Tony
            </Link>
            <Link className="main-nav-item" to="/">
            <i className="fa fa-sign-out"></i>
            Sign Out
            </Link>
      </div>
    );
}