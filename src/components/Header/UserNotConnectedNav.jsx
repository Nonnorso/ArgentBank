import { Link } from "react-router-dom";
import '../../Styles/header.css'

export default function UserNotConnectedNav() {
    return (
        <div>
          <Link className="main-nav-item" to="./sign-in">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
      </div>
    );
}