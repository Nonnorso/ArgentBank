import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../actions/userActions";
import RememberMe from "../components/RememberMe";
import '../Styles/form.css'

function Form({loginUser}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = () => {
    setError(null);

    if (!formData.username || !formData.password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    loginUser(formData, navigate, setError);
    RememberMe(formData, rememberMe);
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" 
          id="remember-me" 
          checked={rememberMe}
          onChange={handleRememberMeChange}/>
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="button" onClick={handleSubmit} className="sign-in-button">
          Sign In
        </button>
      </form>
    </section>
  );
}

export default connect(null, { loginUser })(Form);