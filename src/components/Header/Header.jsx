import { Link } from "react-router-dom";
import UserConnectedNav from "./UserConnectedNav";
import UserNotConnectedNav from "./UserNotConnectedNav";

export default function Header (){
    // todo replace with redux state
    const isConnected = false;

    return(
        <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
            <img
            className="main-nav-logo-image"
            src="./assets/argentBankLogo.png"
            alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        { isConnected 
            ? <UserConnectedNav/> 
            : <UserNotConnectedNav/> 
        }  
        </nav>
    )
}