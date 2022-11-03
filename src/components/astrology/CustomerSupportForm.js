import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
// import AutoSearch from './autosearch'
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
import Form from 'react-bootstrap/Form';

class CustomerSupportForm extends React.Component {
 
  render() {
    return (
      <LayoutOne headerTop="visible">
        {/* <section className="pt-0 pb-0">
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
                        Create Ticket
                    </h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section> */}

        <section className="">
          <Container>
            <div className="spt-1">
            <Row>
              <Col lg="12">
                <div className="wal-amt">
                  <h3>Create Ticket </h3>
                  <hr></hr>
                  <form onSubmit={this.submitHandler}>
                    <Row>
                      <Col md="12">
                        <div class="form-group mtb-10">
                          <label>Select </label>
                          <Form.Select aria-label="Default select example">
                            <option>--Select --</option>
                            <option value="1">Previous Order</option>
                            <option value="2">Transaction Related</option>
                            <option value="3">Technical Issue</option>
                            <option value="4">Astrologer Related</option>
                            <option value="5">Live event related</option>
                            <option value="6">Offers & Coupons</option>
                            <option value="6">General FAQs</option>
                            <option value="6">Escalate the issue</option>
                            <option value="6">AstroMall Related</option>
                            <option value="6">AstroMall Related</option>
                            <option value="6">AstroMall Related</option>
                            <option value="6">AstroMall Related</option>
                          </Form.Select>
                        </div>
                      </Col>
                     
                    
                      <Col md="12">
                        <div class="form-group mtb-10">
                          <label>Description*</label>
                           <textarea className="form-control" placeholder="support ticket description...">
                           </textarea>
                        </div>
                      </Col>
                      <Col md="12" className="mt-3">
                        {/* <Button className="btn btn-warning">
                            Submit
                        </Button> */}
                        <Link to="/customersupport"  className="btn btn-warning" >Submit</Link>
                      </Col>
                    </Row>
                  </form>
                </div>
              </Col>
            </Row>
            </div>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}
export default CustomerSupportForm;
