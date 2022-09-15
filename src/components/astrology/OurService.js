import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Input,
  InputGroup,
  Form,
  Button,
} from "reactstrap";
// import aboutimg from "../../assets/img/aboutimg.jpg";
import LayoutOne from "../../layouts/LayoutOne";
import pagetitle from "../../assets/img/pagetitle.jpg";
import FunFactOne from "../../wrappers/fun-fact/FunFactOne";
import asectionbg from "../../assets/img/asectionbg.jpg";
import serimgone from "../../assets/img/heroscope/serimgone.png";
import serimgtwo from "../../assets/img/heroscope/serimgtwo.jpg";
import pisces from "../../assets/img/heroscope/pisces.png";

class OurService extends React.Component {
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
                                        <h1>Our Services</h1>
                                        <p></p>
                                    </div>
                                </Col>
                                
                            </Row>
                    </Container>
                    
                </div>
          </section>

        <section className="ptb-30">
          <Container>
            <Row>
              <Col lg="6">
                <div className="serve-2">
                  <img src={serimgone} alt="" className="imgser1" />
                  <img src={serimgtwo} alt="" className="imgser2" />
                </div>
              </Col>
              <Col lg="6">
                <Row>
                  <Col md="6">
                    <div className="serve-1">
                      <img src={pisces} alt="" width="80px" />
                      <h3>Kundli Dosha</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                      <Link>Read More</Link>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="serve-1">
                      <img src={pisces} alt="" width="80px" />
                      <h3>Kundli Dosha</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                      <Link>Read More</Link>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="serve-1">
                      <img src={pisces} alt="" width="80px" />
                      <h3>Kundli Dosha</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                      <Link>Read More</Link>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="serve-1">
                      <img src={pisces} alt="" width="80px" />
                      <h3>Kundli Dosha</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                      <Link>Read More</Link>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}

export default OurService;
