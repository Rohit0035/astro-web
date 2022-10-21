import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import LayoutOne from '../../layouts/LayoutOne'
import axiosConfig from '../../axiosConfig'

class ConsultantList extends React.Component {
  constructor() {
    super()
    this.state = {
      consultantList: [],
    }
  }

  componentDidMount() {
    let { id } = this.props.match.params
    console.log(id)
    axiosConfig
      .get(`/user/product_consltnt_list/${id}`)
      .then((response) => {
        console.log(response.data.data)
        this.setState({ consultantList: response.data.data })
      })
      .catch((error) => {
        console.log(error.response)
      })
  }
  render() {
    console.log('first', this.state.consultantList)
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
                    <h1>Our Consultant</h1>
                    <h3>Select the best astrologer</h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section className="ptb-0 mt-50 mb-50">
          <Container>
            <Row>
              {/* {this.state.consultantList.map((list) => (
                <Col key={list._id}>
                  <Col className="frontside">
                    <div className="card">
                      <div className="card-body text-center py-2">
                        <img src={list?.astroid?.img} alt="img" />

                        <h4 className="card-title">
                          {list?.astroid?.fullname}
                        </h4>
                        <ul>
                          <li>
                            Rating :<span>(1458)</span>
                            <p className="mb-3">
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                            </p>
                          </li>
                          <li>
                            {' '}
                            <span>Tarot Card , Vedic Astrology</span>
                          </li>
                          <li>
                            Language: <span>{list?.astroid?.language}</span>
                          </li>
                        </ul>
                        <div className="my-2">
                          <Link
                            to={'/addressform/'}
                            className="btn btn-primary btn-sm"
                          >
                            Select
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Col>
              ))} */}
              {this.state.consultantList.map((list) => (
                <Col lg="3" md="3" sm="6" xs="12" key={list._id}>
                  <Col className="frontside">
                    <div className="card">
                      <div className="card-body text-center py-2">
                        <img src={list?.astroid?.img} alt="img" />

                        <h4 className="card-title">
                          {list?.astroid?.fullname}
                        </h4>
                        <ul>
                          <li>
                            Rating :<span>(1458)</span>
                            <p className="mb-3">
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <i class="fa fa-star" aria-hidden="true"></i>
                            </p>
                          </li>
                          <li>
                            {' '}
                            <span>Tarot Card , Vedic Astrology</span>
                          </li>
                          <li>
                            Language: <span>{list?.astroid?.language}</span>
                          </li>
                        </ul>
                        <div className="my-2">
                          <Link
                            to={'/addressform/' + list?.astroid?._id}
                            className="btn btn-primary btn-sm"
                          >
                            Select
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </LayoutOne>
    )
  }
}

export default ConsultantList
