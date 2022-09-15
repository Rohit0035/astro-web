import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import astro3 from "../../assets/img/team/astro3.jpg";

const SliderDemo = ({ data, sliderClass,  sliderdemoClass }) => {
  return (
    <div
      className={`${
        sliderdemoClass ?  sliderdemoClass : " slider-demo"
      } text-center ${sliderClass ? sliderClass : ""} st-hit`}
    >
      {/* <img src={process.env.PUBLIC_URL + data.image} alt="" />
      <p className="st-testmonial">{data.content}</p>
      <div className="client-info">
        <i className="fa fa-map-signs" />
        <h5>{data.customerName}</h5>
        <span>{data.title}</span>
      </div> */}

                <div className="image-flip">
                        <div className="mainflip flip-0">
                            <div className="frontside">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <p><img src={astro3} alt=""/></p>
                                        <h4 className="card-title">Krishnan Iyer</h4>
                                            <ul className="mb-3">
                                                <li className="btt">Specility: <span>Tarot Card Reading , Vedic Astrology</span></li>
                                                <li className="btt">Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li className="btt">Experience:   <span>2 years</span></li>
                                                <li className="btt">Call Rate:   <span>Rs.20/hour</span></li>
                                            </ul>
                                        <Link className="btn btn-primary btn-sm st-d">
                                             Online
                                        </Link>
                                        <Link className="btn btn-primary btn-sm">
                                            <i class="fa fa-phone"></i> Call Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="backside">
                                <div className="card">
                                    <div className="card-body text-center mt-4">
                                        <h4 className="card-title">Krishnan Iyer</h4>
                                         <ul>
                                            <li>Rating :<span>(1458)</span>
                                              <p className="mb-3">
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              <i class="fa fa-star" aria-hidden="true"></i>
                                              </p>
                                            </li>
                                            <li className="btt">Specility: <span>Tarot Card Reading , Vedic Astrology</span></li>
                                                <li className="btt">Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li className="btt">Experience:   <span>2 years</span></li>
                                                <li className="btt">Call Rate:   <span>Rs.20/hour</span></li>
                                         </ul>
                                         <Link  to="/astrologerdetail" className="btn btn-primary btn-sm">
                                            <i class="fa fa-phone"></i> Call Now
                                         </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
              
    </div>
  );
};

SliderDemo.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string
};

export default SliderDemo;
