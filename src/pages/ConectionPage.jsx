import React from "react";
import { connect } from "react-redux";
import Form from "../components/Form";
import { loginUser } from "../actions/userActions";


function SignIn({ loginUser, loggedIn }) {
  return (
    <main className="main bg-dark">
      <Form loginUser={loginUser} loggedIn={loggedIn} />
    </main>
  );
}

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
});

export default connect(mapStateToProps, { loginUser })(SignIn);