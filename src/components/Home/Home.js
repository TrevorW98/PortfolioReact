import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Jumbotron, Row, Card, Button } from 'react-bootstrap';
import './HomeStyles.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
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
                                        <p className="titleStyle center">Trevor Womack</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="center secondaryHeader">Junior Software Developer</p>
                                    </Col>
                                </Row>
                                <Row className="marginTop">
                                    <Col lg={2}>
                                        <Jumbotron className="jumboTronStyle">
                                            <Container fluid>
                                                <Row className="marginTop">
                                                    <Col className="center">
                                                        <Link to='/chefWork'>
                                                            <span id="chefInfo" class="material-icons md-dark md-150">restaurant</span>
                                                        </Link>
                                                    </Col>
                                                </Row>
                                                <Row className="marginTop">
                                                    <Col className="center">
                                                        <Link to="/developerWork">
                                                            <span id="devInfo" class="material-icons md-dark md-150">devices</span>
                                                        </Link>
                                                    </Col>
                                                </Row>
                                                <Row className="marginTop">
                                                    <Col className="center">
                                                        <Link to="/contact">
                                                            <span id="contactInfo" class="material-icons md-dark md-150">contact_mail</span>
                                                        </Link>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Jumbotron>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <Jumbotron fluid className="jumboTronStyle">
                                                    <p className="aboutMeText">
                                                        Hello! My name is Trevor Womack Jr, a former chef turned software developer, trying to make a difference in this world!
                                                    </p>
                                                    <img src=""></img>
                                                </Jumbotron>
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