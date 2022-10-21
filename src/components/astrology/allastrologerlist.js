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
import textbottom from "../../assets/img/textbottom.png";
import astro3 from "../../assets/img/team/astro3.jpg";
import "../../assets/scss/astroteam.scss";
import LayoutOne from "../../layouts/LayoutOne";
import axiosConfig from "../../axiosConfig";

class AllAstrologerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // data: {},
      astrologerList: [],
    };
  }
  componentDidMount = () => {
    axiosConfig
      .get("/admin/allAstro")
      .then((response) => {
        console.log(response.data);
        if (response.data.status === true) {
          this.setState({ astrologerList: response.data.data });
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });
  };
  render() {
    const { astrologerList } = this.state;

    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              backgroundColor: "#FFD59E",
              width: "100%",
              padding: "70px 0px",
              backgroundSize: "cover",
            }}
          >
            <Container>
              <Row>
                <Col md="12">
                  <div className="leftcont text-left">
                    <h1>Talk To Astrologer</h1>
                    <p></p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section id="team" class="pb-5">
          <Container>
            {/* <div className="heading mb-30">
                <h2>Best Astrologers </h2>
                <img src={textbottom} alt=""/>
            </div>         */}
            <Row>
              {astrologerList.length
                ? astrologerList.map((astrologer, index) => {
                    return (
                      <Col md="3" key={index}>
                        <div className="image-flip">
                          <div className="mainflip flip-0">
                            <div className="frontside">
                              <div className="card">
                                <div className="card-body text-center">
                                  <p>
                                    <img src={astrologer.img} alt="" />
                                  </p>
                                  <h4 className="card-title">
                                    {astrologer.fullname}
                                  </h4>
                                  <ul className="mb-3">
                                    <li>
                                      {" "}
                                      <span>{astrologer.all_skills}</span>
                                    </li>
                                    <li>
                                      Language:{" "}
                                      <span>{astrologer.language}</span>
                                    </li>
                                  </ul>
                                  <Link className="btn btn-primary btn-sm st-d">
                                    Online
                                  </Link>
                                  <Link className="btn btn-primary btn-sm">
                                    <i class="fa fa-phone">
                                      {astrologer.callCharge}
                                    </i>{" "}
                                    Call
                                    <small>
                                      / 20{" "}
                                      <i class="fa fa-inr" aria-hidden="true">
                                        {astrologer.conrubute_hrs}
                                      </i>{" "}
                                      per Hour
                                    </small>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="backside">
                              <div className="card">
                                <div className="card-body text-center mt-4">
                                  <h4 className="card-title">
                                    {" "}
                                    {astrologer.fullname}
                                  </h4>
                                  <ul>
                                    <li>
                                      Rating :<span>(1458)</span>
                                      <p className="mb-3">
                                        <i
                                          class="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                        <i
                                          class="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                        <i
                                          class="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                        <i
                                          class="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                        <i
                                          class="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </p>
                                    </li>
                                    <li>
                                      {" "}
                                      <span>{astrologer.all_skills}</span>
                                    </li>
                                    <li>
                                      Language:{" "}
                                      <span>{astrologer.language}</span>
                                    </li>
                                    <li>
                                      Experience:{" "}
                                      <span>{astrologer.exp_in_years}</span>
                                    </li>
                                  </ul>

                                  <Link
                                    to={"/astrologerdetail/" + astrologer._id}
                                    className="btn btn-primary btn-sm"
                                  >
                                    <i class="fa fa-phone">
                                      {astrologer.callCharge}
                                    </i>{" "}
                                    Call Now
                                    <small>
                                      {" "}
                                      20{" "}
                                      <i class="fa fa-inr" aria-hidden="true">
                                        {astrologer.conrubute_hrs}
                                      </i>
                                      Hour
                                    </small>
                                  </Link>
                                  {/* <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                        <i className="fa fa-facebook"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                        <i class="fa fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                        <i className="fa fa-skype"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                        <i className="fa fa-google"></i>
                                                    </a>
                                                </li>
                                            </ul> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    );
                  })
                : null}
              {/* <Col md="3">
                    <div className="image-flip">
                            <div className="mainflip flip-0">
                                <div className="frontside">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <p><img src={astro3} alt=""/></p>
                                            <h4 className="card-title">Krishnan Iyer</h4>
                                            <ul className="mb-3">
                                                <li> <span>Tarot Card Reading , Vedic Astrology</span></li>
                                                <li>Language:   <span>English , Tamil , Malayalam</span></li>
                                            </ul>
                                            <Link className="btn btn-primary btn-sm st-d">
                                                Online
                                            </Link>
                                            <Link className="btn btn-primary btn-sm">
                                                <i class="fa fa-phone"></i> Call
                                                <small>/ 20  <i class="fa fa-inr" aria-hidden="true"></i>  per Hour</small>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="backside">
                                    <div className="card">
                                        <div className="card-body text-center mt-4">
                                            <h4 className="card-title">Krishnan Iyer</h4>
                                            <ul >
                                                <li>Rating :<span>(1458)</span>
                                                <p className="mb-3">
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                </p>
                                                </li>
                                                <li> <span>Tarot Card  , Vedic Astrology</span></li>
                                                <li>Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li>Experience:  <span>22 Years</span></li>
                                            </ul>
                                            <Link to="/astrologerdetail" className="btn btn-primary btn-sm">
                                                <i class="fa fa-phone"></i> Call Now
                                                <small> 20 <i class="fa fa-inr" aria-hidden="true"></i>  /Hour </small>
                                            </Link>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </Col>
                <Col md="3">
                    <div className="image-flip">
                            <div className="mainflip flip-0">
                                <div className="frontside">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <p><img src={astro3} alt=""/></p>
                                            <h4 className="card-title">Krishnan Iyer</h4>
                                            <ul className="mb-3">
                                                <li> <span>Tarot Card Reading , Vedic Astrology</span></li>
                                                <li>Language:   <span>English , Tamil , Malayalam</span></li>
                                            </ul>
                                            <Link className="btn btn-primary btn-sm st-d">
                                                Online
                                            </Link>
                                            <Link className="btn btn-primary btn-sm">
                                                <i class="fa fa-phone"></i> Call
                                                <small> / 20  <i class="fa fa-inr" aria-hidden="true"></i>  per Hour</small>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="backside">
                                    <div className="card">
                                        <div className="card-body text-center mt-4">
                                            <h4 className="card-title">Krishnan Iyer</h4>
                                            <ul >
                                                <li>Rating :<span>(1458)</span>
                                                <p className="mb-3">
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                </p>
                                                </li>
                                                <li> <span>Tarot Card  , Vedic Astrology</span></li>
                                                <li>Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li>Experience:  <span>22 Years</span></li>
                                            </ul>
                                            <Link to="/astrologerdetail" className="btn btn-primary btn-sm">
                                                <i class="fa fa-phone"></i> Call Now
                                                <small>  <i class="fa fa-inr" aria-hidden="true"></i> 20/Hour</small>
                                            </Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </Col>
                <Col md="3">
                    <div className="image-flip">
                            <div className="mainflip flip-0">
                                <div className="frontside">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <p><img src={astro3} alt=""/></p>
                                            <h4 className="card-title">Krishnan Iyer</h4>
                                            <ul className="mb-3">
                                                <li> <span>Tarot Card Reading , Vedic Astrology</span></li>
                                                <li>Language:   <span>English , Tamil , Malayalam</span></li>
                                            </ul>
                                            <Link className="btn btn-primary btn-sm st-d">
                                                Online
                                            </Link>
                                            <Link className="btn btn-primary btn-sm">
                                                <i class="fa fa-phone"></i> Call
                                                <small> /<i class="fa fa-inr" aria-hidden="true"></i>   20 per Hour</small>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="backside">
                                    <div className="card">
                                        <div className="card-body text-center mt-4">
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
                                                <li> <span>Tarot Card  , Vedic Astrology</span></li>
                                                <li>Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li>Experience:  <span>22 Years</span></li>
                                            </ul>
                                            <Link to="/astrologerdetail" className="btn btn-primary btn-sm">
                                                <i class="fa fa-phone"></i> Call Now
                                                <small>  20  <i class="fa fa-inr" aria-hidden="true"></i>  /Hour</small>
                                            </Link>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </Col>
                <Col md="3">
                    <div className="image-flip">
                            <div className="mainflip flip-0">
                                <div className="frontside">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <p><img src={astro3} alt=""/></p>
                                            <h4 className="card-title">Krishnan Iyer</h4>
                                            <ul className="mb-3">
                                                <li> <span>Tarot Card Reading , Vedic Astrology</span></li>
                                                <li>Language:   <span>English , Tamil , Malayalam</span></li>
                                            </ul>
                                            <Link className="btn btn-primary btn-sm st-d">
                                                Online
                                            </Link>
                                            <Link className="btn btn-primary btn-sm">
                                                <i class="fa fa-phone"></i> Call
                                                <small> /<i class="fa fa-inr" aria-hidden="true"></i>   20 per Hour</small>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="backside">
                                    <div className="card">
                                        <div className="card-body text-center mt-4">
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
                                                <li> <span>Tarot Card  , Vedic Astrology</span></li>
                                                <li>Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li>Experience:  <span>22 Years</span></li>
                                            </ul>
                                            <Link to="/astrologerdetail" className="btn btn-primary btn-sm">
                                                <i class="fa fa-phone"></i> Call Now
                                                <small>  20  <i class="fa fa-inr" aria-hidden="true"></i>  /Hour</small>
                                            </Link>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </Col>
                <Col md="3">
                    <div className="image-flip">
                            <div className="mainflip flip-0">
                                <div className="frontside">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <p><img src={astro3} alt=""/></p>
                                            <h4 className="card-title">Krishnan Iyer</h4>
                                            <ul className="mb-3">
                                                <li> <span>Tarot Card Reading , Vedic Astrology</span></li>
                                                <li>Language:   <span>English , Tamil , Malayalam</span></li>
                                            </ul>
                                            <Link className="btn btn-primary btn-sm st-d">
                                                Online
                                            </Link>
                                            <Link className="btn btn-primary btn-sm">
                                                <i class="fa fa-phone"></i> Call
                                                <small> /<i class="fa fa-inr" aria-hidden="true"></i>   20 per Hour</small>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="backside">
                                    <div className="card">
                                        <div className="card-body text-center mt-4">
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
                                                <li> <span>Tarot Card  , Vedic Astrology</span></li>
                                                <li>Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li>Experience:  <span>22 Years</span></li>
                                            </ul>
                                            <Link to="/astrologerdetail" className="btn btn-primary btn-sm">
                                                <i class="fa fa-phone"></i> Call Now
                                                <small>  20  <i class="fa fa-inr" aria-hidden="true"></i>  /Hour</small>
                                            </Link>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </Col>
                <Col md="3">
                    <div className="image-flip">
                            <div className="mainflip flip-0">
                                <div className="frontside">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <p><img src={astro3} alt=""/></p>
                                            <h4 className="card-title">Krishnan Iyer</h4>
                                            <ul className="mb-3">
                                                <li> <span>Tarot Card Reading , Vedic Astrology</span></li>
                                                <li>Language:   <span>English , Tamil , Malayalam</span></li>
                                            </ul>
                                            <Link className="btn btn-primary btn-sm st-d">
                                                Online
                                            </Link>
                                            <Link className="btn btn-primary btn-sm">
                                                <i class="fa fa-phone"></i> Call
                                                <small> /<i class="fa fa-inr" aria-hidden="true"></i>   20 per Hour</small>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="backside">
                                    <div className="card">
                                        <div className="card-body text-center mt-4">
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
                                                <li> <span>Tarot Card  , Vedic Astrology</span></li>
                                                <li>Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li>Experience:  <span>22 Years</span></li>
                                            </ul>
                                            <Link to="/astrologerdetail" className="btn btn-primary btn-sm">
                                                <i class="fa fa-phone"></i> Call Now
                                                <small>  20  <i class="fa fa-inr" aria-hidden="true"></i>  /Hour</small>
                                            </Link>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </Col>
                <Col md="3">
                    <div className="image-flip">
                            <div className="mainflip flip-0">
                                <div className="frontside">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <p><img src={astro3} alt=""/></p>
                                            <h4 className="card-title">Krishnan Iyer</h4>
                                            <ul className="mb-3">
                                                <li> <span>Tarot Card Reading , Vedic Astrology</span></li>
                                                <li>Language:   <span>English , Tamil , Malayalam</span></li>
                                            </ul>
                                            <Link className="btn btn-primary btn-sm st-d">
                                                Online
                                            </Link>
                                            <Link className="btn btn-primary btn-sm">
                                                <i class="fa fa-phone"></i> Call
                                                <small> /<i class="fa fa-inr" aria-hidden="true"></i>   20 per Hour</small>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="backside">
                                    <div className="card">
                                        <div className="card-body text-center mt-4">
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
                                                <li> <span>Tarot Card  , Vedic Astrology</span></li>
                                                <li>Language:   <span>English , Tamil , Malayalam</span></li>
                                                <li>Experience:  <span>22 Years</span></li>
                                            </ul>
                                            <Link to="/astrologerdetail" className="btn btn-primary btn-sm">
                                                <i class="fa fa-phone"></i> Call Now
                                                <small>  20  <i class="fa fa-inr" aria-hidden="true"></i>  /Hour</small>
                                            </Link>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </Col> */}
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}

export default AllAstrologerList;
