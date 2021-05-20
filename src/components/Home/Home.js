import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Jumbotron, Row, Card, Button, Carousel } from 'react-bootstrap';
import './HomeStyles.css';
import PersonalPic1 from '../../assets/LovelyHike.jpg'
import PersonalPic2 from '../../assets/Orientation.jpg'
import PersonalPic3 from '../../assets/ProPhotoGrapher.jpg'
import PersonalPic4 from '../../assets/StompingGrounds.jpg'
import PersonalPic5 from '../../assets/FlowerCrownPrincess.jpg'
import PersonalPic6 from '../../assets/StompingGrounds.jpg'
import PersonalPic7 from '../../assets/StompingGrounds.jpg'
import PersonalPic8 from '../../assets/StompingGrounds.jpg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import IconButton from '../Button/IconButton.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src1: PersonalPic1,
            src2: PersonalPic2,
            src3: PersonalPic3,
            src4: PersonalPic4,
            caption1: "",
            caption2: "",
            caption3: "",
            caption4: "",
            caption5: ""
        }
    }
    titleScroll = () => {
        if (window.scrollY > 10) {

        } else {

        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.titleScroll);
        let chefInfo = document.getElementById("chefInfo");
        let devInfo = document.getElementById("devInfo");
        let contactInfo = document.getElementById("contactInfo");

        chefInfo.addEventListener("mouseover", function () {
            chefInfo.classList.add("pulse");
        });
        chefInfo.addEventListener("mouseleave", function () {
            chefInfo.classList.remove("pulse");
        });
        devInfo.addEventListener("mouseover", function () {
            devInfo.classList.add("pulse");
        });
        devInfo.addEventListener("mouseleave", function () {
            devInfo.classList.remove("pulse");
        });
        contactInfo.addEventListener("mouseover", function () {
            contactInfo.classList.add("pulse");
        });
        contactInfo.addEventListener("mouseleave", function () {
            contactInfo.classList.remove("pulse");
        });
    }

    render() {

        return (
            <>
                <Router>
                    <Link to="/"></Link>
                    <Switch>
                        <Route path="/">
                            <Container fluid className="noPadding">
                                <Row>
                                    <Col >
                                        <Container>
                                            <Row className="center">
                                                <Col className="titleBG1">
                                                    <p className="titleStyle1 center">Trevor Womack</p>
                                                </Col>
                                            </Row>
                                            <Row className="center">
                                                <Col className="secondaryTitleBG1">
                                                    <p className="center secondaryHeader1">Web Developer</p>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4860A0" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,117.3C672,139,768,213,864,256C960,299,1056,309,1152,266.7C1248,224,1344,128,1392,80L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                                    </Col>
                                </Row>
                                <Row className="center blueBG">
                                    
                                    <Col lg={1} className="d-none d-lg-block jumboTronStyle">
                                        <Row >
                                            <Col>
                                                <Link to="/contact">
                                                    <IconButton id="contactInfo" className="material-icons md-dark md-48" value="pets"></IconButton>
                                                </Link>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Link to="/developerWork">
                                                    <IconButton id="devInfo" className="material-icons md-dark md-48" value="person"></IconButton>
                                                </Link>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Link to='/chefWork'>
                                                    <IconButton id="chefInfo" className="material-icons md-dark md-48" value="restaurant"></IconButton>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col lg={6} className="center">
                                        <Carousel>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100 carouselBG"
                                                    src={this.state.src1}
                                                    alt="First slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100 carouselBG"
                                                    src={this.state.src2}
                                                    alt="Second slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100 carouselBG"
                                                    src={this.state.src3}
                                                    alt="Third slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100 carouselBG"
                                                    src={this.state.src4}
                                                    alt="Third slide"
                                                />
                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4860A0" fill-opacity="1" d="M0,288L80,240C160,192,320,96,480,80C640,64,800,128,960,138.7C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                                    </Col>
                                </Row>



                                <Row >
                                    <Col lg={2} className="d-none d-lg-block jumboTronStyle">
                                        <Row>
                                            <Col lg={4}>
                                                <Link to="/contact">
                                                    <IconButton id="contactInfo" className="material-icons md-dark md-48" value="contact_mail"></IconButton>
                                                </Link>
                                            </Col>
                                            <Col lg={4}>
                                                <Link to="/developerWork">
                                                    <IconButton id="devInfo" className="material-icons md-dark md-48" value="devices"></IconButton>
                                                </Link>
                                            </Col>
                                            <Col lg={4}>
                                                <Link to='/chefWork'>
                                                    <IconButton id="chefInfo" className="material-icons md-dark md-48" value="restaurant"></IconButton>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </Route>
                        <Route path="/chefWork">

                        </Route>
                        <Route path="/developerWork">

                        </Route>
                        <Route path="/contact">

                        </Route>
                    </Switch>
                </Router>
            </>
        )
    }
}

export default Home;