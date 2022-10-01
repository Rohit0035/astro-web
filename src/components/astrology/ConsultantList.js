import React from "react"
import { Link } from "react-router-dom";
import { Container, Row,  Col  } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import astro3 from "../../assets/img/team/astro3.jpg";


class ConsultantList extends React.Component {
 
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
                                        <h1>Our Consultant</h1>
                                        <h3>Select the best astrologer</h3>
                                    </div>
                                </Col>
                                
                            </Row>
                    </Container>
                    
                </div>
            </section>

            <section className="ptb-0 mt-50 mb-50">
                <Container>
                      <Row>
                          <Col lg="3" md="3" sm="6" xs="12">
                               <div className="frontside">
                                    <div className="card">
                                        <div className="card-body text-center py-2">
                                            <p><img src={astro3} alt=""/></p>
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
                                                {/* <li> <span>Tarot Card  , Vedic Astrology</span></li> */}
                                                <li>Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li>Experience:  <span>22 Years</span></li>
                                            </ul>
                                             <div className="my-2">
                                                <Link  to="/addressform" className="btn btn-primary btn-sm">
                                                    Select
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                          </Col>
                      </Row>
                </Container>
            </section>
      
   </LayoutOne>
  );
  }
}


export default ConsultantList;
