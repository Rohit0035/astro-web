

import React from "react"
import { Link } from "react-router-dom";
import { Container, Row,  Col, Card,Input, InputGroup, Form,Button } from "reactstrap";
import Pj from "../../assets/img/pj.gif";
import "../../assets/scss/astropooja.css";
import pagetitle  from "../../assets/img/pagetitle.jpg";
import LayoutOne from "../../layouts/LayoutOne";


class PoojaDetail extends React.Component {
 

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
                                        <h1>Product Detail</h1>
                                        {/* <h3></h3> */}
                                    </div>
                                </Col>
                                
                            </Row>
                    </Container>
                    
                </div>
        </section>

        <Container>
             <Row>
                  <Col md="12">
                       <Card className="mb-50">
                           <Row>
                               <Col md="6">
                                    <div className="preview-pic tab-content">
                                        <img src={Pj}  alt=""/>
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div className="details">
                                        <h3 className="product-title">Magic ball reader</h3>
                                        <div className="rating">
                                            <div className="stars">
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                            <span className="review-no">41 reviews</span>
                                        </div>
                                        <p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
                                        <h4 className="price">current price: <span>$180</span></h4>
                                        <h4 className="price">discount price: <span>$180</span></h4>
                                        <p className="vote"><strong>91%</strong> of buyers enjoyed this Pooja <strong>(87 votes)</strong></p>
                                       
                                        {/* <h5 className="colors">colors:
                                            <span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                                            <span className="color green"></span>
                                            <span className="color blue"></span>
                                        </h5> */}
                                        <div class="action">
                                            <button className="add-to-cart btn btn-default" type="button">add to cart</button>
                                            <button className="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
                                        </div>
                                    </div>
                               </Col>
                           </Row>
                        
                       </Card>
                  </Col>
             </Row>

        </Container>

    </LayoutOne>

  );
  }
}


export default PoojaDetail;
