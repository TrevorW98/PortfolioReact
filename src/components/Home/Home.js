import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Card, Carousel } from 'react-bootstrap';
import './HomeStyles.css';
import CalculationButtons from '../Calculations/calc.js';
import PersonalPic1 from '../../assets/Orientation.jpg'
import PersonalPic2 from '../../assets/TritonCode.jpg'
import PersonalPic3 from '../../assets/ProPhotoGrapher.jpg'
import PersonalPic4 from '../../assets/StompingGrounds.jpg'
import PersonalPic5 from '../../assets/Code.jpg'
import TritonLogo from '../../assets/Triton.png'
import HFPLogo from '../../assets/HFPLogo.png'
import ATLogo from '../../assets/AnimalTriviaLogo.png'
import ReactLogo from '../../assets/ReactLogo.png'
import WeatherLogo from '../../assets/weather.png'
import ContactUs from '../ContactForm/ContactForm.js';
import SocialMediaLinks from '../SocialMediaLinks/SocialMedia.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

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
            alt1: "Group coding with the HFP team",
            alt2: "Code from the front and back end of Triton",
            alt3: "A nice picture I took of mushrooms growing on a tree",
            alt4: "A picture of myself on a nostalgic hike",
            alt5: "This website's code",
            showCalc: false,
            firstInput: "",
            secondInput: "",
            result: null,
            operator: "",
            clear: false,
            displayResult: false,
            nextCalc: false,
            description: ""
        }
    }
    incrementNum = (addTo) => {
        if (this.state.displayResult !== true) {
            this.setState({ firstInput: this.state.firstInput + addTo })
        } else {
            this.setState({ secondInput: this.state.secondInput + addTo })
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
        // let personalPics = document.getElementById("personalPics");
        // let petPics = document.getElementById("petPics");
        // let foodPics = document.getElementById("foodPics");

        // personalPics.addEventListener("mouseover", function () {
        //     personalPics.classList.add("pulse");
        // });
        // personalPics.addEventListener("mouseleave", function () {
        //     personalPics.classList.remove("pulse");
        // });
        // petPics.addEventListener("mouseover", function () {
        //     petPics.classList.add("pulse");
        // });
        // petPics.addEventListener("mouseleave", function () {
        //     petPics.classList.remove("pulse");
        // });
        // foodPics.addEventListener("mouseover", function () {
        //     foodPics.classList.add("pulse");
        // });
        // foodPics.addEventListener("mouseleave", function () {
        //     foodPics.classList.remove("pulse");
        // });
    }

    render() {

        // const personalPicsBtn = () => {
        //     this.setState({
        //         src1: PersonalPic1, src2: PersonalPic2, src3: PersonalPic3, src4: PersonalPic4, src5: PersonalPic5
        //         , alt1: "Group coding with the HFP team", alt2: "Code from the front and back end of Triton", alt3: "A nice picture I took of mushrooms growing on a tree", alt4: "A picture of myself on a nostalgic hike", alt5: "This website's code"
        //     });
        // }
        // const petPicsBtn = () => {
        //     this.setState({
        //         src1: PetPic1, src2: PetPic2, src3: PetPic3, src4: PetPic4, src5: PetPic5
        //         , alt1: "My cat Navi", alt2: "My cat Noodle", alt3: "Our previous foster cat, Mocha", alt4: "My bearded dragon, Rhae", alt5: "My current foster kitten, Sophia"
        //     });
        // }
        // const foodPicsBtn = () => {
        //     this.setState({
        //         src1: FoodPic1, src2: FoodPic2, src3: FoodPic3, src4: FoodPic4, src5: FoodPic5
        //         , alt1: "This website's code", alt2: "", alt3: "", alt4: "", alt5: ""
        //     });
        // }
        const TriviaLink = () => {
            window.open("http://animaltrivia.azurewebsites.net", '_blank');
        }
        const HFPLink = () => {
            window.open("https://healthforcepartners.net/", '_blank');
        }
        const WeatherLink = () => {
            window.open("http://weatherapplicationjs.azurewebsites.net", '_blank');
        }
        return (
            <>
                <Router>
                    <Switch>
                        <Route path="/Calculator">
                            <CalculationButtons></CalculationButtons>
                        </Route>
                        <Route path="/Triton">
                            <TritonInfo></TritonInfo>
                        </Route>
                        <Route path="/">
                            <Container fluid >
                                <Row>
                                    <Col className="titleBG1 d-none d-md-block" >
                                        <h1 className="headingOneLarge ">Trevor Womack</h1>
                                    </Col>
                                    <Col className="titleBG1 d-block d-md-none">
                                        <p className="headingOneSmall ">Trevor Womack</p>
                                    </Col>
                                    <SocialMediaLinks></SocialMediaLinks>
                                </Row>
                                <Row >
                                    <Col className=" d-none d-md-block">
                                        <h2 className="headingTwo">Web Developer</h2>
                                    </Col>
                                    <Col className=" d-block d-md-none">
                                        <p className=" xsSecondaryTitle">Web Developer</p>
                                    </Col>
                                    <Col className="d-flex justify-content-end">
                                        <a className="xsSecondaryTitle" href="#contactSection"> Contact Me!</a>
                                    </Col>
                                    
                                </Row>
                                <Row >
                                    <Col className="noPadding">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                            <path fill="#4860A0" fill-opacity="1" d="M0,128L1440,320L1440,320L0,320Z"></path>
                                        </svg>
                                    </Col>
                                </Row>
                                <Row className="center blueBG ">
                                    <Col xl={5} lg={6} md={8} sm={8} xs={9} className="center">
                                        <Carousel>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100 carouselBG"
                                                    src={this.state.src1}
                                                    alt={this.state.alt1}
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100 carouselBG"
                                                    src={this.state.src2}
                                                    alt={this.state.alt2}
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100 carouselBG"
                                                    src={this.state.src3}
                                                    alt={this.state.alt3}
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100 carouselBG"
                                                    src={this.state.src4}
                                                    alt={this.state.alt4}
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100 carouselBG"
                                                    src={this.state.src5}
                                                    alt={this.state.alt5}
                                                />
                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>
                                    <Col lg={5} className="mt-2">
                                        <p className="secondaryHeader d-none d-md-block " id="main">I am a
                                        fullstack web developer with a focus on front-end work. Previously, I was kitchen manager at in Stockton where I fulfilled my love of cooking and got to work
                                    with an amazing team of cooks. Now, I have certification as a software developer after an intense 10 month program with over 1,000 hours of instructor led coursework and I am proficient in developing applications in multiple languages and technologies.</p>
                                        <p className="xsSecondaryHeader d-block d-md-none">I am a
                                        fullstack web developer with a focus on front-end work. I have certification as a software developer after an intense 10 month program with over 1,000 hours of instructor led coursework and I am proficient in developing applications in multiple languages and technologies.</p>
                                    </Col>
                                </Row>
                                <Row className="center blueBG">
                                    <Col>
                                        <p>{this.state.description}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="noPadding">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                            <path fill="#4860A0" fill-opacity="1" d="M0,128L1440,320L1440,0L0,0Z"></path>
                                        </svg>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="center d-none d-md-block">
                                        <p className="titleStyle2 text-center">Projects and Coursework</p>
                                    </Col>
                                    <Col className="center d-block d-md-none">
                                        <p className="xsTitle text-center">Projects and Coursework</p>
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    <Col xs={12} sm={12} md={4} lg={4} className="center mt-4">
                                        <Card style={{ width: '24rem', borderStyle: 'none' }}>
                                            <Card.Img variant="top" src={TritonLogo} style={{ height: '22rem' }} alt="The logo for Triton" />
                                            <Card.Body>
                                                <Card.Title className="cardheadStyle">Triton</Card.Title>
                                                <Card.Text className="cardTextStyle">
                                                    (This project is in development, coming soon!)
                                                    A full-stack mobile application built in Angular and Ionic.
                                                </Card.Text>
                                                <Link to="/Triton" className="center">
                                                    <button className="protoBtnStyle" variant="primary">Learn about Triton</button>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={12} sm={12} md={4} lg={4} className="center mt-4">
                                        <Card style={{ width: '24rem', borderStyle: 'none' }}>
                                            <Card.Img variant="top" src={HFPLogo} style={{height: '22rem' }} alt="The logo for Health Force Partners" />
                                            <Card.Body>
                                                <Card.Title className="cardheadStyle">HealthForce Partners</Card.Title>
                                                <Card.Text className="cardTextStyle">
                                                    (This project is in development, coming soon!)
                                                    My first experience with professional development was migrating HealthForce Partners' website to Wix from WordPress.
                                                </Card.Text>
                                                <div className="center">
                                                    <button variant="primary" className="protoBtnStyle" onClick={HFPLink}>Visit the website</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={12} sm={12} md={4} lg={4} className="center mt-4" >
                                        <Card style={{ width: '24rem', borderStyle: 'none' }} >
                                            <Card.Img variant="top" src={ATLogo} style={{ height: '22rem' }} alt="The letters 'A' and 'T' to represent the animal trivia application" />
                                            <Card.Body>
                                                <Card.Title className="cardheadStyle">Animal Trivia</Card.Title>
                                                <Card.Text className="cardTextStyle">
                                                    A project completed during my time at CodeStack Academy, showcasing React's strength as a library.
                                                </Card.Text>
                                                <div className="center">
                                                    <button variant="primary" className="protoBtnStyle" onClick={TriviaLink}>Play Animal Trivia</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row className="marginTop mt-5">
                                    <Col xs={12} sm={12} md={6} lg={6} className="center mt-4">
                                        <Card style={{ width: '24rem', borderStyle: 'none' }}>
                                            <Card.Img variant="top" src={ReactLogo} style={{ height: '22rem' }} alt="A picture of the logo for the React library" />
                                            <Card.Body>
                                                <Card.Title className="cardheadStyle">Calculator</Card.Title>
                                                <Card.Text className="cardTextStyle">
                                                    A basic calculator from an early project in CodeStack Academy.
                                                </Card.Text>
                                                <Link to="/Calculator" className="center">
                                                    <button className="protoBtnStyle" variant="primary"> Use the React Calculator</button>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={12} sm={12} md={6} lg={6} className="center mt-4">
                                        <Card style={{ width: '24rem', borderStyle: 'none' }}>
                                            <Card.Img variant="top" src={WeatherLogo} style={{ height: '22rem' }} alt="A picture of a sun and a cloud to represent the weather application" />
                                            <Card.Body>
                                                <Card.Title className="cardheadStyle">Weather Application</Card.Title>
                                                <Card.Text className="cardTextStyle">
                                                    Search your city/country's weather with this basic weather API application, showcasing vanilla JavaScript.
                                                </Card.Text>
                                                <div className="center">
                                                    <button className="protoBtnStyle" onClick={WeatherLink} variant="primary">Check the weather</button>
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
                                        <p className="titleStyle3 text-center d-none d-lg-block">Full list of developer skills:</p>
                                        <p className="xsTitle text-center d-block d-lg-none">Full list of developer skills:</p>
                                    </Col>

                                </Row>
                                <Row className="blueBG center ">
                                    <Col xl={6} lg={6} md={6} sm={6} xs={6} className="center mt-4">
                                        <ul className="secondaryHeader d-none d-md-block">
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
                                        <ul className="xsSecondaryHeader d-block d-md-none">
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

                                    <Col xl={6} lg={6} md={6} sm={6} xs={6} className="center mt-4">
                                        <ul className="secondaryHeader d-none d-md-block">
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
                                        <ul className="xsSecondaryHeader d-block d-md-none">
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
                                <Row id="contactSection">
                                    <Col className="noPadding">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4860A0" fill-opacity="1" d="M0,288L80,240C160,192,320,96,480,80C640,64,800,128,960,138.7C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="titleStyle3 text-center d-none d-lg-block">Contact Me</p>
                                        <p className="xsTitle text-center d-block d-lg-none">Contact Me</p>
                                    </Col>
                                </Row>
                                <Row className="center">
                                    <Col lg={6}>
                                        <ContactUs></ContactUs>
                                    </Col>
                                </Row>

                            </Container>
                        </Route>

                    </Switch>
                </Router>
            </>
        )
    }
}

export default Home;

/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */ 
