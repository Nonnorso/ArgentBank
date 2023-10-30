import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchUserProfile } from '../../actions/profileActions'
import { Link } from "react-router-dom";
import UserConnectedNav from "./UserConnectedNav";
import UserNotConnectedNav from "./UserNotConnectedNav";

const Header = ({ userName, fetchUserProfile }) => {
  
    useEffect(() => {
      const authToken = sessionStorage.getItem('authToken');
      if (authToken && !userName) {
        fetchUserProfile(authToken);
      }
    }, [fetchUserProfile, userName]);
  
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
        {userName ? <UserConnectedNav /> : <UserNotConnectedNav />}
      </nav>
    );
  }

  const mapStateToProps = state => {
    return {
      userName: state.profile.userProfile.userName
    };
  };
  
  const mapDispatchToProps = {
    fetchUserProfile
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header);