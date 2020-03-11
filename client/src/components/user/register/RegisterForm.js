import React from "react";
import { Link } from "react-router-dom";

class RegForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      address: "",
      currentAddress: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div
        className="border shadow rounded col-md-8 offset-md-2 
            col-md-8 offset-md-2 "
        style={{ padding: "20px" }}
      >
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">First-Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Last-Name</label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="me@you.com"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              placeholder="98xxxxxxxx"
              name="mobile"
              value={this.state.mobile}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress2">Current Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              name="currentAddress"
              value={this.state.currentAddress}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="confirm_password">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirm_password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleConfirm}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
        <p></p>
        <h6>Already have an account?</h6>
        <Link to="/login">Login here</Link>
      </div>
    );
  }
}

export default RegForm;
