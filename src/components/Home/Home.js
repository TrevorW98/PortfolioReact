import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Jumbotron, Row, Card, Button, Carousel } from 'react-bootstrap';
import './HomeStyles.css';
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
            titleClasses: "titleStyle1 center",
            secondaryHeader: "center secondaryHeader1",
            headerBG: "",
            src1: "",
            src2: "",
            src3: "",
            src4: "",
            src5: "",
            caption1: "",
            caption2: "",
            caption3: "",
            caption4: "",
            caption5: ""
        }
    }
    titleScroll = () => {
        if (window.scrollY > 10) {
            this.setState({ titleClasses: "titleStyle2 center" });
            this.setState({ secondaryHeader: "center secondaryHeader2" });
        } else {
            this.setState({ titleClasses: "titleStyle1 center" });
            this.setState({ secondaryHeader: "center secondaryHeader1" });
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
                                <Row className="marginTop">
                                    <Col>
                                        <p className={this.state.titleClasses}>Trevor Womack</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className={this.state.secondaryHeader}>Junior Software Developer</p>
                                    </Col>
                                </Row>
                                <Row className="sticky">
                                    <Col lg={1} className="d-none d-lg-block jumboTronStyle">
                                        <Container fluid>
                                            <Row className="marginTop">
                                                <Col className="center">
                                                    <Link to="/contact">
                                                        <IconButton id="contactInfo" className="material-icons md-dark md-48" value="contact_mail"></IconButton>
                                                    </Link>
                                                </Col>
                                            </Row>
                                            <Row className="marginTop">
                                                <Col className="center">
                                                    <Link to="/developerWork">
                                                        <IconButton id="devInfo" className="material-icons md-dark md-48" value="devices"></IconButton>
                                                    </Link>
                                                </Col>
                                            </Row>
                                            <Row className="marginTop marginBottom">
                                                <Col className="center">
                                                    <Link to='/chefWork'>
                                                        <IconButton id="chefInfo" className="material-icons md-dark md-48" value="restaurant"></IconButton>
                                                    </Link>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="center">
                                        <Carousel>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={this.state.src1}
                                                    alt="First slide"
                                                />
                                                <Carousel.Caption>
                                                    <h3>First slide label</h3>
                                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={this.state.src1}
                                                    alt="Second slide"
                                                />

                                                <Carousel.Caption>
                                                    <h3>Second slide label</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={this.state.src1}
                                                    alt="Third slide"
                                                />

                                                <Carousel.Caption>
                                                    <h3>Third slide label</h3>
                                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={this.state.src1}
                                                    alt="Third slide"
                                                />

                                                <Carousel.Caption>
                                                    <h3>Third slide label</h3>
                                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={this.state.src1}
                                                    alt="Third slide"
                                                />

                                                <Carousel.Caption>
                                                    <h3>Third slide label</h3>
                                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4860A0" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,117.3C672,139,768,213,864,256C960,299,1056,309,1152,266.7C1248,224,1344,128,1392,80L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                                    </Col>
                                </Row>
                                <Row className="pageBreakBG center">
                                    <Col lg={6}>
                                        <Jumbotron>
                                            <h1>Hello, world!</h1>
                                            <p>
                                                This is a simple hero unit, a simple jumbotron-style component for calling
                                                extra attention to featured content or information.
                                            </p>
                                            <p>
                                                <Button variant="primary">Learn more</Button>
                                            </p>
                                        </Jumbotron>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#28365A" fill-opacity="1" d="M0,288L80,240C160,192,320,96,480,80C640,64,800,128,960,138.7C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
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