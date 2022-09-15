import React from "react"
import { Link } from "react-router-dom";
import { Container, Row,  Col, Input, InputGroup, Form,Button } from "reactstrap";
import textbottom from "../../assets/img/textbottom.png";
import astro2 from "../../assets/img/team/astro2.jpg";


class SectionPooja extends React.Component {
 
  render() {

  return (
    <Container>
        <div className="heading mt-40">
              <h2>Rituals</h2>
              <img src={textbottom} alt=""/>
         </div>
        <Row>
            <div className="col-lg-12 col-md-12 mb-30">
            <div className="category-home">
            <section className="pt-0" >
            <div className="container">
            <Row>
                <Col md="3">
                    <div className="product-grid8">
                        <div class="product-image8">
                            <Link to="/poojadetail">
                            <img src={astro2} alt=""/>
                            </Link>
                            <ul class="social">
                                {/* <li><a href="" className="fa fa-search"></a></li> */}
                                <li><Link className="fa fa-search"></Link></li>
                                <li><Link className="fa fa-shopping-bag"></Link></li>
                                <li><Link className="fa fa-shopping-cart"></Link></li>
                            </ul>
                            <span className="product-discount-label">-20%</span>
                        </div>
                        <div className="product-content">
                            <div className="price"><i class="fa fa-inr" aria-hidden="true"></i> 800.00
                                <span><i className="fa fa-inr" aria-hidden="true"></i> 1000.00</span>
                            </div>
                            <span className="product-shipping">Free Shipping</span>
                             <h3 className="title"><Link>Magic ball reader</Link></h3>
                             <Link className="all-deals">View More<i class="fa fa-angle-right icon"></i></Link>
                        </div>
                    </div>
                </Col>
                <Col md="3">
                    <div className="product-grid8">
                        <div class="product-image8">
                            <Link to="/poojadetail">
                            <img src={astro2} alt=""/>
                            </Link>
                            <ul class="social">
                                {/* <li><a href="" className="fa fa-search"></a></li> */}
                                <li><Link className="fa fa-search"></Link></li>
                                <li><Link className="fa fa-shopping-bag"></Link></li>
                                <li><Link className="fa fa-shopping-cart"></Link></li>
                            </ul>
                            <span className="product-discount-label">-20%</span>
                        </div>
                        <div className="product-content">
                            <div className="price"><i class="fa fa-inr" aria-hidden="true"></i> 800.00
                                <span><i className="fa fa-inr" aria-hidden="true"></i> 1000.00</span>
                            </div>
                            <span className="product-shipping">Free Shipping</span>
                             <h3 className="title"><Link>Magic ball reader</Link></h3>
                             <Link className="all-deals">View More<i class="fa fa-angle-right icon"></i></Link>
                        </div>
                    </div>
                </Col>
                <Col md="3">
                    <div className="product-grid8">
                        <div class="product-image8">
                            <Link to="/poojadetail">
                            <img src={astro2} alt=""/>
                            </Link>
                            <ul class="social">
                                {/* <li><a href="" className="fa fa-search"></a></li> */}
                                <li><Link className="fa fa-search"></Link></li>
                                <li><Link className="fa fa-shopping-bag"></Link></li>
                                <li><Link className="fa fa-shopping-cart"></Link></li>
                            </ul>
                            <span className="product-discount-label">-20%</span>
                        </div>
                        <div className="product-content">
                            <div className="price"><i class="fa fa-inr" aria-hidden="true"></i> 800.00
                                <span><i className="fa fa-inr" aria-hidden="true"></i> 1000.00</span>
                            </div>
                            <span className="product-shipping">Free Shipping</span>
                             <h3 className="title"><Link>Magic ball reader</Link></h3>
                             <Link className="all-deals">View More<i class="fa fa-angle-right icon"></i></Link>
                        </div>
                    </div>
                </Col>
                <Col md="3">
                    <div className="product-grid8">
                        <div class="product-image8">
                            <Link to="/poojadetail">
                            <img src={astro2} alt=""/>
                            </Link>
                            <ul class="social">
                                {/* <li><a href="" className="fa fa-search"></a></li> */}
                                <li><Link className="fa fa-search"></Link></li>
                                <li><Link className="fa fa-shopping-bag"></Link></li>
                                <li><Link className="fa fa-shopping-cart"></Link></li>
                            </ul>
                            <span className="product-discount-label">-20%</span>
                        </div>
                        <div className="product-content">
                            <div className="price"><i class="fa fa-inr" aria-hidden="true"></i> 800.00
                                <span><i className="fa fa-inr" aria-hidden="true"></i> 1000.00</span>
                            </div>
                            <span className="product-shipping">Free Shipping</span>
                             <h3 className="title"><Link>Magic ball reader</Link></h3>
                             <Link className="all-deals">View More<i class="fa fa-angle-right icon"></i></Link>
                        </div>
                    </div>
                </Col>
            </Row>
            </div>
            </section>
            </div>
            </div>
         </Row>
    </Container>
  );
  }
}


export default SectionPooja;
