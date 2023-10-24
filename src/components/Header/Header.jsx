import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserConnectedNav from "./UserConnectedNav";
import UserNotConnectedNav from "./UserNotConnectedNav";

export default function Header() {
    const [isConnected, setIsConnected] = useState(false);
  
    useEffect(() => {
      const authToken = sessionStorage.getItem("authToken");
      setIsConnected(authToken !== null);
    }, []);
  
    return (
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src="./assets/argentBankLogo.webp"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {isConnected ? <UserConnectedNav /> : <UserNotConnectedNav />}
      </nav>
    );
  }