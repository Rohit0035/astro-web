import React from "react"
import { Link } from "react-router-dom";
import { Container, Row,  Col, Input, InputGroup, Form,Button } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import "../../assets/scss/astroteam.scss";
import noteimg from "../../assets/img/note.png"

class NotificationList extends React.Component {
 
  
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
                                        <h1>Notification</h1>
                                    </div>
                                </Col>
                                
                            </Row>
                    </Container>
                    
                </div>
        </section> 
        <section>
              <Container>
                    <Row>
                         <Col lg="12">
                             <div className="notes-box">
                                  <Row>
                                      <Col lg="12">
                                          <div className="noteify-list">
                                               <div className="noteifybx">
                                                   <img src={noteimg} alt="" width="50px" />
                                               </div>
                                                <div className="noteifybxx">
                                                   <h2>We were on a BREAK!!!</h2>
                                                   <p>
                                                    Rough love-patch? Nothing feels right? Find out how you can mend things up😇
                                                   </p>
                                                   <span className="notify-sp">
                                                       <Link>
                                                           <i class="fa fa-times" aria-hidden="true"></i>
                                                       </Link>
                                                   </span>
                                                </div>
                                          </div>
                                      </Col>
                                      <Col lg="12">
                                          <div className="noteify-list">
                                               <div className="noteifybx">
                                                   <img src={noteimg} alt="" width="50px" />
                                               </div>
                                                <div className="noteifybxx">
                                                   <h2>We were on a BREAK!!!</h2>
                                                   <p>Rough love-patch? Nothing feels right? Find out how you can mend things up😇</p>
                                                </div>
                                                <span className="notify-sp">
                                                       <Link>
                                                           <i class="fa fa-times" aria-hidden="true"></i>
                                                       </Link>
                                                </span>
                                          </div>
                                      </Col>
                                      <Col lg="12">
                                          <div className="noteify-list">
                                               <div className="noteifybx">
                                                   <img src={noteimg} alt="" width="50px" />
                                               </div>
                                                <div className="noteifybxx">
                                                   <h2>We were on a BREAK!!!</h2>
                                                   <p>Rough love-patch? Nothing feels right? Find out how you can mend things up😇</p>
                                                </div>
                                                <span className="notify-sp">
                                                       <Link>
                                                           <i class="fa fa-times" aria-hidden="true"></i>
                                                       </Link>
                                                </span>
                                          </div>
                                      </Col>
                                      <Col lg="12">
                                          <div className="noteify-list">
                                               <div className="noteifybx">
                                                   <img src={noteimg} alt="" width="50px" />
                                               </div>
                                                <div className="noteifybxx">
                                                   <h2>We were on a BREAK!!!</h2>
                                                   <p>Rough love-patch? Nothing feels right? Find out how you can mend things up😇</p>
                                                </div>
                                                <span className="notify-sp">
                                                       <Link>
                                                           <i class="fa fa-times" aria-hidden="true"></i>
                                                       </Link>
                                                </span>
                                          </div>
                                      </Col>
                                  </Row>
                             </div>
                         </Col>
                    </Row>
              </Container>
        </section>
   </LayoutOne>
  );
  }
}


export default NotificationList;
