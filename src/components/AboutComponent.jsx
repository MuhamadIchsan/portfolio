import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import pp from './asset/pp.webp';
import htmlIcon from './asset/skills/html.png';
import dartIcon from './asset/skills/dart.png';
import reactIcon from './asset/skills/react.png';
import laravelIcon from './asset/skills/laravel.webp';
import mateIcon from './asset/skills/materialize.png';
import cssIcon from './asset/skills/css.webp';
import gitIcon from './asset/skills/git.webp';
import cIcon from './asset/skills/c.webp';
import mysqlIcon from './asset/skills/mysql.webp';
import jsIcon from './asset/skills/js.webp';
import bootstrapIcon from './asset/skills/bootstrap.webp';
import phpIcon from './asset/skills/php.webp';
import cert1 from './asset/cert/cert-1.webp';
import cert2 from './asset/cert/cert-2.webp';
import cert3 from './asset/cert/cert-3.webp';
import cert4 from './asset/cert/cert-4.webp';

class AboutComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="text-center mt-4 container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-down" data-aos-duration="1000">
              <img src={pp} height={350} width={350} className="rounded-circle img-thumbnail" alt="Profile Photos" />
            </div>
            <div className="col-lg-12 mt-5" data-aos="fade-up" data-aos-duration="1000">
              <p className="text-white fs-2">
                Hi, I'm <span className="fw-bold text-light-green">Muhamad Ichsan</span> .
              </p>
              <p className="text-white fs-5">
                I am a <span className="fw-bold text-light-green">Front-end developer</span> and I like to make websites look <span className="fw-bold text-light-green">attractive and interactive</span>.
                <br /> I enjoy learning about technology, especially programming. I live in <span className="fw-bold text-light-green">Bogor</span>.
                <br /> I was born on <span className="fw-bold text-light-green">26 March 2003</span>.
                <br /> Thank you for visiting my website!
              </p>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section className="container p-4">
          <h1 className="text-light-green mb-5 text-center fw-bold">Skills</h1>
          <div className="row justify-content-center">
            <div className="col-lg-3 mb-5">
              <div className="card bg-card text-center bg-transparent border-0">
                <div className="card-body">
                  <img src={dartIcon} height="100" width="100" alt="skill icon" />
                  <p className="text-white fw-bold">Dart</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-5">
              <div className="card bg-card text-center bg-transparent border-0">
                <div className="card-body">
                  <img src={jsIcon} height="100" width="100" alt="skill icon" />
                  <p className="text-white fw-bold">Javascript</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-5">
              <div className="card bg-card text-center bg-transparent border-0">
                <div className="card-body">
                  <img src={mateIcon} height="100" width="150" alt="skill icon" />
                  <p className="text-white fw-bold">Materialize</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-5">
              <div className="card bg-card text-center bg-transparent border-0">
                <div className="card-body">
                  <img src={bootstrapIcon} height="100" width="100" alt="skill icon" />
                  <p className="text-white fw-bold">Bootstrap</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-5">
              <div className="card bg-card text-center bg-transparent border-0">
                <div className="card-body">
                  <img src={htmlIcon} height="100" width="100" alt="skill icon" />
                  <p className="text-white fw-bold">HTML</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-5">
              <div className="card bg-card text-center bg-transparent border-0">
                <div className="card-body">
                  <img src={phpIcon} height="100" width="150" alt="skill icon" />
                  <p className="text-white fw-bold">PHP</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-5">
              <div className="card bg-card text-center bg-transparent border-0">
                <div className="card-body">
                  <img src={mysqlIcon} height="100" width="150" alt="skill icon" />
                  <p className="text-white fw-bold">MySQL</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-5">
              <div className="card bg-card text-center bg-transparent border-0">
                <div className="card-body">
                  <img src={cIcon} height="100" width="100" alt="skill icon" />
                  <p className="text-white fw-bold">C++</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-5">
              <div className="card bg-card text-center bg-transparent border-0">
                <div className="card-body">
                  <img src={cssIcon} height="100" width="100" alt="skill icon" />
                  <p className="text-white fw-bold">CSS</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-5">
              <div className="card bg-card text-center bg-transparent border-0">
                <div className="card-body">
                  <img src={gitIcon} height="100" width="100" alt="skill icon" />
                  <p className="text-white fw-bold">Git</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-5">
              <div className="card bg-card text-center bg-transparent border-0">
                <div className="card-body">
                  <img src={laravelIcon} height="100" width="120" alt="skill icon" />
                  <p className="text-white fw-bold">Laravel</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-5">
              <div className="card bg-card text-center bg-transparent border-0">
                <div className="card-body">
                  <img src={reactIcon} height="100" width="100" alt="skill icon" />
                  <p className="text-white fw-bold">React.js</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="certificate mt-5 mb-5" id="certificates">
          <h1 className="text-light-green mb-5 text-center fw-bold">Certificates</h1>
          <div id="carouselExampleDark" className="carousel carousel-light slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {/* start */}
              <div className="carousel-item active" data-bs-interval="4000">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <img src={cert1} className="d-block w-100" alt="dicoding certificate" />
                    </div>
                    <br />
                    <div className="col-lg-6 text-white mt-5">
                      <h5>Dicoding Certificate</h5>
                      <p>Belajar Dasar Pemrograman Web</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="4000">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <img src={cert3} className="d-block w-100" alt="dicoding certificate" />
                    </div>
                    <br />
                    <div className="col-lg-6 text-white mt-5">
                      <h5>InfraDigital Foundation</h5>
                      <p>Cyber Security Training CompTIA Security+ and Cyber Security Analyst ( CySA+ ) </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="4000">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <img src={cert2} className="d-block w-100" alt="dicoding certificate" />
                    </div>
                    <br />
                    <div className="col-lg-6 text-white mt-5">
                      <h5>Dicoding Certificate</h5>
                      <p>Belajar Fundamental Fron-End Web Development</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="4000">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <img src={cert4} className="d-block w-100" alt="dicoding certificate" />
                    </div>
                    <br />
                    <div className="col-lg-6 text-white mt-5">
                      <h5>Dicoding Certificate</h5>
                      <p>Memulai Pemrograman Dengan Dart</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* end */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            <div className="carousel-indicators mt-5">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 2"></button>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default AboutComponent;
