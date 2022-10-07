import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Input,
  InputGroup,
  Form,
  Button,
} from "reactstrap";
import Pj from "../../assets/img/Pj.jpg";
import "../../assets/scss/astropooja.css";
import pagetitle from "../../assets/img/pagetitle.jpg";
import LayoutOne from "../../layouts/LayoutOne";
import axiosConfig from "../../axiosConfig";

class PoojaDetail extends React.Component {
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
      .get(`/admin/viewoneProduct/${id}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          //  title: response.data.title,
          productname: response.data.data.productname,
          mrp_price: response.data.data.mrp_price,
          image: response.data.data.image[0],
          status: response.data.data.status,
          des_price: response.data.data.des_price,
          desc: response.data.data.desc,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
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
                  <Col md="4">
                    <div className="preview-pic tab-content">
                      <img src={this.state?.image} alt="" width="100%" />
                    </div>
                  </Col>
                  <Col md="8">
                    <div className="details">
                      <h3 className="product-title">
                        {this.state.productname}
                      </h3>
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
                      <p>{this.state.desc}</p>
                      <h4 className="price">
                        current price: <span>${this.state.mrp_price}</span>
                      </h4>
                      <h4 className="price">
                        discount price: <span>${this.state.des_price}</span>
                      </h4>

                      {/* <h5 className="colors">colors:
                                            <span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                                            <span className="color green"></span>
                                            <span className="color blue"></span>
                                        </h5> */}
                      <div class="action">
                        <Link to="/consultantlist">
                          <button
                            className="add-to-cart btn btn-default"
                            type="button"
                          >
                            Book Now
                          </button>
                        </Link>
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
