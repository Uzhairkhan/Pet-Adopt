import React from "react";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import LoginShow from "./components/user/login/LoginShow";
import RegShow from "./components/user/register/RegisterShow";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-light" style={{ background: "	#FFFACD" }}>
          <div className="App-Header">
            <h1
              className="font-weight-bold "
              style={{ fontFamily: "Brush Script MT", color: "#008000" }}
            >
              Pet@dopt
            </h1>
            <div className="col-md offset-md-6  font-weight-bolder font-italic">
              <h5
                style={{
                  fontFamily: "Brush Script MT",
                  fontSize: "30px",
                  color: "#483D8B"
                }}
              >
                adopt for a change
              </h5>
            </div>
            <div></div>
          </div>
          <div className="nav" style={{ fontFamily: "Segoe UI" }}>
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
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
