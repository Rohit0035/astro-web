import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
// import AutoSearch from './autosearch'
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";

class UserRequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "",
      fullname: "",
      astroid: "",
      gender: "",
      tym_of_birth: "",
      birth_city: "",
      birth_state: "",
      birth_country: "",
      marital_status: "",
      occupation: "",
      topic_of_cnsrn: "",
      data: [],
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/user/viewoneuser/${id}`)
      .then((response) => {
        console.log("viewone_user", response.data.data);
        this.setState({
          fullname: response.data.data.fullname,
          mobile: response.data.data.mobile,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    // let { id } = this.props.match.params
    // console.log(id)
    let userId = JSON.parse(localStorage.getItem("user_id"));
    let astro_id = JSON.parse(localStorage.getItem("astroId"));
    let obj = {
      userid: userId,
      astroid: astro_id,
      fullname: this.state.fullname,
      gender: this.state.gender,
      tym_of_birth: this.state.tym_of_birth,
      birth_city: this.state.birth_city,
      birth_state: this.state.birth_state,
      birth_country: this.state.birth_country,
      marital_status: this.state.marital_status,
      occupation: this.state.occupation,
      topic_of_cnsrn: this.state.topic_of_cnsrn,
      mobile: parseInt(this.state.mobile),

      // alt_mobile: parseInt(this.state.alt_mobile),
      // mobile: parseInt(this.state.mobile),
      // email: this.state.email,
    };

    axiosConfig
      .post(`/user/add_chat_intake`, obj)
      .then((response) => {
        console.log("@@@@@", response.data.data);
        swal("Success!", "Submitted SuccessFull!", "success");
        window.location.reload("/addressForm");
      })

      .catch((error) => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  };
  render() {
    // const { viewoneUserData } = this.state;

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
                    <h1>Chat InTake Form</h1>
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
                            name="fullname"
                            required
                            placeholder="Enter Your Fullname"
                            value={this.state.fullname}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      {/* <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Last Name:</label>
                          <input
                            type="text"
                            name="name"
                            // required
                            placeholder="Enter Your Fullname"
                          />
                        </div>
                      </Col> */}
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Gender*</label>
                          <select
                            className="form-control"
                            value={this.state.gender}
                            onChange={this.changeHandler}
                          >
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
                            value={this.state.mobile}
                            onChange={this.changeHandler}
                            // required
                            placeholder="Enter Your Number"
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Date of Birth*</label>
                          <input
                            type="date"
                            name="dob"
                            value={this.state.dob}
                            onChange={this.changeHandler}
                            // required
                            placeholder="Enter Your Number"
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Time of Birth*</label>
                          <input
                            type="time"
                            name="tym_of_birth"
                            value={this.state.tym_of_birth}
                            onChange={this.changeHandler}
                            // required
                            placeholder="Enter Your Number"
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Place of Birth City*</label>
                          <input
                            type="text"
                            name="birth_city"
                            value={this.state.birth_city}
                            onChange={this.changeHandler}
                            // required
                            placeholder="Enter Your email"
                          />
                        </div>
                      </Col>

                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Place of Birth State*</label>
                          <input
                            type="text"
                            name="birth_state"
                            value={this.state.birth_state}
                            onChange={this.changeHandler}
                            // required
                            placeholder="Enter Your Number"
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Place of Birth Country*</label>
                          <input
                            type="text"
                            name="birth_country"
                            value={this.state.birth_country}
                            onChange={this.changeHandler}
                            // required
                            placeholder="Enter Your Number"
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Marital Status*</label>
                          <select
                            className="form-control"
                            value={this.state.marital_status}
                            onChange={this.changeHandler}
                          >
                            <option>lorem</option>
                            <option>lorem</option>
                          </select>
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Occupation*</label>
                          <select
                            className="form-control"
                            value={this.state.occupation}
                            onChange={this.changeHandler}
                          >
                            <option>lorem</option>
                            <option>lorem</option>
                          </select>
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Topic of concern*</label>
                          <select
                            className="form-control"
                            value={this.state.topic_of_cnsrn}
                            onChange={this.changeHandler}
                          >
                            <option>lorem</option>
                            <option>lorem</option>
                          </select>
                        </div>
                      </Col>

                      <Col md="12" className="mt-3">
                        <Button className="btn btn-warning">
                          Start chat with Mukesh07
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
