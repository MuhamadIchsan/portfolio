import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import AboutComponent from './AboutComponent';
import InfoComponent from './InfoComponent';
import ProjectComponent from './ProjectComponent';
import CovidComponent from './CovidComponent';
import './asset/style.css';
import logo from '../logo.svg';
import AOS from 'aos';

function home() {
  return <HomeComponent/>
}
function about() {
  return <AboutComponent/>
}
function project() {
  return <InfoComponent/>
}
function info() {
  return <CovidComponent/>
}
function notpage() {
  return <p>not found</p>
}

class Navbar extends Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
              <div className="container">
                <a className="navbar-brand fw-bold">Muhamad <span className="text-light-green">Ichsan</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav ms-auto fw-bold">
                    <Link className="nav-link text-white a-hov" to="/">
                      Home
                    </Link>
                    <Link className="nav-link text-white a-hov" to="/about">
                      About
                    </Link>
                    <Link className="nav-link text-white a-hov" to="/info">
                      Covid Info
                    </Link>
                    <Link className="nav-link text-white a-hov" to="/project">
                      Project
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </header>

          <main className="mb-6">
            <Switch>
              <Route path="/" exact component={home} />
              <Route path="/about" exact component={about} />
              <Route path="/info" exact component={info} />
              <Route path="/project" exact component={project} />
              <Route exact component={notpage} />
            </Switch>
          </main>

          <footer className="text-center page-footer font-small blue pt-4 text-white">
            <div className="footer-copyright text-center py-3">Made with React</div>
          </footer>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default Navbar;
