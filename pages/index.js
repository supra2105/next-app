import { Fragment, useState, useEffect } from "react";
import Head from "next/head";

import ReactFullpage from "@fullpage/react-fullpage";

import Slide1 from "../components/slide1";
import Slide2 from "../components/slide2";
import Slide3 from "../components/slide3";
import Slide4 from "../components/slide4";
import Slide5 from "../components/slide5";
import Slide6 from "../components/slide6";
import Slide7 from "../components/slide7";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [pageTitle, setPageTitle] = useState("Full Stack Web Developer");
  useEffect(() => {
    window.addEventListener("load", setLoading(false));
  }, []);
  useEffect(() => {
    switch (activeSlide) {
      case 0:
        setPageTitle("Full Stack Web Developer");
        break;
      case 1:
        setPageTitle("About");
        break;
      case 2:
        setPageTitle("Services");
        break;
      case 3:
        setPageTitle("Skills");
        break;
      case 4:
        setPageTitle("Work");
        break;
      case 5:
        setPageTitle("Testimonials");
        break;
      case 6:
        setPageTitle("Contact");
    }
  }, [activeSlide]);
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="Full Stack Web Developer." />
        <meta name="author" content="Surya Pratap" />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:100,300,400,500,700,900"
          rel="stylesheet"
        />

        <title>Surya Pratap | {pageTitle}</title>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
          integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
          crossorigin="anonymous"
        />
      </Head>
      <div id="video">
        {loading && (
          <div className="preloader">
            <div className="preloader-bounce">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}

        <header id="header">
          <div className="container-fluid">
            <div className="navbar">
              Surya Pratap
              <div className="navigation-row">
                <nav id="navigation">
                  {/* <button type="button" className="navbar-toggle">
                    {" "}
                    <i className="fa fa-bars"></i>{" "}
                  </button>
                  <div className="nav-box navbar-collapse">
                    <ul
                      className="navigation-menu nav navbar-nav navbars"
                      id="nav"
                    >
                      <li
                        onClick={() => fullpage_api.moveTo(1, 0)}
                        data-menuanchor="slide01"
                        className={activeSlide === 0 ? "active" : ""}
                      >
                        <a style={{ cursor: "pointer" }}>Home</a>
                      </li>
                      <li
                        onClick={() => fullpage_api.moveTo(2, 0)}
                        data-menuanchor="slide02"
                        className={activeSlide === 1 ? "active" : ""}
                      >
                        <a style={{ cursor: "pointer" }}>About Me</a>
                      </li>
                      <li
                        onClick={() => fullpage_api.moveTo(3, 0)}
                        data-menuanchor="slide03"
                        className={activeSlide === 2 ? "active" : ""}
                      >
                        <a style={{ cursor: "pointer" }}>Services</a>
                      </li>
                      <li
                        onClick={() => fullpage_api.moveTo(4, 0)}
                        data-menuanchor="slide04"
                        className={activeSlide === 3 ? "active" : ""}
                      >
                        <a style={{ cursor: "pointer" }}>My Skills</a>
                      </li>
                      <li
                        onClick={() => fullpage_api.moveTo(5, 0)}
                        data-menuanchor="slide05"
                        className={activeSlide === 4 ? "active" : ""}
                      >
                        <a style={{ cursor: "pointer" }}>My Work</a>
                      </li>
                      <li
                        onClick={() => fullpage_api.moveTo(6, 0)}
                        data-menuanchor="slide06"
                        className={activeSlide === 5 ? "active" : ""}
                      >
                        <a style={{ cursor: "pointer" }}>Testimonials</a>
                      </li>
                      <li
                        onClick={() => fullpage_api.moveTo(7, 0)}
                        data-menuanchor="slide07"
                        className={activeSlide === 6 ? "active" : ""}
                      >
                        <a style={{ cursor: "pointer" }}>Contact Me</a>
                      </li>
                    </ul>
                  </div> */}
                </nav>
              </div>
            </div>
          </div>
        </header>

        <video autoPlay muted loop id="myVideo">
          <source src="images/code-video.mp4" type="video/mp4" />
        </video>

        <ReactFullpage
          onLeave={(origin, destination) => setActiveSlide(destination.index)}
          render={(comp) => {
            return (
              <ReactFullpage.Wrapper>
                <Slide1 />

                {/* <Slide2 />
                <Slide3 />

                <Slide4 />

                <Slide5 />

                <Slide6 />
                <Slide7 /> */}
              </ReactFullpage.Wrapper>
            );
          }}
        />

        <div id="social-icons">
          <div className="text-right">
            <ul className="social-icons">
              {/* <li>
                <a href="#" title="Facebook">
                  <i className="fa fa-facebook"></i>
                </a>
              </li> */}
              <li>
                <a
                  href="https://github.com/suryapratap21/"
                  target="_blank"
                  title="Github"
                >
                  <i className="fa fa-github"></i>
                </a>
              </li>
              {/* <li>
                <a href="#" title="Linkedin">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li> */}
              <li>
                <a
                  href="https://www.instagram.com/suryapratap21/"
                  target="_blank"
                  title="Instagram"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
