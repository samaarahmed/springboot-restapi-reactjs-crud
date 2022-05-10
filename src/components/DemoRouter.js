import React, { Fragment, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams,
  Redirect,
} from "react-router-dom";

const DemoRouter = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/home" component={Home} />
          <Route path="/person" component={Person} />

          <Route path="/about" component={About} />
          <Redirect to="/home" />
        </Switch>
      </Router>
    </div>
  );
};
const Header = () => {
  return (
    <Fragment>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/home">
            React
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/person">
                  Person
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <button class="btn btn-primary" type="button">
              SignUp
            </button>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
const Welcome = () => <h3>Welcome</h3>;
const Home = () => <h3>Welcome to Home</h3>;
const Person = () => <h3>Person</h3>;
const About = () => <h3>About</h3>;
const NotFound = () => <h3>NotFound</h3>;

export default DemoRouter;
