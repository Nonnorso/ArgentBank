import { Link } from "react-router-dom";
import UserConnectedNav from "./UserConnectedNav";
import UserNotConnectedNav from "./UserNotConnectedNav";

export default function Header (){
    // todo replace with redux state
    const isConnected = false;

    return(
        <nav class="main-nav">
        <Link class="main-nav-logo" to="/">
            <img
            class="main-nav-logo-image"
            src="./assets/argentBankLogo.png"
            alt="Argent Bank Logo"
            />
            <h1 class="sr-only">Argent Bank</h1>
        </Link>
        
        { isConnected 
            ? <UserConnectedNav/> 
            : <UserNotConnectedNav/> 
        }
    
        
        </nav>
    )

}