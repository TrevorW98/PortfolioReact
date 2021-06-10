import React from 'react';
import Home from '../Home/Home.js';
import { Col, Container, Row, Button, Image, Carousel } from 'react-bootstrap';
import './TritonStyles.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import TritonDev1 from '../../assets/dev2fixed.png'
import TritonDev2 from '../../assets/tritonprotofixed.png'
import TritonDev3 from '../../assets/tritonprotofixed.png'
import TritonDev4 from '../../assets/tritonprotofixed.png'
import TritonDev5 from '../../assets/eventsfixed.jpg'
import TritonDev6 from '../../assets/profilefixed.jpg'
import TritonDev7 from '../../assets/registerfixed.jpg'
import TritonDev8 from '../../assets/signinfixed.jpg'

class TritonInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        const ProtoLink = () => {
            window.open("https://xd.adobe.com/view/b948009e-11bb-40db-8702-8787478f8eef-ec1b/", '_blank');
        }
        return (
            <>
                <Router>
                    <Link to='/Triton'></Link>
                    <Switch>
                        <Route path="/Triton">
                            <Container fluid>
                                <Row className="mt-2">
                                    <Col>
                                        <Link to="/Home">
                                            <Button className="protoBtnStyle">Return to Home</Button>
                                        </Link>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="center">
                                        <p className="titleSpecs text-center d-none d-md-block">Triton</p>
                                        <p className="xsTitle d-block d-md-none">Triton</p>
                                    </Col>
                                </Row>
                                <Row className="ml-5 center">
                                    <Col lg={10}>
                                        <p className="secondaryHeaderSpecs d-none d-md-block ">Triton is a full-stack mobile application for Android that allows users to learn more about animals and pets, and how to take care of them. It features a constantly growing
                                        Animal Index, featuring information on each of the animals listed. The Pick-My-Pet Quiz will help to determine what pet may be right for the user's living situation and lifestyle, while the
                                        pet journal, profile, and notifications help the user to track their pets behavior and health.
                                        </p>
                                    </Col>
                                    <Col lg={10}>
                                        <p className="xsSecondaryTitle d-block d-md-none">Triton is a full-stack mobile application for Android that allows users to learn more about animals and pets, and how to take care of them. It features a constantly growing
                                        Animal Index, featuring information on each of the animals listed. The Pick-My-Pet Quiz will help to determine what pet may be right for the user's living situation and lifestyle, while the
                                        pet journal, profile, and notifications help the user to track their pets behavior and health.
                                        </p>
                                    </Col>
                                </Row>
                                <Row >
                                    <Col className="noPadding">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4860A0" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,117.3C672,139,768,213,864,256C960,299,1056,309,1152,266.7C1248,224,1344,128,1392,80L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                                    </Col>
                                </Row>
                                <Row className="center blueBG">
                                    <Col xl={10} lg={10} md={10} sm={12} xs={12} >
                                        <Carousel>
                                            <Carousel.Item>
                                                <Image
                                                    className="d-block w-100 carouselBG"
                                                    src={TritonDev1}
                                                    alt="First slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Image
                                                    className="d-block w-100 carouselBG"
                                                    src={TritonDev2}
                                                    alt="Second slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Image
                                                    className="d-block w-100 carouselBG"
                                                    src={TritonDev3}
                                                    alt="Third slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Image
                                                    className="d-block w-100 carouselBG"
                                                    src={TritonDev4}
                                                    alt="Third slide"
                                                />
                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>
                                </Row>
                                <Row className="center blueBG">
                                    <Col className="center mt-5">
                                        <p className="secondaryHeader ml-5 d-none d-md-block">These are pictures from both the prototype and the app in development</p>
                                        <p className="xsSecondaryHeader ml-5 d-block d-md-none">These are pictures from both the prototype and the app in development</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="noPadding">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4860A0" fill-opacity="1" d="M0,288L80,240C160,192,320,96,480,80C640,64,800,128,960,138.7C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                                    </Col>
                                </Row>
                                <Row className="mt-5 center">
                                    <Col xl={4} lg={4} md={8} sm={10} xs={10}>
                                        <Image
                                            className="d-block w-100"
                                            src={TritonDev5}
                                            alt="Third slide" />
                                    </Col>
                                    <Col lg={1} ></Col>
                                    <div className="mt-5 .d-none .d-md-block .d-lg-none"></div>
                                    <Col lg={4} md={8} sm={10} xs={10}>
                                        <Image
                                            className="d-block w-100"
                                            src={TritonDev6}
                                            alt="Third slide" />
                                    </Col>
                                </Row>
                                <Row className="mt-5 center">
                                    <Col lg={4} md={8} sm={10} xs={10}>
                                        <Image
                                            className="d-block w-100"
                                            src={TritonDev7}
                                            alt="Third slide" />
                                    </Col>
                                    <Col lg={1}></Col>
                                    <div className="mt-5 .d-none .d-md-block .d-lg-none"></div>
                                    <Col lg={4} md={8} sm={10} xs={10}>
                                        <Image
                                            className="d-block w-100"
                                            src={TritonDev8}
                                            alt="Third slide" />
                                    </Col>
                                </Row>
                                <Row >
                                    <Col className="noPadding">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4860A0" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,117.3C672,139,768,213,864,256C960,299,1056,309,1152,266.7C1248,224,1344,128,1392,80L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                                    </Col>
                                </Row>
                                <Row className="blueBG">
                                    <Col>
                                        <p className="secondaryHeader text-center d-none d-md-block">Full list of features:</p>
                                        <p className="xsSecondaryHeader text-center d-block d-md-none">Full list of features:</p>
                                    </Col>
                                </Row>
                                <Row className="blueBG">
                                    <Col className="center">
                                        <ul className="secondaryHeader d-none d-md-block">
                                            <li>
                                                <p>Animal Index with over 150 animals and their information.</p>
                                            </li>
                                            <li>
                                                <p>Pick-My-Pet Quiz to determine what type of pet would be best for your situation.</p>
                                            </li>
                                            <li>
                                                <p>Pet Profile with your pets picture and information, including documents and medical information.</p>
                                            </li>
                                            <li>
                                                <p>Pet Journal to write down any notes or specific occurrences.</p>
                                            </li>
                                            <li>
                                                <p>Vet finder allows users to find vet offices near them and save the one they use the most.</p>
                                            </li>
                                            <li>
                                                <p>Notifications for feeding times and daily events like applying medicine.</p>
                                            </li>
                                        </ul>
                                        <ul className="xsSecondaryHeader d-block d-md-none">
                                            <li>
                                                <p>Animal Index with over 150 animals and their information.</p>
                                            </li>
                                            <li>
                                                <p>Pick-My-Pet Quiz to determine what type of pet would be best for your situation.</p>
                                            </li>
                                            <li>
                                                <p>Pet Profile with your pets picture and information, including documents and medical information.</p>
                                            </li>
                                            <li>
                                                <p>Pet Journal to write down any notes or specific occurrences.</p>
                                            </li>
                                            <li>
                                                <p>Vet finder allows users to find vet offices near them and save the one they use the most.</p>
                                            </li>
                                            <li>
                                                <p>Notifications for feeding times and daily events like applying medicine.</p>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="noPadding">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4860A0" fill-opacity="1" d="M0,288L80,240C160,192,320,96,480,80C640,64,800,128,960,138.7C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                                    </Col>
                                </Row>
                                <Row className="mb-3 center">
                                    <Col lg={4} className="center mt-5">
                                        <Button className="protoBtnStyle" onClick={ProtoLink}>
                                            Check out the prototype here
                                        </Button>
                                    </Col>
                                    <Col lg={4} className="center mt-5">
                                        <Link to="/Home">
                                            <Button className="protoBtnStyle">Return to Home</Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </Container>
                        </Route>
                        <Route path="/Home">
                            <Home></Home>
                        </Route>
                    </Switch>
                </Router>
            </>
        )
    }
}
export default TritonInfo;