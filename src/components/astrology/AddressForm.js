import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Input,
  InputGroup,
  Form,
  Button,
} from 'reactstrap'
import LayoutOne from '../../layouts/LayoutOne'
import AutoSearch from './autosearch'
import axiosConfig from '../../axiosConfig'
import swal from 'sweetalert'

class AddressForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      alt_mobile: '',
      flat_no: '',
      locality: '',
      city: '',
      state: '',
      country: '',
      pincode: '',
      landmark: '',
      fullname: '',
    }
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  submitHandler = (e) => {
    e.preventDefault()
    let { id } = this.props.match.params
    console.log(id)
    axiosConfig
      .post(`/user/shipping_address/${id}`, this.state)
      .then((response) => {
        console.log(response.data)
        swal('Success!', 'Submitted SuccessFull!', 'success')
        window.location.reload('/pages/other/cartList')
      })

      .catch((error) => {
        swal('Error!', 'You clicked the button!', 'error')
        console.log(error.response)
      })
  }

  render() {
    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              backgroundColor: '#FFD59E',
              width: '100%',
              padding: '70px 0px',
              backgroundSize: 'cover',
            }}
          >
            <Container>
              <Row>
                <Col md="12">
                  <div className="leftcont text-left">
                    <h1>
                      Astromall Shop/ Product Detail/ Consultant List/ Address
                    </h1>
                    <h3>Shop Best Online Astrology Products And Services</h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section className="">
          <Container>
            <Row>
              <Col lg="4">
                <div className="wal-amt">
                  <h3>Continue with your saved address</h3>
                  <hr></hr>
                  <div className="user-pro py-0">
                    <ul>
                      <li>
                        Name : <span>lorem</span>
                      </li>
                      <li>
                        Mobile : <span>4454544545</span>
                      </li>
                      <li>
                        Email : <span>Test@gmail.com</span>
                      </li>
                      <li>
                        State : <span>MP</span>
                      </li>
                      <li>
                        City : <span>Indore</span>
                      </li>
                      <li>
                        Address : <span>Vijay Nagar</span>
                      </li>
                      <li>
                        Locality : <span>Indore</span>
                      </li>
                      <li>
                        Pin Code : <span>452001</span>
                      </li>
                    </ul>
                  </div>
                  <div className="py-3 text-center">
                    <Link to="/cartlist">
                      <Button className="btn btn-warning">
                        Deliver To This Address{' '}
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg="8">
                <div className="wal-amt">
                  <h3>Add New Address </h3>
                  <hr></hr>
                  <form onSubmit={this.submitHandler}>
                    <Row>
                      <Col md="4">
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
                      <Col md="4">
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
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Mobile Number*</label>
                          <input
                            type="number"
                            name="mobile"
                            required
                            placeholder="Enter Your Number"
                            value={this.state.mobile}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Alternative Number*</label>
                          <input
                            type="text"
                            name="alt_mobile"
                            required
                            placeholder="Enter Your Number"
                            value={this.state.alt_mobile}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Flat No:*</label>
                          <input
                            type="text"
                            name="flat_no"
                            required
                            placeholder="Enter Your Number"
                            value={this.state.flat_no}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Locality*</label>
                          <input
                            type="text"
                            name="locality"
                            required
                            placeholder="Enter Your Number"
                            value={this.state.locality}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>City*</label>
                          <input
                            type="text"
                            name="city"
                            required
                            placeholder="Enter Your Number"
                            value={this.state.city}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>State / Province*</label>
                          <input
                            type="text"
                            name="state"
                            required
                            placeholder="Enter Your state"
                            value={this.state.state}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Country*</label>
                          <input
                            type="text"
                            name="country"
                            required
                            placeholder="Enter Your Country"
                            value={this.state.country}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>PinCode*</label>
                          <input
                            type="number"
                            name="pincode"
                            required
                            placeholder="Enter Your Number"
                            value={this.state.pincode}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="4">
                        <div class="form-group mtb-10">
                          <label>Landmark*</label>
                          <input
                            type="text"
                            name="landmark"
                            required
                            placeholder="Enter Your landmark"
                            value={this.state.landmark}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </Col>
                      <Col md="12" className="mt-3">
                        <Button className="btn btn-warning">
                          Save Address
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
    )
  }
}

export default AddressForm
