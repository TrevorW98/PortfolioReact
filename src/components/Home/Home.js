import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Card, Carousel } from 'react-bootstrap';
import './HomeStyles.css';
import CalculationButtons from '../Calculations/calc.js';
import PersonalPic1 from '../../assets/Orientation.png';
import PersonalPic2 from '../../assets/code1fixed.png';
import PersonalPic3 from '../../assets/apifixed.png';
import PersonalPic4 from '../../assets/stompfixed.png';
import TritonLogo from '../../assets/tritonlogofixed.png';
import HFPLogo from '../../assets/HFPLogofixed.png';
import ATLogo from '../../assets/animals.jpg';
import ReactLogo from '../../assets/ReactLogofixed.png';
import WeatherLogo from '../../assets/weatherfixed.png';
import ContactUs from '../ContactForm/ContactForm.js';
import { animated } from 'react-spring';
import { use3dEffect } from 'use-3d-effect';
// import SocialMediaLinks from '../SocialMediaLinks/SocialMedia.js';
import Access from '../../assets/accessFixed.png';
// import HTML from '../../assets/htmlfixed.png';
// import CSharp from '../../assets/CSharpfixed.png';
// import JS from '../../assets/jsLogofixed.png';
// import TS from '../../assets/tsfixed.png';
// import CSS from '../../assets/cssLogofixed.png';
// import Ionic from '../../assets/ionicLogofixed.png';
// import ReactPic from '../../assets/reactPngfixed.png';
// import NG from '../../assets/angular.png';
// import Boot from '../../assets/bootstrapLogofixed.png';
// import Unity from '../../assets/unityFixed.png';
// import Github from '../../assets/github.png'
// import Slack from '../../assets/slackfixed.png'
// import Notion from '../../assets/Notionfixed.png'
// import Jira from '../../assets/jirafixed.png'
// import Zoom from '../../assets/zoom.png'
// import VSCode from '../../assets/VSfixed.png'
// import FileZilla from '../../assets/filezfixed.png'
// import Postman from '../../assets/postman.svg'
// import Hero from '../../assets/Hero.jpg'
import { Typewriter } from 'react-simple-typewriter'

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
            carHeader: "life and family",
            alt1: "Group coding with the HFP team",
            alt2: "Code from the front and back end of Triton",
            alt3: "A nice picture I took of mushrooms growing on a tree",
            alt4: "A picture of myself on a nostalgic hike",
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
    //Finally got the multiple calculations working! I was trying to set the firstInput equal to the result state with each equation
    //But instead i just set the first input to the actual equation itself and cleared the second input and operator
    //I tried many more complicated ways but this simple way worked and the other ones didn't lol oh well
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
        const TriviaLink = () => {
            window.open("http://animaltrivia.azurewebsites.net", '_blank');
        }
        const HFPLink = () => {
            window.open("https://info0886684.wixsite.com/healthforcepartners", '_blank');
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
                            {/* This container holds the header and main image */}
                            <Container fluid >
                                <Row style={{ marginBottom: '700px', marginTop: '200px' }}>
                                    <Col md={8}>
                                   
                                        <Carousel fade controls={false} pause='hover' indicators={false}>
                                            <Carousel.Item interval={1000}>
                                                <img
                                                    style={{ borderRadius: '50px' }}
                                                    className="d-block w-100"
                                                    src={PersonalPic4}
                                                    alt="First slide"
                                                />
                                                <Carousel.Caption>
                                                    <h3>First slide label</h3>
                                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img
                                                style={{ borderRadius: '50px' }}
                                                    className="d-block w-100"
                                                    src={PersonalPic4}
                                                    alt="Second slide"
                                                />

                                                <Carousel.Caption>
                                                    <h3>Second slide label</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item interval={1000}>
                                                <img
                                                style={{ borderRadius: '50px' }}
                                                    className="d-block w-100"
                                                    src={PersonalPic4}
                                                    alt="Third slide"
                                                />

                                                <Carousel.Caption>
                                                    <h3>Third slide label</h3>
                                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
                                    
                                        {/* <Image style={{ borderRadius: '50px' }} src={PersonalPic4} fluid></Image> */}
                                    </Col>
                                    <Col md={4} style={{ textAlign: 'left' }}>
                                        <h1 style={{ margin: '20px', color: 'white', fontWeight: 'lighter', fontFamily: 'Oswald', fontSize: '90px' }}>
                                            Trevor Womack:{' '}
                                            <span style={{ color: 'White', fontWeight: 'lighter', fontFamily: 'Oswald', fontSize: '70px' }}>
                                                {/* Style will be inherited from the parent element */}
                                                <Typewriter
                                                    words={['Web Developer', 'Designer', 'Chef', 'Cat Dad', 'Freelancer']}
                                                    loop={5}
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
                                </Row>
                                <Row className="center mt-5">

                                    {/* <Col lg={6} className="mt-5">
                                        <Row>
                                            <Col>
                                                <p className="secondaryHeaderblk d-none d-md-block " id="main">I am a
                                                    fullstack web developer with a passion for accessibility. I have received certification
                                                    as a software developer, after an intense 10 month program with over 1,000 hours of instructor led coursework, and am
                                                    proficient in developing applications in multiple languages and technologies, of which you can see below. Out of 50 plus students, I was among the
                                                    15 that finished the program and graduated. Throughout this course and since I have graduated, I have kept on learning and building projects to
                                                    further explore my passion for software development.
                                                </p>
                                                <p className="xsSecondaryHeaderblk d-block d-md-none">I am a
                                                    fullstack web developer with a passion for accessibility. I have received certification
                                                    as a software developer, after an intense 10 month program with over 1,000 hours of instructor led coursework, and am
                                                    proficient in developing applications in multiple languages and technologies, of which you can see below. Out of 50 plus students, I was among the
                                                    15 that finished the program and graduated. Throughout this course and since I have graduated, I have kept on learning and building projects to
                                                    further explore my passion for software development.</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p className="secondaryHeaderblk d-none d-md-block "> Before learning how to code, I was a cook working at a steakhouse in my home town. I have always had a passion for creating
                                                    things and cooking for people, and my passion helped me to advance quickly in my field. After discovering CodeStack and how I
                                                    could continue to pursue my passion of creating things through development, I was hooked. Today, I love what I do and I am excited to see
                                                    continue to grow and learn each day.
                                                </p>
                                                <p className="xsSecondaryHeaderblk d-block d-md-none"> Before learning how to code, I was a cook working at a steakhouse in my home town. I have always had a passion for creating
                                                    things and cooking for people, and my passion helped me to advance quickly in my field. After discovering CodeStack and how I
                                                    could continue to pursue my passion of creating things through development, I was hooked. Today, I love what I do and I am excited to see
                                                    continue to grow and learn each day.
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col> */}
                                </Row>

                                <Row >
                                    <Col>
                                        <p className="titleStyle4 text-center d-none d-lg-block">My Mission</p>
                                        <p className="xsTitle text-center d-block d-lg-none">My Mission</p>
                                    </Col>

                                </Row>
                                <Row className="mt-5 mb-5">
                                    <Col>
                                        <Row>
                                            <Col lg={7} className="center mt-5">
                                                <p className="secondaryHeader d-none d-md-block " id="main">My goal is to increase the accessibility of current
                                                    and future websites, making the internet a place for all to enjoy. Everyone deserves to have access to the extensive opportunities
                                                    and resources that the internet provides in this modern age. Color contrast, screen reader capabilities, alternate tags, and
                                                    screen size responsiveness allow me to reach my goal and provide everyone the chance to use my software.</p>
                                                <p className="xsSecondaryHeader d-block d-md-none">My goal is to increase the accessibility of current
                                                    and future websites, making the internet a place for all to enjoy. Everyone deserves to have access to the extensive opportunities
                                                    and resources that the internet provides in this modern age. Color contrast, screen reader capabilities, alternate tags, and
                                                    screen size responsiveness allow me to reach my goal and provide everyone the chance to use my software.</p>
                                            </Col>
                                            <Col >
                                                <Card.Img className=" d-none d-md-block" variant="top" src={Access} alt="The accessibility score for this website" />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="titleStyle3 text-center d-none d-lg-block">Languages and technologies</p>
                                        <p className="xsTitle text-center d-block d-lg-none">Languages and technologies</p>
                                    </Col>
                                </Row>
                                {/* <Row className="center">
                                    <Col lg={9} xs={11} className="tabsBG noPadding" >
                                        <Tab.Container fluid id="left-tabs-example" defaultActiveKey="first">
                                            <Row className="center" >
                                                <Col sm={2} >
                                                    <Nav variant="tabs" className="flex-column ">
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="first" className="tabsFont">Languages</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="second" className="tabsFont">Frameworks & Libraries</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="third" className="tabsFont">DevOps & Collaboration</Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                </Col>
                                                <Col sm={10} >
                                                    <Tab.Content >
                                                        <Tab.Pane eventKey="first">
                                                            <Row className="mt-5">
                                                                <Col className="center">
                                                                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 200 }} overlay={renderTooltipHTML} >
                                                                        <Figure className="ml-2"><Figure.Image width={70} alt="Html logo" src={HTML} /></Figure>
                                                                    </OverlayTrigger>
                                                                </Col>
                                                                <Col className="center">
                                                                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 200 }} overlay={renderTooltipCSharp} >
                                                                        <Figure><Figure.Image width={80} alt="C Sharp logo" src={CSharp} /></Figure>
                                                                    </OverlayTrigger>
                                                                </Col>
                                                                <Col className="center">
                                                                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 200 }} overlay={renderTooltipJS} >
                                                                        <Figure className="mr-2"><Figure.Image width={70} alt="Java Script logo" src={JS} /></Figure>
                                                                    </OverlayTrigger>
                                                                </Col>
                                                            </Row>
                                                            <Row className="mt-4 center">
                                                                <Col className="center" md={4}>
                                                                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 200 }} overlay={renderTooltipTS} >
                                                                        <Figure className="mt-2 mr-3"><Figure.Image width={70} alt="Type Script logo" src={TS} /></Figure>
                                                                    </OverlayTrigger>
                                                                </Col>
                                                                <Col className="center" md={4}>
                                                                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 200 }} overlay={renderTooltipCSS} >
                                                                        <Figure className="mr-2"><Figure.Image width={80} alt="CSS logo" src={CSS} /></Figure>
                                                                    </OverlayTrigger>
                                                                </Col>
                                                            </Row>
                                                        </Tab.Pane>

                                                        <Tab.Pane eventKey="second">
                                                            <Row className="mt-5">
                                                                <Col className="center">
                                                                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 200 }} overlay={renderTooltipIonic} >
                                                                        <Figure className=""><Figure.Image width={70} alt="Ionic logo" src={Ionic} /></Figure>
                                                                    </OverlayTrigger>
                                                                </Col>
                                                                <Col className="center">
                                                                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 200 }} overlay={renderTooltipReact} >
                                                                        <Figure><Figure.Image width={70} alt="React logo" src={ReactPic} /></Figure>
                                                                    </OverlayTrigger>
                                                                </Col>
                                                                <Col className="center">
                                                                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 200 }} overlay={renderTooltipNG} >
                                                                        <Figure><Figure.Image width={70} alt="Angular 11" src={NG} /></Figure>
                                                                    </OverlayTrigger>
                                                                </Col>
                                                            </Row>
                                                            <Row className="mt-4 center">
                                                                <Col className="center" md={4}>
                                                                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 200 }} overlay={renderTooltipBoot} >
                                                                        <Figure className="mr-4"><Figure.Image width={65} alt="Bootstrap" src={Boot} /></Figure>
                                                                    </OverlayTrigger>
                                                                </Col>
                                                                <Col className="center" md={4}>
                                                                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 200 }} overlay={renderTooltipUnity} >
                                                                        <Figure className="mt-3 mr-3"><Figure.Image width={110} alt="Unity" src={Unity} /></Figure>
                                                                    </OverlayTrigger>
                                                                </Col>
                                                            </Row>
                                                        </Tab.Pane>

                                                        <Tab.Pane eventKey="third">
                                                            <Row className="mt-5">
                                                                <Col className="center">
                                                                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 200 }} overlay={renderTooltipGit} >
                                                                        <Figure className="mt-3"><Figure.Image width={70} alt="Github" src={Github} /></Figure>
                                                                    </OverlayTrigger>
                                                                </Col>
                                                                <Col className="center">
                                                                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 200 }} overlay={renderTooltipSlack} >
                                                                        <Figure className="mt-3"><Figure.Image width={70} alt="Slack" src={Slack} /></Figure>
                                                                    </OverlayTrigger>
                                                                </Col>
                                                                <Col className="center">
                                                                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 200 }} overlay={renderTooltipNotion} >
                                                                        <Figure className="mt-4"><Figure.Image width={70} alt="Notion" src={Notion} /></Figure>
                                                                    </OverlayTrigger>
                                                                </Col>
                                                            </Row>
                                                            <Row className="mt-4 center">
                                                                <Col className="center" md={4}>
                                                                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 200 }} overlay={renderTooltipJira} >
                                                                        <Figure className="mr-4" ><Figure.Image width={70} alt="Jira" src={Jira} /></Figure>
                                                                    </OverlayTrigger>
                                                                </Col>
                                                                <Col className="center" md={4}>
                                                                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 200 }} overlay={renderTooltipZoom} >
                                                                        <Figure className=""><Figure.Image width={70} alt="Zoom" src={Zoom} /></Figure>
                                                                    </OverlayTrigger>
                                                                </Col>
                                                            </Row>
                                                            <Row className="mt-5">
                                                                <Col className="center">
                                                                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 200 }} overlay={renderTooltipVS} >
                                                                        <Figure className="mt-2 ml-2"><Figure.Image width={60} alt="VScode" src={VSCode} /></Figure>
                                                                    </OverlayTrigger>
                                                                </Col>
                                                                <Col className="center">
                                                                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 200 }} overlay={renderTooltipFile} >
                                                                        <Figure className="mt-2"><Figure.Image width={70} alt="FileZilla" src={FileZilla} /></Figure>
                                                                    </OverlayTrigger>
                                                                </Col>
                                                                <Col className="center">
                                                                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 200 }} overlay={renderTooltipPostman} >
                                                                        <Figure className="mt-1 mr-2"><Figure.Image width={85} alt="Postman" src={Postman} /></Figure>
                                                                    </OverlayTrigger>
                                                                </Col>
                                                            </Row>

                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </Col>
                                            </Row>
                                        </Tab.Container>
                                    </Col>
                                </Row> */}

                                <Row>
                                    <Col className="center d-none d-md-block">
                                        <p className="titleStyle4 text-center">Projects and Coursework</p>
                                    </Col>
                                    <Col className="center d-block d-md-none">
                                        <p className="headingOneSmall text-center">Projects and Coursework</p>
                                    </Col>
                                </Row>
                                <Row className="mt-5">
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
                                </Row>

                                {/*  */}


                                <Row className="whiteBG mt-5">
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

const Example = () => {
    const ref = React.useRef(null);
    const {style, ...mouseHandlers} = use3dEffect(ref);
  
    return (
      <animated.div
        ref={ref}
        style={{
          background: '#61dafb', color: 'white', padding: '2em',
          ...style
        }}
        {...mouseHandlers}
      >
        Hover over me!
      </animated.div>
    );
  };

export default Home;

/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
