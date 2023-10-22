import { Link } from "react-router-dom";

export default function UserConnectedNav() {
    return (
        <div>
            <Link class="main-nav-item" to="/user">
            <i class="fa fa-user-circle"></i>
            Tony
            </Link>
            <Link class="main-nav-item" to="/">
            <i class="fa fa-sign-out"></i>
            Sign Out
            </Link>
      </div>
    );
}