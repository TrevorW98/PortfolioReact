import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeStyles.css';
import { Col, Container, Row, Carousel, Nav, Image } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter'
import CalculationButtons from '../Calculations/calc.js';
import Orientation from '../../assets/Orientation.jpg';
import Hero from '../../assets/Hero.jpg';
import Coast from '../../assets/Coast.jpg';
import Fosters from '../../assets/Fosters.jpg';
import Navi from '../../assets/Navi.jpg';
import Race from '../../assets/Race.jpg';
import Stomp from '../../assets/Stomp.jpg';
import ContactUs from '../ContactForm/ContactForm.js';
import Resume from '../../assets/TrevorWomackResumeAXD2021.pdf'
import Headshot from '../../assets/tw.jpg';
import TritonInfo from '../TritonInfo/TritonInfo.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import HTML from '../../assets/HTML.png';
import CSS from '../../assets/CSS.png';
import CSHARP from '../../assets/CSHARP.png';
import JS from '../../assets/JS.png';
import TS from '../../assets/tsfixed.png';
import IONIC from '../../assets/ionicLogofixed.png';
import REACT from '../../assets/REACT.png';
import ANGULAR from '../../assets/ANGULAR.png';
import BOOT from '../../assets/BOOT.png';
import UNITY from '../../assets/UNITY.png';
import JIRA from '../../assets/JIRA.png'
import VSCode from '../../assets/VSfixed.png'
import Github from '../../assets/github.png'
import Slack from '../../assets/slackfixed.png'
import Notion from '../../assets/Notionfixed.png'
import Native from '../../assets/Native.png'
import FileZilla from '../../assets/filezfixed.png'
import Postman from '../../assets/postman.svg'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
            this.setState({ firstInput: this.state.firstInput + addTo })
        } else {
            this.setState({ secondInput: this.state.secondInput + addTo })
        }
    }
    setOperator = (newOperator) => {
        this.setState({ displayResult: true })
        this.setState({ operator: newOperator })
    }
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

    }

    render() {
        // const TriviaLink = () => {
        //     window.open("http://animaltrivia.azurewebsites.net", '_blank');
        // }
        // const HFPLink = () => {
        //     window.open("https://info0886684.wixsite.com/healthforcepartners", '_blank');
        // }
        // const WeatherLink = () => {
        //     window.open("http://weatherapplicationjs.azurewebsites.net", '_blank');
        // }
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
                            {/* This container holds the header and main image */}
                            <Container id="Home" fluid style={{ marginBottom: '300px' }} >
                                <Row style={{ marginBottom: '50px', marginTop: '10px', marginRight: '1px' }}>
                                    <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <Nav style={{ position: 'fixed', zIndex: '2', backgroundColor: "#18181d", borderRadius: "10px", border: "none", boxShadow: '2px 2px 15px' }} variant="tabs" defaultActiveKey="/home">
                                            <Nav.Item className="growLarger">
                                                <Nav.Link active={false} href="#Home" style={{ color: 'white', fontFamily: 'InterMed', border: '0px', fontSize: '20px' }}>Home</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="growLarger">
                                                <Nav.Link active={false} href="#AboutMe" style={{ color: 'white', fontFamily: 'InterMed', border: '0px', fontSize: '20px' }}>About Me</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="growLarger">
                                                <Nav.Link active={false} href="#Skills" style={{ color: 'white', fontFamily: 'InterMed', border: '0px', fontSize: '20px' }}>Skills</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="growLarger">
                                                <Nav.Link active={false} href="#MyWork" style={{ color: 'white', fontFamily: 'InterMed', border: '0px', fontSize: '20px' }}>My Work</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="growLarger">
                                                <Nav.Link active={false} href="#Contact" style={{ color: 'white', fontFamily: 'InterMed', border: '0px', fontSize: '20px' }}>Contact</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="growLarger">
                                                <Nav.Link active={false} href={Resume} download="TrevorWResume2021" style={{ color: 'white', fontFamily: 'InterMed', border: '0px', fontSize: '20px' }}>Resume</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="growLarger">
                                                <Nav.Link rel="noreferrer" active={false} target="_blank" href="https://www.linkedin.com/in/trevorwjr98/" style={{ color: 'white', fontFamily: 'InterMed', border: '0px' }}><FontAwesomeIcon icon={faLinkedin} size="2x" /></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="growLarger">
                                                <Nav.Link rel="noreferrer" active={false} target="_blank" href="https://www.instagram.com/twomack_development/" style={{ color: 'white', fontFamily: 'InterMed', border: '0px' }}><FontAwesomeIcon icon={faInstagram} size="2x" /></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="growLarger">
                                                <Nav.Link rel="noreferrer" active={false} target="_blank" href="https://github.com/TrevorW98" style={{ color: 'white', fontFamily: 'InterMed', border: '0px' }}><FontAwesomeIcon icon={faGithub} size="2x" /></Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '100px', display: 'flex', justifyContent: 'center' }}>
                                    <Col md={3} style={{ textAlign: 'left' }}>
                                        <h1 style={{ margin: '10px', color: 'white', fontFamily: 'InterBold', fontSize: '90px' }}>
                                            Trevor Womack:{' '}
                                            <span style={{ color: 'White', fontWeight: 'lighter', fontFamily: 'InterReg', fontSize: '70px' }}>
                                                {/* Style will be inherited from the parent element */}
                                                <Typewriter
                                                    words={['Developer', 'Designer', 'Chef', 'Cat Dad', 'Hiker']}
                                                    loop={10}
                                                    cursor
                                                    cursorStyle='_'
                                                    typeSpeed={70}
                                                    deleteSpeed={50}
                                                    delaySpeed={1000}
                                                    onLoopDone={() => console.log(`Done after 5 loops!`)}
                                                />
                                            </span>
                                        </h1>
                                    </Col>
                                    <Col md={7}>
                                        <Image src={Headshot} style={{ borderRadius: '50px', boxShadow: '10px 10px 10px' }}></Image>
                                    </Col>
                                </Row>
                                <div id="AboutMe"></div>
                            </Container>
                            <Container fluid style={{ marginBottom: '250px' }}>
                                <Row style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Col md={7} style={{ marginRight: '50px' }}>
                                        <Carousel fade controls={false} pause='hover' indicators={false} style={{ borderRadius: '50px', boxShadow: '10px 10px 10px' }} >
                                            <Carousel.Item interval={2000}>
                                                <img
                                                    style={{ borderRadius: '50px' }}
                                                    className="d-block w-100"
                                                    src={Orientation}
                                                    alt="Orientation for the HealthForce Partners internship"
                                                />

                                            </Carousel.Item>
                                            <Carousel.Item interval={2000}>
                                                <img
                                                    style={{ borderRadius: '50px' }}
                                                    className="d-block w-100"
                                                    src={Hero}
                                                    alt="Code from the website: Unsplash"
                                                />

                                            </Carousel.Item>
                                            <Carousel.Item interval={2000}>
                                                <img
                                                    style={{ borderRadius: '50px' }}
                                                    className="d-block w-100"
                                                    src={Coast}
                                                    alt="Point Reyes National Seashore Hike"
                                                />

                                            </Carousel.Item>
                                            <Carousel.Item interval={2000}>
                                                <img
                                                    style={{ borderRadius: '50px' }}
                                                    className="d-block w-100"
                                                    src={Fosters}
                                                    alt="My two beautiful foster kittens, Sophia and Ava"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item interval={2000}>
                                                <img
                                                    style={{ borderRadius: '50px' }}
                                                    className="d-block w-100"
                                                    src={Stomp}
                                                    alt="Hiking in the redwood forest of Santa Cruz California"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item interval={2000}>
                                                <img
                                                    style={{ borderRadius: '50px' }}
                                                    className="d-block w-100"
                                                    src={Race}
                                                    alt="Large bicycle gathering with many people filling a street in Portland Oregon"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item interval={2000}>
                                                <img
                                                    style={{ borderRadius: '50px' }}
                                                    className="d-block w-100"
                                                    src={Navi}
                                                    alt="One of two Adult permanent pet cats. They will not be adopted out"
                                                />
                                            </Carousel.Item>
                                        </Carousel>
                                    </Col>
                                    <Col md={3}>
                                        <h2 id="main" style={{ color: 'white', fontWeight: 'lighter', fontFamily: 'InterBold', fontSize: '90px', marginBottom: '40px' }}>About Me</h2>
                                        <p style={{ color: 'white', fontFamily: 'InterMed', fontSize: '18' }}>
                                            <span style={{ marginLeft: '25px' }}>I</span> am a <a rel="noreferrer" href="https://www.instagram.com/stocktonca/?hl=en" target='_blank' aria-label="Link to Stockton California instagram" style={{ color: 'yellow' }}>Stockton, California</a> based software engineer and freelance
                                            web developer. Having recently graduated from CodeStack Academy and recieveing my certification in software
                                            engineering, I have since been honing my coding skills, releasing updates to my full-stack mobile application,
                                            Triton, and learning new languages and frameworks by building out projects.</p>
                                        <p style={{ color: 'white', fontFamily: 'InterMed', fontSize: '18' }}><span style={{ marginLeft: '25px' }}>My</span> mission is to increase the accessibility of current
                                            and future websites, making the internet a place for all to enjoy. Everyone deserves to have access to the extensive opportunities
                                            and resources that the internet provides in this modern age. Color contrast, screen reader capabilities, alternate tags, and
                                            screen size responsiveness allow me to reach my goal and provide everyone the chance to use my software.</p>
                                    </Col>
                                </Row>
                                <div id="Skills"></div>
                            </Container>
                            <Container fluid>
                                <Row style={{ marginBottom: '40px' }}>
                                    <Col md={4} style={{ marginLeft: '140px' }}>
                                        <h2 style={{ color: 'white', fontWeight: 'lighter', fontFamily: 'InterBold', fontSize: '90px' }}>Skills and Services</h2>
                                        <p style={{ color: 'white', fontFamily: 'InterMed', fontSize: '18' }}>Select a badge to view official documentation</p>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '100px', display: 'flex', justifyContent: 'space-evenly' }}>
                                    <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <a rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"><Image className="growLarger" style={{ width: '100px' }} src={HTML} alt="The HTML 5 logo"></Image></a>
                                    </Col>
                                    <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <a rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                                            <Image className="growLarger" style={{ width: '100px' }} src={CSS} alt="The HTML 5 logo"></Image>
                                        </a>
                                    </Col>
                                    <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Image className="growLarger" style={{ width: '100px' }} src={CSHARP} alt="The HTML 5 logo"></Image>
                                    </Col>
                                    <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Image className="growLarger" style={{ width: '100px' }} src={JS} alt="The HTML 5 logo"></Image>
                                    </Col>
                                    <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Image className="growLarger" style={{ width: '100px' }} src={TS} alt="The HTML 5 logo"></Image>
                                    </Col>
                                    <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Image className="growLarger" style={{ width: '100px' }} src={IONIC} alt="The HTML 5 logo"></Image>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '100px', display: 'flex', justifyContent: 'space-evenly' }}>
                                    <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Image className="growLarger" style={{ width: '110px' }} src={REACT} alt="The HTML 5 logo"></Image>
                                    </Col>
                                    <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Image className="growLarger" style={{ width: '120px' }} src={ANGULAR} alt="The HTML 5 logo"></Image>
                                    </Col>
                                    <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Image className="growLarger" style={{ width: '90px', height: '90px', marginTop: '20px' }} src={BOOT} alt="The HTML 5 logo"></Image>
                                    </Col>
                                    <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Image className="growLarger" style={{ width: '290px' }} src={UNITY} alt="The HTML 5 logo"></Image>
                                    </Col>
                                    <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Image className="growLarger" style={{ width: '100px', height: '100px', marginTop: '5px' }} src={JIRA} alt="The HTML 5 logo"></Image>
                                    </Col>
                                    <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Image className="growLarger" style={{ width: '100px', height: '100px', marginTop: '5px' }} src={VSCode} alt="The HTML 5 logo"></Image>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '100px', display: 'flex', justifyContent: 'space-evenly' }}>
                                    <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Image className="growLarger" style={{ width: '100px' }} src={Github} alt="The HTML 5 logo"></Image>
                                    </Col>
                                    <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Image className="growLarger" style={{ width: '100px' }} src={Slack} alt="The HTML 5 logo"></Image>
                                    </Col>
                                    <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Image className="growLarger" style={{ width: '100px' }} src={Notion} alt="The HTML 5 logo"></Image>
                                    </Col>
                                    <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Image className="growLarger" style={{ width: '100px' }} src={Native} alt="The HTML 5 logo"></Image>
                                    </Col>
                                    <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Image className="growLarger" style={{ width: '100px' }} src={FileZilla} alt="The HTML 5 logo"></Image>
                                    </Col>
                                    <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Image className="growLarger" style={{ width: '100px' }} src={Postman} alt="The HTML 5 logo"></Image>
                                    </Col>
                                </Row>


                                {/* <Row className="mt-5">
                                    <Col xs={12} sm={12} md={4} lg={4} className="center mt-4">
                                        <Card style={{ width: '18rem', borderStyle: 'none' }} className="height">
                                            <Card.Img variant="top" src={TritonLogo} alt="The logo for Triton" />
                                            <Card.Body>
                                                <Card.Title className="cardheadStyle">Triton</Card.Title>
                                            </Card.Body>
                                            <Card.Text className="cardTextStyle text-center">Angular, Ionic, Bootstrap, Android SDK, C#</Card.Text>
                                            <Link to="/Triton" className="center mb-2">
                                                <button className="Home" variant="primary">Learn about Triton</button>
                                            </Link>
                                        </Card>
                                    </Col>
                                    <Col xs={12} sm={12} md={4} lg={4} className="center mt-4">
                                        <Card style={{ width: '18rem', borderStyle: 'none' }} className="height" >
                                            <Card.Img variant="top" src={HFPLogo} alt="The logo for Health Force Partners" />
                                            <Card.Body>
                                                <Card.Title className="cardheadStyle">HealthForce Partners</Card.Title>

                                            </Card.Body>
                                            <Card.Text className="cardTextStyle text-center">Wix Website Builder</Card.Text>
                                            <div className="center mb-2">
                                                <button variant="primary" className="Home" onClick={HFPLink}>Visit the website</button>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col xs={12} sm={12} md={4} lg={4} className="center mt-4" >
                                        <Card style={{ width: '18rem', borderStyle: 'none' }} className="height">
                                            <Card.Img variant="top" src={ATLogo} alt="The letters 'A' and 'T' to represent the animal trivia application" />
                                            <Card.Body>
                                                <Card.Title className="cardheadStyle">Animal Trivia</Card.Title>

                                            </Card.Body>
                                            <Card.Text className="cardTextStyle text-center">React, Bootstrap, JSX, CSS</Card.Text>
                                            <div className="center mb-2">
                                                <button variant="primary" className="Home" onClick={TriviaLink}>Play Animal Trivia</button>
                                            </div>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row className="marginTop mt-2">
                                    <Col xs={12} sm={12} md={6} lg={6} className="center mt-4">
                                        <Card style={{ width: '18rem', borderStyle: 'none' }} className="height">
                                            <Card.Img variant="top" src={ReactLogo} alt="A picture of the logo for the React library" />
                                            <Card.Body>
                                                <Card.Title className="cardheadStyle">Calculator</Card.Title>

                                            </Card.Body>
                                            <Card.Text className="cardTextStyle text-center">React, CSS, Bootstrap</Card.Text>
                                            <Link to="/Calculator" className="center mb-2">
                                                <button className="Home" variant="primary"> Use the Calculator</button>
                                            </Link>
                                        </Card>
                                    </Col>
                                    <Col xs={12} sm={12} md={6} lg={6} className="center mt-4">
                                        <Card style={{ width: '18rem', borderStyle: 'none' }} className="height">
                                            <Card.Img variant="top" src={WeatherLogo} alt="A picture of a sun and a cloud to represent the weather application" />
                                            <Card.Body>
                                                <Card.Title className="cardheadStyle">Weather Application</Card.Title>

                                            </Card.Body>
                                            <Card.Text className="cardTextStyle text-center">Javascript, HTML, CSS</Card.Text>
                                            <div className="center mb-2">
                                                <button className="Home" onClick={WeatherLink} variant="primary">Check the weather</button>
                                            </div>
                                        </Card>
                                    </Col>
                                </Row> */}

                                {/*  */}


                                <Row id="Contact" className="whiteBG mt-5">
                                    <Col>
                                        <p className="titleStyle3 text-center d-none d-lg-block">Contact Me</p>
                                        <p className="xsTitle text-center d-block d-lg-none">Contact Me</p>
                                    </Col>
                                </Row>
                                <Row className="center whiteBG">
                                    <Col lg={6} className="mb-5">
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
