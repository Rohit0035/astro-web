import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import FooterCopyright from "../../components/footer/FooterCopyright";
import FooterNewsletter from "../../components/footer/FooterNewsletter";
import Axios from "axios";

const FooterOne = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass,
  sideMenu,
}) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);
  const [categoryList, setCategoryList] = useState([]);
  const getCategory = () => {
    Axios.get(`http://13.235.180.192:8000/admin/getallCategory`)
      .then((response) => {
        console.log("5555555", response.data.data);
        setCategoryList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCategory();
  }, []);
  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <footer
      className={`footer-area ${
        backgroundColorClass ? backgroundColorClass : ""
      } ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      } ${extraFooterClass ? extraFooterClass : ""} ${
        spaceLeftClass ? spaceLeftClass : ""
      } ${spaceRightClass ? spaceRightClass : ""}`}
    >
      <div className={`${containerClass ? containerClass : "container"}`}>
        <div className="row">
          <div
            className={`${
              sideMenu ? "col-xl-3 col-sm-4" : "col-lg-3 col-sm-4"
            }`}
          >
            {/* footer copyright */}
            <h3 className="stltext">AstroVipra </h3>
            <FooterCopyright
              // footerLogo="/assets/img/logo/logo.png"

              spaceBottomClass="mb-30"
            />
          </div>
          {/* <div
            className={`${
              sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
            }`}
          >
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-title">
                <h3>ABOUT US</h3>
              </div>
              <div className="footer-list">
                <ul>
                 
                </ul>
              </div>
            </div>
          </div> */}

          <div
            className={`${
              sideMenu ? "col-xl-3 col-sm-4" : "col-lg-3 col-sm-6"
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? "footer-widget mb-30 ml-145"
                  : "footer-widget mb-30 ml-75"
              }`}
            >
              <div className="footer-title">
                <h3>Horoscope Category</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link>Horoscopes</Link>
                    <ul className="submenu">
                      {categoryList?.map((cat) => (
                        <li className="" key={cat._id}>
                          <Link to={process.env.PUBLIC_URL + "/heroscopesall"}>
                            {cat?.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  {/* <li>
                      <Link to="/heroscopesall">Health Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Career Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Finance Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Education Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Chinese Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Lal Kitab Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Numerology Horoscope 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Tarot Reading Predictions 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Festival 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Planetary Transit 2022</Link>
                  </li>
                  <li>
                      <Link to="/">Planetary Transit 2022</Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div
            className={`${
              sideMenu ? "col-xl-3 col-sm-4" : "col-lg-3 col-sm-4"
            }`}
          >
            <div
              className={`${
                sideMenu
                  ? "footer-widget mb-30 ml-95"
                  : "footer-widget mb-30 ml-50"
              }`}
            >
              <div className="footer-title">
                <h3>USEFUL LINKS</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/ourservice"}>
                        Our Services
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/freekundli"}>
                        Free Kundli
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/blog-standard"}>Blog</Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "/aboutdetail"}>
                        About us
                      </Link>
                    </li>

                    <li>
                      <Link to={process.env.PUBLIC_URL + "/contact"}>
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link to={process.env.PUBLIC_URL + "#/"}></Link>
                    </li>
                    <Link to={process.env.PUBLIC_URL + "/TermsOfUse"}>
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/privacyPolicy"}>
                      privacyPolicy
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/Faq"}>FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={`${
              sideMenu ? "col-xl-3 col-sm-8" : "col-lg-3 col-sm-6"
            }`}
          >
            {/* footer newsletter */}
            <FooterNewsletter
              spaceBottomClass="mb-30"
              spaceLeftClass="ml-70"
              sideMenu={sideMenu}
            />
          </div>
        </div>
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <i className="fa fa-angle-double-up"></i>
      </button>
    </footer>
  );
};

FooterOne.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  sideMenu: PropTypes.bool,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
};

export default FooterOne;
