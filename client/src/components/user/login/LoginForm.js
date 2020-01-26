import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      email: ""
    };
  }

  render() {
    return (
      <div
        className="border shadow rounded col-md-8 offset-md-2 
      col-md-8 offset-md-2 "
        style={{ padding: "20px" }}
      >
        <form>
          <div className="form-group font-weight-bold">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="form-control"
              type="text"
              placeholder="you@me.com"
              style={{ textAlign: "center" }}
            />
          </div>
          <div className="form-group font-weight-bold">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="form-control"
              type="password"
              placeholder="........."
              style={{ textAlign: "center" }}
            />
          </div>
          <input className="btn btn-secondary" type="submit" value="Log-In" />
        </form>
        <p></p>
        <h6>Dont have an account?</h6>
        <Link to="/signup">Sign Up here</Link>
      </div>
    );
  }
}

export default LoginForm;
