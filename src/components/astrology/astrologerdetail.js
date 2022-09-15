import React from "react"
import { Link } from "react-router-dom";
import { Container, Row,  Col, Input, InputGroup, Form,Button } from "reactstrap";
import women from "../../assets/img/women.jpg";
import LayoutOne from "../../layouts/LayoutOne";
import Tab from "react-bootstrap/Tab";
import Rating from "@mui/material/Rating";
import LinearProgress from "@mui/material/LinearProgress";
import Nav from "react-bootstrap/Nav";
import detailsbg  from "../../assets/img/details-bg.jpg";
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class AstrologerDetail extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  

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
                                        <h1>Astrologer Detail</h1>
                                        <p></p>
                                    </div>
                                </Col>
                                
                            </Row>
                    </Container>
                    
                </div>
        </section>
    <div className="col-lg-12 col-md-12 mb-30">
      <div className="category-home">
      <section className="pt-0">
      <Container>
          <section className="dt-astro">
               <Row>
                   <Col md="3">
                       <div className="as-pic mt-30">
                          <img src={women} alt="" className="pic-as"/>

                       </div>
                   </Col>
                    <Col md="6">
                      <div className="as-content mt-60">
                          <h3>Dr. Sree Sanjib</h3>
                           <div className="review-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                            </div>
                         <ul>
                            <li>Language: <span>Hindi , Bengali</span></li>
                            <li>Experience: <span>15 Years</span></li>
                            <li>Skills: <span> Vedic Astrology , KP Astrology</span></li>
                         </ul>
                       </div>
                    </Col>
                    <Col md="3" className="mt-30">
                         <Button className="btn-as st" onClick={this.toggle} >Call Now
                            <small className="sm-text">
                               <i class="fa fa-inr" aria-hidden="true"></i> 30/Min 
						                </small>
                         </Button>
                         <Button className="btn-as st" onClick={this.toggle} >Chat Now
                            <small className="sm-text">
							                 <i class="fa fa-inr" aria-hidden="true"></i> 30/Min 
                            </small>
                         </Button>
                    </Col>
               </Row>
          </section>
          <section className="mt-50 mb-30">
          <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="productDescription">
            <Nav variant="pills" className="description-review-topbar">
              <Nav.Item>
                <Nav.Link eventKey="additionalInfo" >
                  About Information
                </Nav.Link>
              </Nav.Item>
               {/* <Nav.Item>
                <Nav.Link eventKey="productDescription">Description</Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Nav.Link eventKey="productReviews">Reviews</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content className="description-review-bottom">
              <Tab.Pane eventKey="additionalInfo" >
                <div className="product-anotherinfo-wrapper">
                   <p>
                   Sree Sanjib ji is KP astrologer from Kolkata, India. He has 15 years of experience in KP astrology and Vedic Astrology. You can consult him in Hindi, English and Bengali Language.  He has Won Jyotish Gyan Ratna, Jyotish Gyan Bharti and Jyotish Shiromani awards from Word Astrologers Society. He is expert in Nadi Astrology, KP astrology, Numerology, Palmistry and Vastu. You can consult him for business related issues, marriage, financial issues, property or legal issues and much more.
                   </p>
                </div>
              </Tab.Pane>
              {/* <Tab.Pane eventKey="productDescription">
                <h5>lo</h5>
              </Tab.Pane> */}
              <Tab.Pane eventKey="productReviews">
                <h3>
                  RATINGS <i class="fa fa-star"></i>
                </h3>
                <div className="row">
                  <div className="col-lg-7">
                    <div className="row">
                      <div className="col-md-4">
                        <h1
                          style={{
                            fontSize: 96,
                            marginTop: 39,
                            marginRight: 15,
                            marginBottom: 20,
                            marginLeft: 0,
                          }}
                        >
                          
                        </h1>
                        <p></p>
                      </div>
                      <div className="col-md-6">
                        <LinearProgress
                          className="m-1 mb-3 "
                          style={{ color: "#14958f" }}
                          variant="determinate"
                          value={70}
                        />
                        <LinearProgress
                          className="m-1 mb-3 "
                          style={{ color: "#ff" }}
                          variant="determinate"
                          value={30}
                        />
                        <LinearProgress
                          className="m-1 mb-3 "
                          style={{ color: "#14958f" }}
                          variant="determinate"
                          value={30}
                        />
                        <LinearProgress
                          className="m-1 mb-3 "
                          style={{ color: "#14958f" }}
                          variant="determinate"
                          value={30}
                        />
                        <LinearProgress
                          className="m-1 mb-3 "
                          style={{ color: "#14958f" }}
                          variant="determinate"
                          value={10}
                        />
                      </div>
                    </div>
                    <hr />
                   
                      <div className="review-wrapper" >
                        <div className="single-review">
                         * <div className="review-img">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/img/testimonial/1.jpg"
                              }
                              alt=""
                            />
                          </div> 
                          <div className="review-content">
                            <div className="review-top-wrap">
                              <div className="review-left">
                                <div className="review-name">
                                  <h4
                                    style={{
                                      textTransform: "capitalize",
                                      margin: 5,
                                    }}
                                  >
                                   lorem ipsum
                                  </h4>
                                </div>
                                <div className="review-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                  {/* <Rating
                                    name="disabled"
                                    style={{ opacity: 1 }}
                                    disabled
                                  /> */}
                                </div>
                              </div>
                            </div>
                            <div className="review-bottom">
                              <p
                                style={{
                                  display: "inline",
                                  textTransform: "capitalize",
                                }}
                              >
                                Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                  </div>
                  <div className="col-lg-5">
                    <div className="ratting-form-wrapper pl-50">
                      <h3>Write a Review</h3>
                      <div className="ratting-form">
                        <form action="#">
                          <div className="star-box">
                            {/* <span>Your rating:</span> */}
                            {/* <div className="ratting-star">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div> */}
                          </div>
                          <div className="row">
                            <div className="rating-form-style mb-10">
                              <Rating
                                name="simple-controlled"
                                onChange={(event, newValue) => {
                                }}
                              />
                            </div>
                             <div class="col-md-6">
                                <div class="rating-form-style mb-10">
                                    <input placeholder="Name" type="text"/>
                                 </div>
                             </div>
                             <div class="col-md-6">
                                <div class="rating-form-style mb-10">
                                    <input placeholder="Email" type="email"/>
                                </div>
                             </div>
                            <div className="col-md-12">
                              <div className="rating-form-style form-submit">
                                <textarea
                                  name="comment"
                                  placeholder="Comment"
                                  defaultValue={""}
                                  style={{ height: "auto" }}
                                  rows={3}
                                />
                                <input type="submit" defaultValue="Submit" />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
          </section>
      </Container>
      </section>
    </div>
    </div>


    {/* modal for recharge*/}

          <Modal size="md" style={{maxWidth: '600px', width: '100%'}} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader className="wr-3" toggle={this.toggle}>
                    <h2 className="wr-4">Recharge Now</h2>
                </ModalHeader>
                <ModalBody>
                          <div className="Wr-1">
                              <h3>
                                  Minimum balance of 5 minutes (INR 25.0) is required to start call with RajnishM
                              </h3>
                              <Link className="wr-5">
                                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                              </Link>
                              <Link className="wr-6" to="/walletmoney">
                                   <Button>Recharge</Button>
                              </Link>
                          </div>
                </ModalBody>
                <ModalFooter>
                  {/* <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '} */}
                  {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
                </ModalFooter>
        </Modal>

   </LayoutOne>
  );
  }
}


export default AstrologerDetail;
