import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Typical from 'react-typical';

class InfoComponent extends Component {
  render() {               
    return (
      <React.Fragment>
        <div className="container" data-aos="fade-down" data-aos-duration="1000">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <img src="https://blush.design/api/download?shareUri=WoJm3LUSu&c=Skin_0%7E757eff-0.2%7E09b9c6&w=800&h=800&fm=png" className="img-fluid" alt="info" />
            </div>
          </div>
        </div>
        <div className="container my-5" data-aos="fade-up" data-aos-duration="1000">
          <div className="jumbotron text-center text-white">
            <h1 className="display-5">
              <span className="text-light-green fw-bold">Hello</span> World!               
            </h1>
            <p className="lead">
              <Typical className="text-white fs-1" steps={['This page is on update', 2000, 'It\'\s will finish soon', 2000]} loop={Infinity} wrapper="b" />
            </p>
            <hr className="my-4" />            
          </div>
        </div>
        
      </React.Fragment>
    )
  }
}

export default InfoComponent;
