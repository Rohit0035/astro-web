import React from "react"
import { Link } from "react-router-dom";
import { Container, Row,  Col, Input, InputGroup, Form,Button } from "reactstrap";
// import aboutimg from "../../assets/img/aboutimg.jpg";
import imgvertical from "../../assets/img/img-vertical.jpg";
import abouttwo from "../../assets/img/abouttwo.png";
import LayoutOne from "../../layouts/LayoutOne";
import scope  from "../../assets/img/scope.png";
import FunFactOne from "../../wrappers/fun-fact/FunFactOne";
import asectionbg from "../../assets/img/asectionbg.jpg";
import heroscope1 from "../../assets/img/heroscope/heroscope1.png";
import taurus from "../../assets/img/heroscope/taurus.png";
import gemini from "../../assets/img/heroscope/gemini.png";
import cancer from "../../assets/img/heroscope/cancer.png";
import leo from "../../assets/img/heroscope/leo.png";
import virgo from "../../assets/img/heroscope/virgo.png";
import libra from "../../assets/img/heroscope/libra.png";
import scarpio from "../../assets/img/heroscope/scarpio.png";
import sagittariusbig from "../../assets/img/heroscope/sagittariusbig.png";
import capricor from "../../assets/img/heroscope/capricor.png";
import aquarius from "../../assets/img/heroscope/aquarius.png";
import pisces from "../../assets/img/heroscope/pisces.png";

class HeroscopesTwo extends React.Component {
 
  

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
                                        <h1>Todays Horoscope 2022</h1>
                                        <p></p>
                                    </div>
                                </Col>
                                
                            </Row>
                    </Container>
                    
                </div>
            </section>

              <section className="ptb-0">
                  <Container>
                      <Row>
                          <Col lg="12">
                            <div className="scope-1">
                                <h3>TODAY'S HOROSCOPE</h3>
                                <p>AstroVipra brings together astrologers and their boundless knowledge about the occult science of Astrology on one platform and lets you connect with them 24*7. Apart from the best future predictions that help you get through the difficult phase of life, AstroVipra also offers Free Live astrology sessions, Daily horoscope, Free kundli matching service, Spiritual store and much more.</p>
                              
                               <Row>
                                   <Col md="6">
                                        <div className="scope-detail scop-2 mtb-10">
                                              <div className="scope-img">
                                                   <img src={heroscope1} alt=""/>
                                              </div>
                                              <div className="scope-text">
                                                 <h4 className="">Today’s horoscope for zodiac signs</h4>
                                                  <p> 
                                                  For starters, the Aries natives shall see a slow start heading their way as they embrace the year 2022. And the first thing to slow down for the Arians shall be your career prospects. 
                                                  </p>
                                                  <span className="scope-sp">
                                                      <Link>Read More</Link>
                                                  </span>
                                              </div>
                                        </div>
                                   </Col>
                                   <Col md="6">
                                        <div className="scope-detail scop-2 mtb-10">
                                              <div className="scope-img">
                                                   <img src={taurus} alt=""/>
                                              </div>
                                              <div className="scope-text">
                                                  <h4 className="">Taurus Today's Horoscope</h4>
                                                  <p> 
                                                  Relationship: You are feeling drained both physically and emotionally, and you are not at your most open right now. You have withdrawn into yourself, and you are not able to really let your hair down right now. You will need to be a little quiet and have some time alone to think.ravel: Travel with your partner for ple... 
                                                  </p>
                                                  <span className="scope-sp">
                                                      <Link>Read More</Link>
                                                  </span>
                                              </div>
                                        </div>
                                   </Col>
                                   <Col md="6">
                                        <div className="scope-detail scop-2 mtb-10">
                                              <div className="scope-img">
                                                   <img src={gemini} alt=""/>
                                              </div>
                                              <div className="scope-text">
                                                  <h4 className="">Gemini Today's Horoscope</h4>
                                                  <p> 
                                                  Relationship: Taken signs, if you find that your own insecurities are poisoning your partnership, talk it out with them and consider seeking therapy. Single signs will feel wanted and lusted for.Travel: Don’t travel today. Don’t travel anytime soon. Stay at home.Money: Your lucky numbers are going to be 91... 
                                                  </p>
                                                  <span className="scope-sp">
                                                      <Link>Read More</Link>
                                                  </span>
                                              </div>
                                        </div>
                                   </Col>
                                   <Col md="6">
                                        <div className="scope-detail scop-2 mtb-10">
                                              <div className="scope-img">
                                                   <img src={cancer} alt=""/>
                                              </div>
                                              <div className="scope-text">
                                                  <h4 className="">Cancer Today's Horoscope</h4>
                                                  <p>
                                                  Relationship: There may be a conflict in your relationship today. If the situation is your fault, make sure that you apologize from the heart. Single signs are in the mood to be flirty!Travel: The ideal place for you to travel to is going to be Japan! Visit the capital if you can! Money: Your lucky numbers are going to... 
                                                  </p>
                                                  <span className="scope-sp">
                                                      <Link>Read More</Link>
                                                  </span>
                                              </div>
                                        </div>
                                   </Col>
                                   <Col md="6">
                                        <div className="scope-detail scop-2 mtb-10">
                                              <div className="scope-img">
                                                   <img src={leo} alt=""/>
                                              </div>
                                              <div className="scope-text">
                                                  <h4 className="">Leo Today's Horoscope</h4>
                                                  <p>
                                                  Relationship: Leo, it’s likely that you are carrying a lot of pain inside of you. This needs to heal before you are able to share yourself with someone else.Travel: The ideal place for you to travel to is going to be a wonderful city located in Croatia.Money: Your lucky color is going to be black (even though it...
                                                  </p>
                                                  <span className="scope-sp">
                                                      <Link>Read More</Link>
                                                  </span>
                                              </div>
                                        </div>
                                   </Col>
                                   <Col md="6">
                                        <div className="scope-detail scop-2 mtb-10">
                                              <div className="scope-img">
                                                   <img src={virgo} alt=""/>
                                              </div>
                                              <div className="scope-text">
                                                  <h4 className="">Virgo Today's Horoscope</h4>
                                                  <p>
                                                  Relationship: Single Virgo will meet someone refreshing today. It will most likely be an intelligent Capricorn. Take Virgo signs are going to feel like your partner is cheating on you.Travel: The ideal place for you to visit is going to be Contagem, which is a lovely city located in Brazil.Money: The numbers 6, 88, 29...
                                                  </p>
                                                  <span className="scope-sp">
                                                      <Link>Read More</Link>
                                                  </span>
                                              </div>
                                        </div>
                                   </Col>
                                   <Col md="6">
                                        <div className="scope-detail scop-2 mtb-10">
                                              <div className="scope-img">
                                                   <img src={libra} alt=""/>
                                              </div>
                                              <div className="scope-text">
                                                  <h4 className="">libra Today's Horoscope</h4>
                                                  <p>
                                                  Relationship: Your partner is thinking that you are lying to them. Solve the problem and talk it out. Single signs will think about their past. Especially their past relationships.Travel: If this is the first time that you are going to visit this country, make sure that you learn some common phrases in the native langu...
                                                  </p>
                                                  <span className="scope-sp">
                                                      <Link>Read More</Link>
                                                  </span>
                                              </div>
                                        </div>
                                   </Col>
                                   <Col md="6">
                                        <div className="scope-detail scop-2 mtb-10">
                                              <div className="scope-img">
                                                   <img src={scarpio} alt=""/>
                                              </div>
                                              <div className="scope-text">
                                                  <h4 className="">Scorpio Today's Horoscope</h4>
                                                  <p>
                                                  Relationship: You are known as a passionate and very physical person. When you are single, you might be perceived as some sort of player, but when you settle down, you are loyal to the core.Travel: Traveling with friends can be extremely 
                                                  </p>
                                                  <span className="scope-sp">
                                                      <Link>Read More</Link>
                                                  </span>
                                              </div>
                                        </div>
                                   </Col>
                                   <Col md="6">
                                        <div className="scope-detail scop-2 mtb-10">
                                              <div className="scope-img">
                                                   <img src={sagittariusbig} alt=""/>
                                              </div>
                                              <div className="scope-text">
                                                  <h4 className="">Sagittarius Today's Horoscope</h4>
                                                  <p>
                                                  Relationship: Your partner has lied to you and this has broken your trust. Is this fixable or is your relationship doomed? Think about this, deeply. Single signs will flourish in social interactions.Travel: Keep in mind that you won't be able to charge your phone wherever you go. It would be best if you invested in...
                                                  </p>
                                                  <span className="scope-sp">
                                                      <Link>Read More</Link>
                                                  </span>
                                              </div>
                                        </div>
                                   </Col>
                                   <Col md="6">
                                        <div className="scope-detail scop-2 mtb-10">
                                              <div className="scope-img">
                                                   <img src={capricor} alt=""/>
                                              </div>
                                              <div className="scope-text">
                                                  <h4 className="">Capricorn Today's Horoscope</h4>
                                                  <p>
                                                  Relationship: Taken and/or married Capricorn signs might have a small argument related to money or kids (if you have kids). It is likely that single Capricorn signs are going to be flirted with a lot today.Travel: The ideal country for you to visit is going to be Monaco! It’s such an exciting place to visit.Luc...
                                                  </p>
                                                  <span className="scope-sp">
                                                      <Link>Read More</Link>
                                                  </span>
                                              </div>
                                        </div>
                                   </Col>
                                   <Col md="6">
                                        <div className="scope-detail scop-2 mtb-10">
                                              <div className="scope-img">
                                                   <img src={aquarius} alt=""/>
                                              </div>
                                              <div className="scope-text">
                                                  <h4 className="">Aquarius Today's Horoscope</h4>
                                                  <p>
                                                  Relationship: Taken Aquarius signs are feeling the power of seductive Venus and you feel the need to be more emotional and romantic today. Single signs will feel passionate around earth signs.Travel: You can’t stop thinking about traveling today. It is very possible that you have had thoughts about moving to a di...
                                                  </p>
                                                  <span className="scope-sp">
                                                      <Link>Read More</Link>
                                                  </span>
                                              </div>
                                        </div>
                                   </Col>
                                   <Col md="6">
                                        <div className="scope-detail scop-2 mtb-10">
                                              <div className="scope-img">
                                                   <img src={pisces} alt=""/>
                                              </div>
                                              <div className="scope-text">
                                                  <h4 className="">Pisces Today's Horoscope</h4>
                                                  <p>
                                                  Relationship: Caution is advise for the Pisces natives on this day, naive thinking can lead to complications later on. By all indications of today’s Pisces horoscope, things in your love life may be a bit affected, these troubles are temporary so better connections are up ahead.Travel: Your travelling plans are g...
                                                  </p>
                                                  <span className="scope-sp">
                                                      <Link>Read More</Link>
                                                  </span>
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


export default HeroscopesTwo;
