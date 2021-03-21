import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import gitLogo from './asset/icons/github.png';
class ProjectComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container text-white text-center mt-5">
          <div className="jumbotron">
            <h1 className="display-4 text-info">Portfolio Project</h1>
            <hr className="my-4 bg-transparent" />
            <p className="lead">The following are some of the projects I chose, for more you can visit my github</p>
            <a className="btn transparent btn-outline-info text-white" href="https://github.com/MuhamadIchsan">
              My github
              <img src={gitLogo} height="30" width="30" />
            </a>

            <div className="row text-center text-white mt-5">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-6">
                    <img src={gitLogo} />
                  </div>
                  <div className="col-lg-6">
                    <p className="fw-bold mt-5">Tools</p>
                    <p className="fw-light">MySQL, Laravel, Bootstrap</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectComponent;
