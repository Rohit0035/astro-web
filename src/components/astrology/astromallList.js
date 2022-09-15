import React from "react"
import { Link } from "react-router-dom";
import { Container, Row,  Col, Input, InputGroup, Form,Button } from "reactstrap";
// import aboutimg from "../../assets/img/aboutimg.jpg";
import aboutone from "../../assets/img/aboutone.png";
import abouttwo from "../../assets/img/abouttwo.png";
import LayoutOne from "../../layouts/LayoutOne";
import pagetitle  from "../../assets/img/pagetitle.jpg";
import FunFactOne from "../../wrappers/fun-fact/FunFactOne";
import poojaone from "../../assets/img/pooja/pooja-1.jpg";
import AutoSearch from "./autosearch";


class AstromallList extends React.Component {
 
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
                                        <h1>Astromall Shop</h1>
                                        <h3>Shop Best Online Astrology Products And Services</h3>
                                    </div>
                                </Col>
                                
                            </Row>
                    </Container>
                    
                </div>
            </section>

              <section className="ptb-0">
                  <Container>
                      <Row>
                          <Col lg="12">
                            <div className="pt-10 pb-50">
                                <AutoSearch/>
                         
                                <Row>
                                    <Col md="4">
                                         <div className="po-box">
                                            <Link to="/poojadetail">
                                                 <Row>
                                                     <Col md="4">
                                                       <div className="po-1">
                                                          <img src={poojaone} alt="" width="100%"/>
                                                        </div>
                                                     </Col>
                                                      <Col md="8">
                                                          <div className="po-1">
                                                                <h3>Puja @₹501</h3>
                                                                <p>Almost everything runs on Internet today and in order to make your life much easier, we have introduced Online Puja for you</p>
                                                          </div>
                                                      </Col>
                                                 </Row>
                                            </Link>
                                         </div>
                                    </Col>
                                    <Col md="4">
                                         <div className="po-box">
                                            <Link>
                                                 <Row>
                                                     <Col md="4">
                                                       <div className="po-1">
                                                          <img src={poojaone} alt="" width="100%"/>
                                                        </div>
                                                     </Col>
                                                      <Col md="8">
                                                          <div className="po-1">
                                                                <h3>Puja @₹501</h3>
                                                                <p>Almost everything runs on Internet today and in order to make your life much easier, we have introduced Online Puja for you</p>
                                                          </div>
                                                      </Col>
                                                 </Row>
                                            </Link>
                                         </div>
                                    </Col>
                                    <Col md="4">
                                         <div className="po-box">
                                            <Link>
                                                 <Row>
                                                     <Col md="4">
                                                       <div className="po-1">
                                                          <img src={poojaone} alt="" width="100%"/>
                                                        </div>
                                                     </Col>
                                                      <Col md="8">
                                                          <div className="po-1">
                                                                <h3>Puja @₹501</h3>
                                                                <p>Almost everything runs on Internet today and in order to make your life much easier, we have introduced Online Puja for you</p>
                                                          </div>
                                                      </Col>
                                                 </Row>
                                            </Link>
                                         </div>
                                    </Col>
                                    <Col md="4">
                                         <div className="po-box">
                                            <Link>
                                                 <Row>
                                                     <Col md="4">
                                                       <div className="po-1">
                                                          <img src={poojaone} alt="" width="100%"/>
                                                        </div>
                                                     </Col>
                                                      <Col md="8">
                                                          <div className="po-1">
                                                                <h3>Puja @₹501</h3>
                                                                <p>Almost everything runs on Internet today and in order to make your life much easier, we have introduced Online Puja for you</p>
                                                          </div>
                                                      </Col>
                                                 </Row>
                                            </Link>
                                         </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg="6">
                            {/* <div className="abo-2">
                                  <img src={aboutone} alt="" className="about-img"></img>
                            </div> */}
                        </Col>
                    </Row>
                  </Container>
              </section>
      
          

   </LayoutOne>
  );
  }
}


export default AstromallList;
