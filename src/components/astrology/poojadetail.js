

import React from "react"
import { Link } from "react-router-dom";
import { Container, Row,  Col, Card,Input, InputGroup, Form,Button } from "reactstrap";
import Pj from "../../assets/img/Pj.jpg";
import "../../assets/scss/astropooja.css";
import pagetitle  from "../../assets/img/pagetitle.jpg";
import LayoutOne from "../../layouts/LayoutOne";
import axiosConfig from "../../axiosConfig";

class PoojaDetail extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: {},
          title:''
          
        };
      }
    componentDidMount() {
        //  let { id } = this.props.match.params;
        // console.log(id);
        axiosConfig
          .get(
            `/user/productbycategory/633bc7ba0a22b164016ff025`
          )
          .then((response) => {
            console.log(response.data);
            this.setState({
             title: response.data.title,
              productname: response.data.productname,
            //   language: response.data.language,
            //   img: response.data.img,
            //   status: response.data.status,
            //   Exp: response.data.Exp,
            //   callCharge: response.data.callCharge,
            //   about_me: response.data.about_me,
            //   msg: response.data.msg,
            //   productname: response.data.productname,
    
             
            
             
            });
          })
          .catch((error) => {
            console.log(error);
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
                                        <img src={Pj}  alt="" width="100%"/>
                                    </div>
                               </Col>
                               <Col md="8">
                                    <div className="details">
                                        <h3 className="product-title">{this.state.title}</h3>
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
                                        <p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
                                        <h4 className="price">current price: <span>$180</span></h4>
                                        <h4 className="price">discount price: <span>$180</span></h4>
                                       
                                       
                                        {/* <h5 className="colors">colors:
                                            <span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                                            <span className="color green"></span>
                                            <span className="color blue"></span>
                                        </h5> */}
                                        <div class="action">
                                            <Link to="/consultantlist">
                                               <button className="add-to-cart btn btn-default" type="button">Book Now</button>
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
