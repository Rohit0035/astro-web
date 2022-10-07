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
import women from "../../assets/img/women.jpg";
import LayoutOne from "../../layouts/LayoutOne";
import Tab from "react-bootstrap/Tab";
import Rating from "@mui/material/Rating";
import LinearProgress from "@mui/material/LinearProgress";
import Nav from "react-bootstrap/Nav";
import detailsbg from "../../assets/img/details-bg.jpg";
import pagetitle from "../../assets/img/pagetitle.jpg";
import axiosConfig from "../../axiosConfig";
import axios from "axios";
class AstrologerDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    // console.log(id);
    axiosConfig
      .get(`/user/astrodetails/${id}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          Name: response.data.data.Name,
          Skills: response.data.Skills,
          language: response.data.language,
          img: response.data.img,
          status: response.data.status,
          Exp: response.data.Exp,
          callCharge: response.data.callCharge,
          about_me: response.data.about_me,
          msg: response.data.msg,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <LayoutOne headerTop="visible">
        <div className="col-lg-12 col-md-12 mb-30">
          <div className="category-home">
            <section className="pt-0">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  backgroundImage: `url(${pagetitle})`,
                  width: "100%",
                  padding: "70px 0px",
                  backgroundSize: "cover",
                }}
              >
                <Container>
                  <Row>
                    <Col md="12">
                      <div className="leftcont text-left">
                        <h1>Astrologer Detail</h1>
                        <h3></h3>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>

              <Container>
                <section className="dt-astro">
                  <Row>
                    <Col md="3">
                      <div className="as-pic mt-30">
                        <img src={women} alt="" className="pic-as" />
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="as-content mt-60">
                        <h3>{this.state.Name}</h3>
                        <div className="review-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <ul>
                          <li>
                            Language: <span>{this.state.language}</span>
                          </li>
                          <li>
                            Experience: <span>{this.state.Exp}</span>
                          </li>
                          <li>
                            Skills: <span> {this.state.Skills}</span>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col md="3" className="mt-30">
                      <Button className="btn-as st">
                        Call Now
                        <small className="sm-text">
                          <i class="fa fa-inr" aria-hidden="true"></i>{" "}
                          {this.state.callCharge}
                        </small>
                      </Button>
                    </Col>
                  </Row>
                </section>
                <section className="mt-50 mb-30">
                  <div className="description-review-wrapper">
                    <Tab.Container defaultActiveKey="productDescription">
                      <Nav
                        variant="pills"
                        className="description-review-topbar"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="additionalInfo">
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
                        <Tab.Pane eventKey="additionalInfo">
                          <div className="product-anotherinfo-wrapper">
                            <p>
                              {this.state.about_me}
                              {/* Sree Sanjib ji is KP astrologer from Kolkata,
                              India. He has 15 years of experience in KP
                              astrology and Vedic Astrology. You can consult him
                              in Hindi, English and Bengali Language. He has Won
                              Jyotish Gyan Ratna, Jyotish Gyan Bharti and
                              Jyotish Shiromani awards from Word Astrologers
                              Society. He is expert in Nadi Astrology, KP
                              astrology, Numerology, Palmistry and Vastu. You
                              can consult him for business related issues,
                              marriage, financial issues, property or legal
                              issues and much more. */}
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
                                  {/* <h1
                                    style={{
                                      fontSize: 96,
                                      marginTop: 39,
                                      marginRight: 15,
                                      marginBottom: 20,
                                      marginLeft: 0,
                                    }}
                                  ></h1> */}
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

                              <div className="review-wrapper">
                                <div className="single-review">
                                  *{" "}
                                  <div className="review-img">
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
                                        Vestibulum ante ipsum primis aucibus
                                        orci luctustrices posuere cubilia Curae
                                        Suspendisse viverra ed viverra. Mauris
                                        ullarper euismod vehicula. Phasellus
                                        quam nisi, congue id nulla.
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
                                          onChange={(event, newValue) => {}}
                                        />
                                      </div>
                                      <div class="col-md-6">
                                        <div class="rating-form-style mb-10">
                                          <input
                                            placeholder="Name"
                                            type="text"
                                          />
                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                        <div class="rating-form-style mb-10">
                                          <input
                                            placeholder="Email"
                                            type="email"
                                          />
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
                                          <input
                                            type="submit"
                                            defaultValue="Submit"
                                          />
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
      </LayoutOne>
    );
  }
}

export default AstrologerDetail;
