import React from "react"
import { Link } from "react-router-dom";
import { Container, Row,  Col, Input, InputGroup, Form,Button } from "reactstrap";
// import aboutimg from "../../assets/img/aboutimg.jpg";
import aboutone from "../../assets/img/aboutone.png";
import abouttwo from "../../assets/img/abouttwo.png";
import LayoutOne from "../../layouts/LayoutOne";
import pagetitle  from "../../assets/img/pagetitle.jpg";
import FunFactOne from "../../wrappers/fun-fact/FunFactOne";
import asectionbg from "../../assets/img/asectionbg.jpg";


class AboutDetail extends React.Component {
 
  

  render() {


  return (

    <LayoutOne headerTop="visible">
            <section className="pt-0 pb-0" >
                <div
                    className=""
                    style={{
                      backgroundColor:"#FFD59E",
                      width: "100%",
                      padding:"70px 0px",
                      backgroundSize:"cover"
                    }}
                  >
                    <Container>
                            <Row>
                                <Col md="12">
                                    <div className="leftcont text-left">
                                        <h1>About Us</h1>
                                        <p></p>
                                    </div>
                                </Col>
                                
                            </Row>
                    </Container>
                    
                </div>
            </section>

              <section className="ptb-0">
                  <Container>
                      <Row>
                          <Col lg="6">
                            <div className="abo-1">
                                <h3>WHAT WE DO</h3>
                                <p>AstroVipra brings together astrologers and their boundless knowledge about the occult science of Astrology on one platform and lets you connect with them 24*7. Apart from the best future predictions that help you get through the difficult phase of life, AstroVipra also offers Free Live astrology sessions, Daily horoscope, Free kundli matching service, Spiritual store and much more.</p>
                               <div className="bst-stro">
                                    <h2>Call Us </h2>
                                    <h3>

                                      <i class="fa fa-phone"></i>

                                       189 000 000 000
                                    </h3>
                               </div>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="abo-2">
                                  <img src={aboutone} alt="" className="about-img"></img>
                            </div>
                        </Col>
                    </Row>
                  </Container>
              </section>
      
             <section
                style={{
                  backgroundImage: `url(${asectionbg})`,
                  width: "100%",
                  padding:"0px 0px",
                  backgroundSize:"cover"
                }}
             >
                <Container>
                  <Row>
                  <Col md="6">
                    <div className="ourm">
                       <h2>MISSION</h2>
                       <p>Our mission is to create a community for the people who seek astrological guidance for the betterment of life. We want to help out people who are going through a bad phase of life in the most trusted way.</p>
                    </div>
                 </Col>
                 <Col md="6">
                     <div className="ourm">
                        <h2>VISION</h2> 
                        <p>Our vision is to provide astrological solutions to the customers who are facing problems. We want to give direction to their life with the assistance of our trusted and certified astrologers.</p>  
                     </div>
                </Col>

                <Col md="12">
                     <div className="ourm mb-50">
                        <h2>OUR STORY</h2> 
                        <p>AstroVipra came into being with an aim to not only keep the ethos of traditional astrology intact but to also amalgamate in it the solutions to modern problems like mental health, stress, depression, etc. With that being the first and foremost goal, AstroVipra founder, Puneet Gupta, has not only worked to deliver the best of Vedic astrology on the platform but has touched every aspect of mental wellness through spiritual means. With the grace of God, AstroVipra, over the years, has not only been able to achieve the aforementioned aim but also add-on to the list of ‘achieved goals’ and continues to do so. Today, with over 4000 astrologers onboard and over 1 Lakh minutes of daily consultation, AstroVipra, besides allowing you to talk to the best astrologers, also provides numerous other services like Free live sessions, Free Kundli matching, Daily horoscope and much more.</p>  
                     </div>
                </Col>
               
                  </Row>
               </Container>
             </section>

             <section>
                  <Container>
                       <Row>
                          <Col md="12">
                            <FunFactOne/>
                          </Col>
                       </Row>
                  </Container>
             </section>

   </LayoutOne>
  );
  }
}


export default AboutDetail;
