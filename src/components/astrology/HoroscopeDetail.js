import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Input,
  InputGroup,
  Form,
  Button,
} from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import heroscope1 from "../../assets/img/heroscope/heroscope1.png";
import astromob from "../../assets/img/astromob.png";
import axiosConfig from "../../axiosConfig";
class HoroscopeDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    // console.log(id);
    axiosConfig
      .get(`/admin/getoneRashi/${id}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          rashi_title: response.data.data.rashi_title,
          desc: response.data.data.desc,
          date: response.data.data.date,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
                    <h1>{this.state.rashi_title}</h1>
                    <h3>{this.state.date}</h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section className="ptb-0">
          <Container>
            <Row>
              <Col lg="4">
                <div className="scope-st">
                  <h3>SELECT OTHER SIGN</h3>
                  <select className="form-control">
                    <option value="aries">Aries</option>
                    <option value="taurus">Taurus</option>
                    <option value="gemini">Gemini</option>
                    <option value="cancer">Cancer</option>
                    <option value="leo">Leo</option>
                    <option value="virgo">Virgo</option>
                    <option value="libra">Libra</option>
                    <option value="scorpio">Scorpio</option>
                    <option value="sagittarius">Sagittarius</option>
                    <option value="capricorn">Capricorn</option>
                    <option value="aquarius">Aquarius</option>
                    <option value="pisces">Pisces</option>
                  </select>

                  <div className="h-cate">
                    <h3>HOROSCOPES:</h3>
                    <ul>
                      <li>
                        <Link>Today's Horoscope</Link>
                      </li>
                      <li>
                        <Link>Today's Love Horoscope</Link>
                      </li>
                      <li>
                        <Link>Tomorrow's Horoscope</Link>
                      </li>
                      <li>
                        <Link>Yesterday's Horoscope</Link>
                      </li>
                      <li>
                        <Link>Weekly Horoscope</Link>
                      </li>
                      <li>
                        <Link>Monthly Horoscope</Link>
                      </li>
                      <li>
                        <Link>Annual Horoscope</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg="8">
                <div className="scope-1">
                  <h3>{this.state.rashi_title}</h3>
                  <p>{this.state.desc}</p>

                  {/* <Row>
                    <Col md="12">
                      <div className="scope-detail">
                        <h4 className="mtb-20">
                          Aries Horoscope Predictions 2022
                        </h4>
                       
                        <div className="scope-text">
                          <p>
                            For starters, the Aries natives shall see a slow
                            start heading their way as they embrace the year
                            2022. And the first thing to slow down for the
                            Arians shall be your career prospects. Despite the
                            placement of Saturn in the Capricorn sign, which is
                            favorable for you, you might have to struggle in
                            finding yourself new opportunities. A dry spell in
                            your career or business shall exist for you till the
                            end of the first quarter of the year. Also, any kind
                            of professional goal.
                          </p>
                        </div>

                        <p className="mt-20">
                          As per the Aries yearly horoscope 2022, the native
                          will perform exceptionally well in their professional
                          life. The beginning of the year will not be as
                          expected. However, by the grace of Saturn in the tenth
                          house of the profession, you will soon be on the verge
                          of performing well in your job as well as in business.
                          Just keep in mind that, especially in the middle of
                          the year, you should be a little aware of the problems
                          in the workplace. This year will be a mixed time for
                          the students. So, make sure you focus well and keep
                          moving forward in your field of study.
                        </p>
                        <p className="mt-10">
                          As for your love life, Aries annual horoscope 2022
                          indicates that you will enjoy a romantic and
                          passionate time in 2022. The planet Jupiter joining
                          Venus in the third quarter will help you overcome the
                          lack of intimate love and indicate an auspicious time.
                          However, for some time, Rahu will enter the second
                          house of domestic affairs, which can make the family
                          environment irritable and tense. Soon that time too
                          will pass, and there will be a pleasant and joyful
                          time for your spouse or partner as well as your
                          family.
                        </p>
                        <p className="mt-10">
                          Financially, the Aries yearly horoscope 2022 predicts
                          that you may suffer losses around the second quarter
                          of the year. So, remember not to invest too much money
                          in too many places. In general, 2022 will not be good
                          in terms of health for Aries natives. Blame the shadow
                          planet Rahu which will be in your 2nd and 8th house,
                          which can cause digestive and allergic problems. Make
                          sure you avoid oily and unhealthy things and stick to
                          a veggie-specific diet.
                        </p>
                      </div>
                    </Col>
                  </Row> */}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}

export default HoroscopeDetail;
