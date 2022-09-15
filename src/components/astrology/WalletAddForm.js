import React from "react"
import { Link } from "react-router-dom";
import { Container, Row,  Col, Input, InputGroup, Form,Button } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import "../../assets/scss/astroteam.scss";
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class WalletAddForm extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  render() {


  return (

    <LayoutOne headerTop="visible">
        <section>
              <Container>
                    <Row>
                       <Col lg="2">

                       </Col>
                        <Col lg="8">
                           <div className="wal-amt">
                               <h3>Add Amount to Wallet</h3>
                                <form>
                                   <Row>
                                      <Col md="12">
                                         <label>Amount</label>
                                            <input
                                                type="text"
                                                placeholder="Enter Amount"
                                                name="firstname"
                                                value={this.state.firstname}
                                                onChange={this.changeHandler}
                                            />  
                                      </Col>
                                      <Col md="12" className="mt-3">
                                          <Button className="btn btn-success">Submit</Button>
                                      </Col>
                                   </Row>
                                     
                                </form>
                           </div>
                        </Col>
                        <Col lg="2">
                        
                        </Col>
                    </Row>
              </Container>
        </section>
   </LayoutOne>
  );
  }
}


export default WalletAddForm;
