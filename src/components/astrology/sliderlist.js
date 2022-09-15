import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import testimonialData from "../../data/testimonial/testimonial-one.json";
// import TestimonialOneSingle from "../../components/testimonial/TestimonialOneSingle.js";
import textbottom from "../../assets/img/textbottom.png";
import SliderDemo from "./sliderdemo";

const SliderList = ({
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  bgColorClass,
  sliderdemoClass,
  backgroundImage
}) => {
  // swiper slider settings
  const settings = {
    slidesPerView: 4,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    breakpoints: {
       
        768: {
          slidesPerView: 4,
          direction: "horizontal"
        },
        640: {
          slidesPerView: 4,
          direction: "horizontal"
        },
        320: {
          slidesPerView: 2,
          direction: "horizontal"
        }
      }
  };

  return (
    <div
      className={` ${spaceTopClass ? spaceTopClass : ""}  ${
        spaceBottomClass ? spaceBottomClass : ""
      } ${spaceLeftClass ? spaceLeftClass : ""}  ${
        spaceRightClass ? spaceRightClass : ""
      } ${bgColorClass ? bgColorClass : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12  ml-auto mr-auto">

            <div className="heading">
              <h2>Best Astrologers</h2>
              <img src={textbottom} alt=""/>
            </div>
            <div className=" nav-style-1 nav-testi-style">
              <Swiper {...settings}>
                {testimonialData &&
                  testimonialData.map((single, key) => {
                    return (
                      <SliderDemo
                        data={single}
                        key={key}
                        sliderClass="swiper-slide"
                        sliderdemoClass={ sliderdemoClass}
                      />
                    );
                  })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SliderList.propTypes = {
  bgColorClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  testimonialClass: PropTypes.string
};

export default SliderList;
