import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUserProfile } from "../../actions/profileActions";

const UserConnectedNav = ({ userName, fetchUserProfile }) => {
  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (token) {
      fetchUserProfile(token);
    }
  }, [fetchUserProfile, userName]);

  const handleSignOut = () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("password");
    window.location.href = "/";
  };

  return (
    <div>
      <Link className="main-nav-item" to="/user">
        <i className="fa fa-user-circle"></i> {userName}
      </Link>
      <Link onClick={handleSignOut} className="main-nav-item" to="/">
        <i className="fa fa-sign-out"></i>
        Sign Out
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
    return {
      userName: state.profile.userProfile.userName 
    };
  };

const mapDispatchToProps = {
  fetchUserProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(UserConnectedNav);