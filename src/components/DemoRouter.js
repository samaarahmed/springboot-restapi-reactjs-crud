import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, useLocation, useParams, Redirect } from "react-router-dom";


const DemoRouter = () => {
    return (
        <div className='container'>
                        <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/welcome" component={Welcome} />
                    <Route path="/home" component={Home} />
                    <Route path="/person" component={Person}/>

                    <Route path="/about" component={About}/>



                </Switch>
            </Router>

        </div>
    );
};
const Header = () => {
    return (
        <Fragment>
            <ul className="nav nav-pills nav-fill bg-dark text-white">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Welcome</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/person">Person</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
            </ul>
        </Fragment>
    );
}
const Welcome = () => <h3>Welcome</h3>
const Home = () => <h3>Home</h3>
const Person = () => <h3>Person</h3>
const About = () => <h3>About</h3>
const NotFound = () => <h3>NotFound</h3>



export default DemoRouter;