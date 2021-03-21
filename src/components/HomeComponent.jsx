import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import pp from './asset/pp.webp';
import IG from './asset/contact/ig.png';
import WA from './asset/contact/wa.png';
import linkedin from './asset/contact/linkedin.png';
import github from './asset/icons/github.png';
import Typical from 'react-typical';
class HomeComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="text-center mt-4 container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-down" data-aos-duration="1000">
              <img src={pp} height={350} width={350} className="rounded-circle img-thumbnail" alt="Profile Photos" />
            </div>
            <div className="col-lg-5 mt-5 text-center" data-aos="fade-down" data-aos-duration="1500">
              <br />
              <br />
              <h2 className="text-white fw-light text-shadow-hero">Hello!</h2>
              <h2 className="text-white fs-2 text-shadow-hero">
                I'm &nbsp;
                <span className="text-light-green fw-bold">
                  <Typical steps={['Muhamad Ichsan', 1000, 'Front-End Developer!', 500]} loop={Infinity} wrapper="b" />
                </span>
              </h2>

              <p className="text-white mt-3">Live life like a flowing water</p>
              <a className="btn btn-outline-success text-white pt-3 pb-3 pl-4 pr-4" id="btn-email-me" href="mailto:mhmdiksan2121@gmail.com" target="_blank">
                Email Me
              </a>
            </div>
          </div>

          <hr className="bg-light my-5" />
          {/* contact */}

          <div className="container p-4">
            <h1 className="text-center text-white mb-5" data-aos="fade-up" data-aos-duration="1000">
              Contact me
            </h1>
            <div className="row justify-content-center mt-5">
              <div className="col-lg-3 mb-4 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                <a href="https://instagram.com/muhamadichsan26">
                  <img src={IG} className="mt-2" height={60} width={60} alt="Contact icon" />
                </a>
              </div>
              <div className="col-lg-3 mb-4 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                <a href="https://api.whatsapp.com/send?phone=6281282833166&amp;text=Hi">
                  <img src={WA} className="mt-2" alt="Contact icon" />
                </a>
              </div>
              <div className="col-lg-3 mb-4 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                <a href="https://www.linkedin.com/in/muhamadichsan26/">
                  <img src={linkedin} className="mt-2" alt="Contact icon" />
                </a>
              </div>
              <div className="col-lg-3 mb-4 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                <a href="https://github.com/MuhamadIchsan">
                  <img src={github} className="mt-2" height="60" width="60" alt="Contact icon" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default HomeComponent;
