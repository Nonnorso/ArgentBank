import { Link } from "react-router-dom";

export default function UserNotConnectedNav() {
    return (
        <div>
          <Link class="main-nav-item" to="./sign-in">
            <i class="fa fa-user-circle"></i>Sign In
          </Link>
      </div>
    );
}