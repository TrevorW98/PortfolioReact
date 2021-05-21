import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Jumbotron, Row, Card, Button, Carousel } from 'react-bootstrap';
import './HomeStyles.css';
import PersonalPic1 from '../../assets/LovelyHike.jpg'
import PersonalPic2 from '../../assets/Orientation.jpg'
import PersonalPic3 from '../../assets/ProPhotoGrapher.jpg'
import PersonalPic4 from '../../assets/StompingGrounds.jpg'
import PersonalPic5 from '../../assets/Family.jpg'
import PetPic1 from '../../assets/NaviCute.jpg'
import PetPic2 from '../../assets/NoodleCute.jpg'
import PetPic3 from '../../assets/Mocha.jpg'
import PetPic4 from '../../assets/FlowerCrownPrincess.jpg'
import PetPic5 from '../../assets/MissMaamOnARock.jpg'
import FoodPic1 from '../../assets/ChickenPermission.jpg'
import FoodPic2 from '../../assets/DeviledEggs.jpg'
import FoodPic3 from '../../assets/FiveStarBreakfast.jpg'
import FoodPic4 from '../../assets/NewYorkCrust.jpg'
import FoodPic5 from '../../assets/Wings.jpg'
import TritonLogo from '../../assets/Triton.png'
import HFPLogo from '../../assets/HFPLogo.png'
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
            src5: PersonalPic5,
            caption1: "",
            caption2: "",
            caption3: "",
            caption4: "",
            caption5: ""
        }
    }


    componentDidMount() {
        window.addEventListener('scroll', this.titleScroll);

        let personalPics = document.getElementById("personalPics");
        let petPics = document.getElementById("petPics");
        let foodPics = document.getElementById("foodPics");

        personalPics.addEventListener("mouseover", function () {
            personalPics.classList.add("pulse");
        });
        personalPics.addEventListener("mouseleave", function () {
            personalPics.classList.remove("pulse");
        });
        petPics.addEventListener("mouseover", function () {
            petPics.classList.add("pulse");
        });
        petPics.addEventListener("mouseleave", function () {
            petPics.classList.remove("pulse");
        });
        foodPics.addEventListener("mouseover", function () {
            foodPics.classList.add("pulse");
        });
        foodPics.addEventListener("mouseleave", function () {
            foodPics.classList.remove("pulse");
        });
    }

    render() {

        const personalPicsBtn = () => {
            this.setState({ src1: PersonalPic1, src2: PersonalPic2, src3: PersonalPic3, src4: PersonalPic4, src5: PersonalPic5 });
        }
        const petPicsBtn = () => {
            this.setState({ src1: PetPic1, src2: PetPic2, src3: PetPic3, src4: PetPic4, src5: PetPic5 });
        }
        const foodPicsBtn = () => {
            this.setState({ src1: FoodPic1, src2: FoodPic2, src3: FoodPic3, src4: FoodPic4, src5: FoodPic5 });
        }
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
                            </Container>
                            <Container fluid className="noPadding">
                                <Row>
                                    <Col>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4860A0" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,117.3C672,139,768,213,864,256C960,299,1056,309,1152,266.7C1248,224,1344,128,1392,80L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                                    </Col>
                                </Row>
                                <Row className="center blueBG">
                                    <Col lg={1} className="d-none d-lg-block carouselIcons">
                                        <IconButton id="personalPics" className="material-icons md-dark md-48" value="person" onClick={personalPicsBtn}></IconButton>
                                        <IconButton id="petPics" className="material-icons md-dark md-48" value="pets" onClick={petPicsBtn}></IconButton>
                                        <IconButton id="foodPics" className="material-icons md-dark md-48" value="restaurant" onClick={foodPicsBtn}></IconButton>
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
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100 carouselBG"
                                                    src={this.state.src5}
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
                                <Row className="">
                                    <Col lg={4} className="center">
                                        <Card style={{ width: '22rem' }}>
                                            <Card.Img variant="top" src={TritonLogo} style={{height: '20rem'}} />
                                            <Card.Body>
                                                <Card.Title>Triton</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                        </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={4} className="center">
                                        <Card style={{ width: '22rem' }}>
                                            <Card.Img variant="top" src={HFPLogo} style={{height: '20rem'}} />
                                            <Card.Body>
                                                <Card.Title>HealthForce Partners</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                        </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={4} className="center">
                                        <Card style={{ width: '22rem' }}>
                                            <Card.Img variant="top" src="holder.js/100px180" style={{height: '20rem'}} />
                                            <Card.Body>
                                                <Card.Title>Animal Trivia</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                        </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row className="marginTop">
                                    <Col lg={4} className="center">
                                        <Card style={{ width: '22rem' }}>
                                            <Card.Img variant="top" src="holder.js/100px180" style={{height: '20rem'}} />
                                            <Card.Body>
                                                <Card.Title>Calculator</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                        </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={4} className="center">
                                        <Card style={{ width: '22rem' }}>
                                            <Card.Img variant="top" src="holder.js/100px180" style={{height: '20rem'}} />
                                            <Card.Body>
                                                <Card.Title>Weather Application</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                        </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={4} className="center">
                                        <Card style={{ width: '22rem' }}>
                                            <Card.Img variant="top" src="holder.js/100px180" style={{height: '20rem'}} />
                                            <Card.Body>
                                                <Card.Title>Rock Paper Scissors Lizard Spock</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                        </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Route>
                        <Route path="/Trivia">

                        </Route>
                        <Route path="/Calculator">

                        </Route>
                        <Route path="/HFP">

                        </Route>
                        <Route path="/Triton">

                        </Route>
                        <Route path="/Weather">

                        </Route>
                        <Route path="/RPSLS">

                        </Route>
                    </Switch>
                </Router>
            </>
        )
    }
}

export default Home;