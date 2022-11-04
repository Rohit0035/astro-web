import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
// import AutoSearch from './autosearch'
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
import Form from 'react-bootstrap/Form';
import Ansicon from "../../assets/img/ansicon.png"

class AskQuestion extends React.Component {
 
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
                        Ask Question to Astrologer
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
                     <div className="support-box">
                          <Row>
                              <Col lg="12">
                                 <div className="supp-2 ask-qes-2">
                                     <ul>
                                        <li><h3>Astrologer :  <span>Tilak</span></h3></li>
                                        <li>Date: <span>01/11/2022</span></li>
                                        <li>Time: <span>4:00pm</span></li>
                                        <li>Status: <span></span></li>
                                        <li>Question: 
                                            <ul className="ask-ques"> 
                                                <li>
                                                   <i class="fa fa-quora" aria-hidden="true" style={{marginRight:6}}>1.</i>
                                                    In what area of work can I best show my abilities?
                                                    <p >
                                                        <img src={Ansicon} alt=""/> 
                                                        If you’re not sure which skills you want to share, consider your previous experiences. Where did you excel? Where would your peers say you’re especially practiced? Here are a few ways to determine good skills to put on a resume. 
                                                    </p>
                                                </li>
                                                <li>
                                                <i class="fa fa-quora" aria-hidden="true" style={{marginRight:6}}>2.</i>
                                                    In what area of work can I best show my abilities?
                                                    <p >
                                                        <img src={Ansicon} alt=""/> 
                                                        If you’re not sure which skills you want to share, consider your previous experiences. Where did you excel? Where would your peers say you’re especially practiced? Here are a few ways to determine good skills to put on a resume. 
                                                    </p>
                                                </li>
                                                <li>
                                                    3. fgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfggfg?
                                                </li>
                                                <li>
                                                    4. fgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfggfg?
                                                </li>
                                                <li>
                                                    5. fgfgfgfgfgfgfgfgfgfgfgfgfgfgfgfggfg?
                                                </li>
                                            </ul>
                                        </li>
                                     </ul>
                                     <div className="supp-4">
                                         <h3>Write Your Question</h3>
                                         <form>
                                            <Col md="12">
                                                <div class="form-group mtb-10">
                                                <label>Question*</label>
                                                <textarea className="form-control stp" placeholder="Ask ypur question here..." maxLength={200}>
                                                </textarea>
                                                <small className="sm-txt">Note: Maximum 150 Words Accepted. </small>
                                                </div>
                                            </Col>   
                                            <Button className="btn btn-primary">Submit</Button>
                                         </form>
                                     </div>
                                 </div>
                              </Col>
                          </Row>
                     </div> 
                 </Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}
export default AskQuestion;
