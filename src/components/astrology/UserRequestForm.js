import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
// import AutoSearch from './autosearch'
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";

class UserRequestForm extends React.Component {
 
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
                    <h1>
                        Chat InTake Form
                    </h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section className="">
          <Container>
            <Row>
              <Col lg="12">
                <div className="wal-amt">
                  <h3>Chat InTake Form </h3>
                  <hr></hr>
                  <form onSubmit={this.submitHandler}>
                    <Row>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>First Name*</label>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Enter Your Fullname"
                          
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Last Name:</label>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Enter Your Fullname"
                          
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Gender*</label>
                          <select className="form-control">
                              <option>Male</option>
                              <option>Female</option>
                          </select>
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Mobile Number*</label>
                          <input
                            type="number"
                            name="mobile"
                            required
                            placeholder="Enter Your Number"
                           
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Date of Birth*</label>
                          <input
                            type="date"
                            name="mobile"
                            required
                            placeholder="Enter Your Number"
                           
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Time of Birth*</label>
                          <input
                            type="time"
                            name="mobile"
                            required
                            placeholder="Enter Your Number"
                           
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Place of Birth City*</label>
                          <input
                            type="text"
                            name="email"
                            required
                            placeholder="Enter Your email"
                            
                          />
                        </div>
                      </Col>
                     
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Place of Birth State*</label>
                          <input
                            type="text"
                            name="alt_mobile"
                            required
                            placeholder="Enter Your Number"
                            
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Place of Birth Country*</label>
                          <input
                            type="text"
                            name="flat_no"
                            required
                            placeholder="Enter Your Number"
                            
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Marital Status*</label>
                          <select className="form-control">
                              <option>lorem</option>
                              <option>lorem</option>
                          </select>
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Occupation*</label>
                          <select className="form-control">
                              <option>lorem</option>
                              <option>lorem</option>
                          </select>
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Topic of concern*</label>
                          <select className="form-control">
                              <option>lorem</option>
                              <option>lorem</option>
                          </select>
                        </div>
                      </Col>
                     
                      <Col md="12" className="mt-3">
                        <Button className="btn btn-warning">
                           Start chat  with Mukesh07
                        </Button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}
export default UserRequestForm;
