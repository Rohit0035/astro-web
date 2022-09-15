import React, { useState } from "react"
// import render  from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper'
// import LayoutOne from "../../layouts/LayoutOne";
import { Container, Row,  Col, Input, InputGroup, Form,Button } from "reactstrap";
import astrologinbg  from "../../assets/img/astrologin-bg.jpg";
import Select from 'react-select';
import swal from "sweetalert";
import axios from "axios";

// import { colourOptions } from '../astrology/selectdata/data.ts';

class AstrologerSignup extends React.Component {
 
  constructor() {
    super();
    this.state = {
     //  fullnames: 'React',
      fullname:"",
      email:"",
      mobile:"",
     //  password:"",
     //  cnfmPassword:"",
      otp:"",
      gender:"",
      dob:"",
      primary_skills:"",
      all_skills:"",
      language:"",
      exp_in_years:"",
      conrubute_hrs:"",
      hear_abt_astrology :"",
      other_online_platform :"",
      why_onboard_you :"",
      suitable_tym_interview:"",
      crnt_city :"",
      income_src:"",
      highest_qualification:"",
      degree_deploma:"",
      clg_scl_name:"",
      lrn_abt_astrology:"",
      insta_link:"",
      fb_link:"",
      linkedln_link:"",
      youtube_link:"",
      website_link:"",
      anybody_prefer:"",
      min_earning_expe:"",
      max_earning_expe:"",
      long_bio:"",

    };

}

  
componentDidMount() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
}

handlechange = (e) => {
     // e.preventDefault();
     this.setState({ [e.target.name]: e.target.value });
};

changeHandler = (e) => {
     e.preventDefault();
     this.setState({ [e.target.name]: e.target.value });
};
 
submitHandler = (e) => {
     e.preventDefault();
     // this.setState({ otp: false });
     axios
       .post("http://13.235.180.192:8000/user/astrosignup", this.state)
       .then((response) => {
         console.log(response);
         localStorage.setItem("auth-token", response.data.token);
         this.setState({
           token: response.data.token,
         });
         swal("Success!", " Register Successful Done!", "success");
         this.props.history.push("/");
       })
       .catch((error) => {
         console.log(error.response);
           swal("Error!", "Something went wrong", "error");
       });

   };

  render() {

    return (
          <section className=""
          style={{
            backgroundImage: `url(${astrologinbg})`,
            width: "100%",
            padding:"50px 0px",
            height: "100%",
            backgroundSize:"cover"
          }}
        >
         <Container>
              <section className="ptb-30">
                <div className="stp-1">
                    <h2 className="th-1">AstroVipra</h2>
                    <h4 className="th-2">Astrologer Register</h4>
                  <div id="stepper1" class="bs-stepper">
                    <div class="bs-stepper-header">
                      <div class="step" data-target="#test-l-1">
                        <button class="step-trigger">
                          <span class="bs-stepper-circle">1</span>
                          <span class="bs-stepper-label">Personal Details</span>
                        </button>
                      </div>
                      <div class="line"></div>
                      <div class="step" data-target="#test-otp">
                        <button class="step-trigger">
                          <span class="bs-stepper-circle">2</span>
                          <span class="bs-stepper-label">Verify OTP</span>
                        </button>
                      </div>
                      <div class="line"></div>
                      <div class="step" data-target="#test-l-2">
                        <button class="step-trigger">
                          <span class="bs-stepper-circle">3</span>
                          <span class="bs-stepper-label">Skill Details</span>
                        </button>
                      </div>
                      <div class="line"></div>
                      <div class="step" data-target="#test-l-3">
                        <button class="step-trigger">
                          <span class="bs-stepper-circle">3</span>
                          <span class="bs-stepper-label">Other Details</span>
                        </button>
                      </div>
                    </div>
                    
                    <div class="bs-stepper-content">
                      <form onSubmit={this.submitHandler}>
                        <div id="test-l-1" class="content">
                            <Row>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>Name*</label>
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
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>Email address*</label>
                                          <input
                                                type="email"
                                                name="email"
                                                required
                                                placeholder="Enter Your email"
                                                value={this.state.email}
                                                onChange={this.changeHandler}
                                          />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>Mobile Number*</label>
                                          <input
                                                type="text"
                                                name="mobile"
                                                required
                                                placeholder="Enter Your Number"
                                                value={this.state.mobile}
                                                onChange={this.changeHandler}
                                          />
                                    </div>
                               </Col>
                               {/* <Col md="6">
                                       <label>Password*</label>
                                        <input
                                             type="password"
                                             required
                                             minLength={6}
                                             maxLength={8}
                                             name="password"
                                             placeholder="Password"
                                             value={this.state.password}
                                             onChange={this.changeHandler}
                                        />
                               </Col> */}
                               {/* <Col md="6">
                                   <label>Confirm Password*</label>
                                   <input
                                        type="password"
                                        name="cnfmPassword"
                                        required
                                        maxLength="8"
                                        placeholder="Confrim Password"
                                        value={this.state.cnfmPassword}
                                        onChange={this.changeHandler}
                                   />
                               </Col> */}
                               {/* <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>Upload Image*</label>
                                          <input
                                             type="file"
                                             required
                                             onChange={this.onChangeHandler}  
                                        />
                                    </div>
                               </Col> */}
                            </Row>
                          <button class="btn btn-primary" onClick={() => this.stepper.next()}>Next</button>
                        </div>
                        <div id="test-otp" class="content">
                               <Row>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>Otp*</label>
                                          <input
                                                  type="text"
                                                  required
                                                  name="otp"
                                                  value={this.state.otp}
                                                  onChange={this.changeHandler}
                                          />
                                    </div>
                               </Col>
                              </Row>
                          <button class="btn btn-primary" onClick={() => this.stepper.next()}>Next</button>
                        </div>
                        <div id="test-l-2" class="content">
                               <Row>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>Gender*</label>
                                          <select className="form-control" value={this.state.gender}
                                                onChange={this.changeHandler} name="gender">
                                               <option selected>--select--</option>
                                               <option>Male</option>
                                               <option>Female</option>
                                          </select>
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>DOB*</label>
                                          <input
                                             type="date"
                                             required
                                             name="dob"
                                             maxLength="8"
                                             value={this.state.dob}
                                             onChange={this.changeHandler}
                                        />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>Primary Skills*</label>
                                            {/* <Select
                                              isMulti
                                              name="primary_skills"
                                              required
                                              className="basic-multi-select"
                                              classNamePrefix="select"
                                              onChange={this.changeHandler}
                                            /> */}
                                            <input 
                                                placeholder="Primary Skills"
                                                name="primary_skills"
                                                type="text"
                                                value={this.state.primary_skills}
                                                onChange={this.changeHandler}
                                            />
                                            
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>All Skills*</label>
                                            {/* <Select
                                              isMulti
                                              name="all_skills"
                                              required
                                              className="basic-multi-select"
                                              classNamePrefix="select"
                                              value={this.state.all_skills}
                                              onChange={this.changeHandler}
                                            /> */}
                                             <input 
                                                placeholder="All Skills"
                                                name="all_skills"
                                                type="text"
                                                value={this.state.all_skills}
                                                onChange={this.changeHandler}
                                            />


                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>Language*</label>
                                            {/* <Select
                                              isMulti
                                              required
                                              name="language"
                                              className="basic-multi-select"
                                              classNamePrefix="select"
                                              onChange={this.changeHandler}
                                              value={this.state.language}
                                            /> */}
                                            <input 
                                                placeholder="language"
                                                name="language"
                                                type="text"
                                                value={this.state.language}
                                                onChange={this.changeHandler}
                                            />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>Experience in years*</label>
                                          <input
                                             type="text"
                                             name="exp_in_years"
                                             required
                                             value={this.state.exp_in_years}
                                             onChange={this.changeHandler}
                                           />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>How many hours you can contribute daily?*</label>
                                          <input
                                             type="text"
                                             name="conrubute_hrs"
                                             required
                                             value={this.state.conrubute_hrs}
                                             onChange={this.changeHandler}
                                        />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>Where did you hear about Astrotalk?*</label>
                                          <input
                                             type="text"
                                             
                                             name="hear_abt_astrology"
                                             value={this.state.hear_abt_astrology}
                                             onChange={this.changeHandler}
                                          />
                                    </div>
                               </Col>
                               <Col md="12">
                                   <p className="mb-0 mt-10">Are you working on any other online platform?*</p>
                                   <Row>
                                       <Col md="6">
                                           <div class="form-group mtb-10">
                                            <label>Name of platform</label>
                                             <input
                                                  type="text"
                                                  name="other_online_platform"
                                                  value={this.state.other_online_platform }
                                                  onChange={this.changeHandler}
                                                />
                                            </div>
                                       </Col>
                                       <Col md="6">
                                           <div class="form-group mtb-10">
                                              <label>Monthly Earning</label>
                                              <input
                                                  type="text"
                                                  // name="max_earning_expe"
                                                  // value={this.state.max_earning_expe}
                                                  // onChange={this.changeHandler}
                                                />
                                            </div>
                                       </Col>
                                   </Row>
                               </Col>
                             
                              
                              </Row>
                          <button class="btn btn-primary" onClick={() => this.stepper.next()}>Next</button>
                        </div>
                        <div id="test-l-3" class="content">
                            <Row>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>Why do you think we should onboard you?*</label>
                                          <input
                                                  type="text"
                                                  required
                                                  name="why_onboard_you"
                                                  value={this.state.why_onboard_you}
                                                  onChange={this.changeHandler}
                                          />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>What is a suitable time for interview*</label>
                                          <input
                                                  type="text"
                                                  required
                                                  name="suitable_tym_interview"
                                                  value={this.suitable_tym_interview }
                                                  onChange={this.changeHandler}

                                          />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>Which city do you currently live in?</label>
                                          <input
                                                  type="text"
                                                  required
                                                  name="crnt_city"
                                                  value={this.crnt_city}
                                                  onChange={this.changeHandler}
                                          />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>Main source of business (other than astrology)*</label>
                                          {/* <Select
                                              value={this.state.income_src}
                                              required
                                              onChange={this.changeHandler}
                                          /> */}
                                           <input 
                                                placeholder="source of business"
                                                name="income_src"
                                                type="text"
                                                value={this.state.income_src}
                                                onChange={this.changeHandler}
                                            />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>Select your highest qualification*</label>
                                          {/* <Select
                                              value={this.state.highest_qualification }
                                              required
                                              options={qualioption}
                                              onChange={this.changeHandler}
                                          /> */}
                                           <input 
                                                placeholder="qualification"
                                                name="highest_qualification"
                                                type="text"
                                                value={this.state.highest_qualification}
                                                onChange={this.changeHandler}
                                            />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>Degree/Diploma*</label>
                                          {/* <Select
                                              value={this.state.degree_deploma}
                                              required
                                              onChange={this.changeHandler}
                                          /> */}
                                           <input 
                                                placeholder="Degree/Diploma"
                                                name="degree_deploma"
                                                type="text"
                                                value={this.state.degree_deploma}
                                                onChange={this.changeHandler}
                                            />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>College/School/University*</label>
                                          <input
                                                  type="text"
                                                  name="clg_scl_name"
                                                  required
                                                  value={this.clg_scl_name}
                                                  onChange={this.changeHandler}
                                          />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>From where did you learn Astrology?</label>
                                          <input
                                                  type="text"
                                                  name="lrn_abt_astrology"
                                                  required
                                                  value={this.lrn_abt_astrology}
                                                  onChange={this.changeHandler}
                                          />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>Instagram profile link</label>
                                          <input
                                                  type="text"
                                                  name="insta_link "
                                                  required
                                                  value={this.insta_link}
                                                  onChange={this.changeHandler}
                                          />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>Facebook profile link</label>
                                          <input
                                                  type="text"
                                                  name="fb_link"
                                                  required
                                                  value={this.fb_link}
                                                  onChange={this.changeHandler}
                                          />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>LinkedIn profile link</label>
                                          <input
                                                  type="text"
                                                  name="linkedln_link"
                                                  required
                                                  value={this.linkedln_link}
                                                  onChange={this.changeHandler}
                                          />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>Youtube channel link</label>
                                          <input
                                                  type="text"
                                                  name="youtube_link"
                                                  required
                                                  value={this.youtube_link}
                                                  onChange={this.changeHandler}
                                          />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>Name of the person who referred you?</label>
                                          <input
                                                  type="text"
                                                  name="anybody_prefer"
                                                  required
                                                  value={this.anybody_prefer}
                                                  onChange={this.changeHandler}
                                          />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>Minimum Earning Expectation from AstroVipra*</label>
                                          <input
                                                  type="text"
                                                  name="min_earning_expe"
                                                  required
                                                  value={this.min_earning_expe}
                                                  onChange={this.changeHandler}
                                          />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>Maximum Earning Expectation from AstroVipra*</label>
                                          <input
                                                  type="text"
                                                  name="max_earning_expe"
                                                  required
                                                  value={this.max_earning_expe}
                                                  onChange={this.changeHandler}
                                          />
                                    </div>
                               </Col>
                               <Col md="6">
                                    <div class="form-group mtb-10">
                                          <label>Website profile link</label>
                                          <input
                                                  type="text"
                                                  name="max_earning_expe"
                                                  required
                                                  value={this.max_earning_expe}
                                                  onChange={this.changeHandler}
                                          />
                                    </div>
                               </Col>
                               
                               <Col md="12">
                                    <div class="form-group mtb-10">
                                          <label>Long bio*</label>
                                          <textarea type="text" class="form-control"
                                           name="long_bio"
                                           required
                                           value={this.long_bio}
                                           onChange={this.changeHandler}
                                           placeholder="Please let us know more about you" />
                                    </div>
                               </Col>
                              </Row>
                              <p className="ptb-10">
                                  You can reach out to us for Astrologer onboarding support team at onboarding@astrovipra.com in case of any issues or queries.
                              </p>
                          <Button type="submit" class="btn btn-primary mt-5">Submit</Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
          </Container>
          </section>
    );
  }
}


export default AstrologerSignup;
