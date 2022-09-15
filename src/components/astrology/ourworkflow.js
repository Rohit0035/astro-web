import React from "react"
import { Link } from "react-router-dom";
import { Container, Row,  Col, Input, InputGroup, Form,Button } from "reactstrap";
import textbottom from "../../assets/img/textbottom.png";
import "../../assets/scss/workflow.css"


class OurWorkFlow extends React.Component {
 

  render() {

  return (
    <div className="col-lg-12 col-md-12 mb-30">
      <div className="category-home">
      <section className="stt-2">
      <Container>

         <div className="heading">
              <h2>3 Step To Do</h2>
              <img src={textbottom} alt=""/>
         </div>
             <Row>
               <Col md="4">
                    <div className="process-box process-left" data-aos="fade-right"        data-aos-duration="1000">
                        <Row>
                            <Col md="5">
                                <div className="process-step">
                                    <p className="m-0 p-0">Step</p>
                                    <h2 className="m-0 p-0">01</h2>
                                </div>  
                            </Col>
                            <Col md="7">
                                <h5 className="bt-txt">Select a package</h5>
                                <p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </small></p> 
                            </Col>
                            {/* <div class="process-line-l"></div> */}
                        </Row> 
                    </div>
               </Col>
               <Col md="4">
                    <div className="process-box process-left" data-aos="fade-right"        data-aos-duration="1000">
                        <Row>
                            <Col md="5">
                                <div className="process-step">
                                    <p className="m-0 p-0">Step</p>
                                    <h2 className="m-0 p-0">02</h2>
                                </div>  
                            </Col>
                            <Col md="7">
                                <h5 className="bt-txt">Purchase a Package</h5>
                                <p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </small></p> 
                            </Col>
                            {/* <div class="process-line-l"></div> */}
                        </Row> 
                    </div>
               </Col>
               <Col md="4">
                  <div class="process-box process-right" data-aos="fade-left" data-aos-duration="1000">
                        <Row>
                            <Col md="5">
                                <div className="process-step">
                                    <p className="m-0 p-0">Step</p>
                                    <h2 className="m-0 p-0">03</h2>
                                </div>  
                            </Col>
                            <Col md="7">
                                <h5 className="bt-txt">Talk With Astrologer</h5>
                                <p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </small></p> 
                            </Col>
                            {/* <div class="process-line-l"></div> */}
                        </Row> 
                    </div>
               </Col>
             </Row>
      </Container>
    </section>
    </div>
    </div>
  );
  }
}


export default OurWorkFlow;
