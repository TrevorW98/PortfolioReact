import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Jumbotron, Row, Card, Button, Carousel } from 'react-bootstrap';
import './HomeStyles.css';
import CalculationButtons from '../Calculations/calc.js';
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
import ATLogo from '../../assets/AnimalTriviaLogo.png'
import ReactLogo from '../../assets/ReactLogo.png'
import WeatherLogo from '../../assets/weather.png'
import RPSLS from '../../assets/rpsls.png'
import ContactUs from '../ContactForm/ContactForm.js';
import SocialMediaLinks from '../SocialMediaLinks/SocialMedia.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import IconButton from '../Button/IconButton.js';
import TritonInfo from '../TritonInfo/TritonInfo.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src1: PersonalPic1,
            src2: PersonalPic2,
            src3: PersonalPic3,
            src4: PersonalPic4,
            src5: PersonalPic5,
            carHeader: "life and family",
            alt1: "",
            alt2: "",
            alt3: "",
            alt4: "",
            alt5: "",
            showCalc: false,
            firstInput: "",
            secondInput: "",
            result: null,
            operator: "",
            clear: false,
            displayResult: false,
            nextCalc: false
        }
    }
    incrementNum = (addTo) => {
        if (this.state.displayResult !== true) {
            this.setState({ firstInput: this.state.firstInput += addTo })
        } else {
            this.setState({ secondInput: this.state.secondInput += addTo })
        }
    }
    setOperator = (newOperator) => {
        this.setState({ displayResult: true })
        this.setState({ operator: newOperator })
    }
    //Finally got the mulitple calculations working! I was trying to set the firstInput equal to the result state with each equation
    //But instead i just set the first input to the actual equation itself and cleared the second input and operator
    //I tried many more complicated ways but this simple way worked and the other ones didnt lol oh well
    mathMethod = () => {
        switch (this.state.operator) {
            case "+":
                this.setState({ firstInput: parseInt(this.state.firstInput) + parseInt(this.state.secondInput) })
                this.setState({ secondInput: "", operator: "" })
                break;
            case "-":
                this.setState({ firstInput: parseInt(this.state.firstInput) - parseInt(this.state.secondInput) })
                this.setState({ secondInput: "", operator: "" })
                break;
            case "/":
                this.setState({ firstInput: parseInt(this.state.firstInput) / parseInt(this.state.secondInput) })
                this.setState({ secondInput: "", operator: "" })
                break;
            case "*":
                this.setState({ firstInput: parseInt(this.state.firstInput) * parseInt(this.state.secondInput) })
                this.setState({ secondInput: "", operator: "" })
                break;
            default:
                this.setState({ result: null, firstInput: "", secondInput: "", operator: "", clear: false, displayResult: false })
                break;
        }
    }
    clearMethod = () => {
        this.setState({
            result: null,
            firstInput: "",
            secondInput: "",
            operator: "",
            clear: false,
            displayResult: false,

        })

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
        const TriviaLink = () => {
            window.open("http://animaltrivia.azurewebsites.net", '_blank');
        }
        const HFPLink = () => {
            window.open("", '_blank');
        }
        return (
            <>
                <Router>
                    <Link to="/">
                    </Link>
                    <Switch>
                        <Route path="/Calculator">
                            <CalculationButtons></CalculationButtons>
                        </Route>
                        <Route path="/Triton">
                            <TritonInfo></TritonInfo>
                        </Route>
                        <Route path="/Weather">

                        </Route>
                        <Route path="/RPSLS">

                        </Route>
                        <Route path="/">
                            <Container fluid >
                                <Row>
                                    <Col >
                                        <Container>
                                            <Row className="center">
                                                <Col className="titleBG1">
                                                    <p className="titleStyle1 center">Trevor Womack</p>
                                                </Col>
                                            </Row>
                                            <Row className="center">
                                                <Col className="secondaryTitleBG1 center">
                                                    <p className="text-center secondaryHeader1">Web Developer & Chef</p>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                </Row>
                            </Container>
                            <Container fluid>
                                <Row >
                                    <Col className="noPadding">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4860A0" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,117.3C672,139,768,213,864,256C960,299,1056,309,1152,266.7C1248,224,1344,128,1392,80L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>

                                    </Col>
                                </Row>
                                <Row className="center blueBG">
                                    <Col lg={1} className="d-none d-lg-block carouselIcons">
                                        <Row >
                                            <Col className="center">
                                                <IconButton id="personalPics" className="material-icons md-dark md-48" value="person" onClick={personalPicsBtn}></IconButton>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="center iconSpacing">
                                                <IconButton id="petPics" className="material-icons md-dark md-48" value="pets" onClick={petPicsBtn}></IconButton>
                                            </Col>
                                        </Row>
                                        <Row className="marginTop">
                                            <Col className="center">
                                                <IconButton id="foodPics" className="material-icons md-dark md-48" value="restaurant" onClick={foodPicsBtn}></IconButton>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg={5} className="center">
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
                                <Row className="center blueBG">
                                    <Col lg={10} className="mt-2">
                                        <p className="secondaryHeaderSpecs">My name Is Trevor Womack, I was born in Stockton, CA, and I am a
                                    web developer and former chef. I was the sous chef at 5 star steakhouse in Stockton before I started CodeStack Academy, an eight month web development certification course. Now I am proficient in HTML5, CSS, JavaScript, React, Angular, C#, and much more!</p>
                                    </Col>
                                </Row>
                                <Row >
                                    <Col className="noPadding">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4860A0" fill-opacity="1" d="M0,288L80,240C160,192,320,96,480,80C640,64,800,128,960,138.7C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="center">
                                        <p className="titleStyle2">Projects</p>
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    <Col className="center">
                                        <Card style={{ width: '24rem', borderStyle: 'none' }}>
                                            <Card.Img variant="top" src={TritonLogo} style={{ height: '22rem' }} />
                                            <Card.Body>
                                                <Card.Title>Triton</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                                </Card.Text>
                                                <Link to="/Triton" className="center">
                                                    <Button className="protoBtnStyle" variant="primary">Learn about Triton</Button>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col className="center">
                                        <Card style={{ width: '24rem', borderStyle: 'none' }}>
                                            <Card.Img variant="top" src={HFPLogo} style={{ height: '22rem' }} />
                                            <Card.Body>
                                                <Card.Title>HealthForce Partners</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                                </Card.Text>
                                                <div className="center">
                                                    <Button variant="primary" className="protoBtnStyle" onClick={HFPLink}>Visit the website</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col className="center" >
                                        <Card style={{ width: '24rem', borderStyle: 'none' }} >
                                            <Card.Img variant="top" src={ATLogo} style={{ height: '22rem' }} />
                                            <Card.Body>
                                                <Card.Title>Animal Trivia</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                                </Card.Text>
                                                <div className="center">
                                                    <Button variant="primary" className="protoBtnStyle" onClick={TriviaLink}>Play Animal Trivia</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row className="marginTop mt-5">
                                    <Col className="center">
                                        <Card style={{ width: '24rem', borderStyle: 'none' }}>
                                            <Card.Img variant="top" src={ReactLogo} style={{ height: '22rem' }} />
                                            <Card.Body>
                                                <Card.Title>Calculator</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                                </Card.Text>
                                                <Link to="/Calculator" className="center">
                                                    <Button className="protoBtnStyle" variant="primary"> Use the React Calculator</Button>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col className="center">
                                        <Card style={{ width: '24rem', borderStyle: 'none' }}>
                                            <Card.Img variant="top" src={WeatherLogo} style={{ height: '22rem' }} />
                                            <Card.Body>
                                                <Card.Title>Weather Application</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                                </Card.Text>
                                                <div className="center">
                                                    <Button className="protoBtnStyle" variant="primary">Check the weather</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col className="center">
                                        <Card style={{ width: '24rem', borderStyle: 'none' }}>
                                            <Card.Img variant="top" src={RPSLS} style={{ height: '22rem' }} />
                                            <Card.Body>
                                                <Card.Title>Rock Paper Scissors Lizard Spock</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                                </Card.Text>
                                                <div className="center">
                                                    <Button className="protoBtnStyle" variant="primary">Play RPSLS</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row >
                                    <Col className="noPadding">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4860A0" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,117.3C672,139,768,213,864,256C960,299,1056,309,1152,266.7C1248,224,1344,128,1392,80L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                                    </Col>
                                </Row>
                                <Row className="blueBG">
                                    <Col>
                                        <p className="titleStyle3 text-center">Full list of developer skills:</p>
                                    </Col>
                                </Row>
                                <Row className="blueBG center ">
                                    <Col lg={4} className="center mt-4">
                                        <ul className="secondaryHeaderSpecs">
                                            <li>
                                                <p>C#</p>
                                            </li>
                                            <li>
                                                <p>HTML</p>
                                            </li>
                                            <li>
                                                <p>TypeScript</p>
                                            </li>
                                            <li>
                                                <p>JavaScript</p>
                                            </li>
                                            <li>
                                                <p>CSS</p>
                                            </li>
                                            <li>
                                                <p>Ionic</p>
                                            </li>
                                            <li>
                                                <p>React</p>
                                            </li>
                                            <li>
                                                <p>Unity</p>
                                            </li>
                                            <li>
                                                <p>Angular 11</p>
                                            </li>
                                            <li>
                                                <p>Bootstrap 5</p>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col lg={1}></Col>
                                    <Col lg={4} className="center mt-4">
                                        <ul className="secondaryHeaderSpecs">
                                            <li>
                                                <p>GitHub</p>
                                            </li>
                                            <li>
                                                <p>Slack</p>
                                            </li>
                                            <li>
                                                <p>Notion</p>
                                            </li>
                                            <li>
                                                <p>Jira</p>
                                            </li>
                                            <li>
                                                <p>Zoom</p>
                                            </li>
                                            <li>
                                                <p>Azure</p>
                                            </li>
                                            <li>
                                                <p>VScode</p>
                                            </li>
                                            <li>
                                                <p>FileZilla</p>
                                            </li>
                                            <li>
                                                <p>Postman</p>
                                            </li>
                                            <li>
                                                <p>Google Cloud Services</p>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="noPadding">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4860A0" fill-opacity="1" d="M0,288L80,240C160,192,320,96,480,80C640,64,800,128,960,138.7C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="titleStyle3 text-center">Contact Me</p>
                                    </Col>
                                </Row>
                                <Row className="center">
                                    <Col lg={6}>
                                        <ContactUs></ContactUs>
                                    </Col>
                                </Row>
                               
                                    <SocialMediaLinks></SocialMediaLinks>
                                
                            </Container>
                        </Route>

                    </Switch>
                </Router>
            </>
        )
    }
}

export default Home;

{/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */ }
