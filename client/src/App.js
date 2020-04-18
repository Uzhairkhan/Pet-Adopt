import React from "react";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import Home from "./components/Home";
import About from "./components/About";
import LoginShow from "./components/user/login/LoginShow";
import RegShow from "./components/user/register/RegisterShow";
import PetShow from "./components/pets/PetShow";
import PetAdd from "./components/pets/PetAdd";
import TypeShow from "./components/type/TypeShow";
// import SocialMedia from "./components/Socialmedia";

function App() {
  return (
    <BrowserRouter>
      <div className="landing">
        <nav className="navbar navbar-light">
          <div className="App-Header">
            <h1
              className="font-weight-bold "
              style={{ fontFamily: "Brush Script MT", color: "white" }}
            >
              Pet@dopt
            </h1>
            <div className="col-md offset-md-6  font-weight-bolder font-italic">
              <h5
                style={{
                  fontFamily: "Brush Script MT",
                  fontSize: "30px",
                  color: "white",
                }}
              >
                adopt for a change
              </h5>
            </div>
            <div></div>
          </div>
          <div
            className="nav"
            style={{ fontFamily: "Segoe UI", color: "white" }}
          >
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/pets" className="nav-link">
              Pets
            </Link>
            <Link to="/breeds" className="nav-link">
              Breeds
            </Link>
            <Link to="/types" className="nav-link">
              Type
            </Link>
            <Link to="/adopt" className="nav-link">
              Adopt
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/login" className="nav-link">
              Login/Sign-Up
            </Link>
          </div>
        </nav>
      </div>

      <div id="petShow">
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/about" component={About} />
          <Route path="/login" component={LoginShow} />
          <Route path="/signup" component={RegShow} />
          <Route path="/pets" component={PetShow} exact={true} />
          <Route path="/pets/add" component={PetAdd} />
          <Route path="/types" component={TypeShow} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
