import React from "react"
import { Link } from "react-router-dom";
import { Container, Row,  Col, Input, InputGroup, Form,Button } from "reactstrap";
import tilak from "../../assets/img/tilak.png";
import "../../assets/scss/chat.scss";
import LayoutOne from "../../layouts/LayoutOne";
import { useState } from 'react'

class ChatList extends React.Component {
 
  

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
                                        <h1>Chat With Best Astrologers</h1>
                                        {/* <h3>Get instant & accurate, Janam Kundli</h3> */}
                                    </div>
                                </Col>
                                
                            </Row>
                    </Container>
                    
                </div>
        </section>

        <section>
            <Container>
                <div className="">
                    <div className="">
                    {/* <div className="col-md-4 col-xl-3 chat">
                        <div className="card mb-sm-3 mb-md-0 contacts_card">
                        <div className="card-header">
                            <div className="input-group">
                            <input type="text" placeholder="Search..." name className="form-control search" />
                            <div className="input-group-prepend">
                                <span className="input-group-text search_btn"><i class="fa fa-search" aria-hidden="true"></i></span>
                            </div>
                            </div>
                        </div>
                        <div className="card-body contacts_body">
                            <ui className="contacts">
                            <li className="active">
                                <div className="d-flex bd-highlight">
                                    <div className="img_cont">
                                    <span className="online_icon" />
                                    </div>
                                    <div className="user_info">
                                        <span>Khalid</span>
                                        <p>Kalid is online</p>
                                    </div>
                                </div>
                            </li>
                            </ui>
                        </div>
                        <div className="card-footer" />
                        </div>
                    </div> */}
                    <div className="col-md-12 col-xl-12 chat">
                        <div className="card cardchat" 
                        style={{
                            backgroundColor:"#f0f0f0",
                            width: "100%",
                           
                        }}
                        >
                            <div className="card-header msg_head">
                            <div className="d-flex ">
                                    <div className="img_cont">
                                        {/* <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img" /> */}
                                        <img className="rounded-circle user_st" src={tilak} alt="userpic" />
                                    <span className="online_icon" />
                                    </div>
                                    <div className="user_info">
                                        <span>Tilak</span>
                                        <p>typing....</p>
                                    </div>
                                    {/* <div className="video_cam">
                                        <span><i className="fas fa-video" /></span>
                                        <span><i className="fas fa-phone" /></span>
                                    </div> */}
                            </div>
                                
                            </div>
                            <div className="card-body msg_card_body">
                                <div className="d-flex justify-content-start mb-4">
                                    <div className="img_cont_msg">
                                    {/* <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg" /> */}
                                </div>
                                    <div className="msg_cotainer">
                                        Hi, how are you samim?
                                        <span className="msg_time">8:40 AM, Today</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end mb-4">
                                    <div className="msg_cotainer_send">
                                        Hi Khalid i am good tnx how about you?
                                        <span className="msg_time_send">8:55 AM, Today</span>
                                    </div>
                                    <div className="img_cont_msg">
                                        {/* <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg" /> */}
                                    </div>
                                </div>
                               <div className="d-flex justify-content-start mb-4">
                                    <div className="img_cont_msg">
                                        {/* <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg" /> */}
                                    </div>
                                    <div className="msg_cotainer">
                                        I am looking for your next templates
                                        <span className="msg_time">9:07 AM, Today</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end mb-4">
                                    <div className="msg_cotainer_send">
                                        Ok, thank you have a good day
                                        <span className="msg_time_send">9:10 AM, Today</span>
                                    </div>
                                    <div className="img_cont_msg">
                                        {/* <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg" /> */}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start mb-4">
                                    <div className="img_cont_msg">
                                        {/* <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg" /> */}
                                    </div>
                                    <div className="msg_cotainer">
                                        Bye, see you
                                        <span className="msg_time">9:12 AM, Today</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="input-group">
                                    <div className="input-group-append">
                                        <span className="input-group-text attach_btn"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
                                    </div>
                                    <textarea name className="form-control type_msg" placeholder="Type your message..." defaultValue={""} />
                                    <div className="input-group-append">
                                        <span className="input-group-text send_btn"><i class="fa fa-location-arrow" aria-hidden="true"></i></span>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Container>
        </section>
    </LayoutOne>
  );
  }
}


export default ChatList;
