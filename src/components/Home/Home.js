import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeStyles.css';
import { Col, Container, Row, Carousel, Nav, Image, Card, Button } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter'
import Orientation from '../../assets/Orientation.jpg';
import Hero from '../../assets/Hero.jpg';
import Coast from '../../assets/Coast.jpg';
import Fosters from '../../assets/Fosters.jpg';
import Navi from '../../assets/Navi.jpg';
import Race from '../../assets/Race.jpg';
import Stomp from '../../assets/Stomp.jpg';
import ContactUs from '../ContactForm/ContactForm.js';
import Resume from '../../assets/TrevorWomackResumeAXD2021.pdf'
import Headshot from '../../assets/TW688.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import HTML from '../../assets/HTML.png';
import CSS from '../../assets/CSS.png';
import CSHARP from '../../assets/CSHARP.png';
import JS from '../../assets/JS.png';
import TS from '../../assets/tsfixed.png';
import IONIC from '../../assets/ionicLogofixed.png';
import REACT from '../../assets/REACT.png';
import ANGULAR from '../../assets/angular.png';
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
import Tilt from 'react-parallax-tilt';
import Triton from '../../assets/TritonCenter.jpg';
import HFP from '../../assets/HFP.jpg'
import Index from '../../assets/Index.png'
import TritonHome from '../../assets/TritonHome.jpg'




class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tritonDetails: false
        };
    }
    componentDidMount() {
        let tritonCard = document.getElementById('tritonCard');
        let hfpCard = document.getElementById('hfpCard');
        tritonCard.addEventListener('click', () => {
            if (!this.state.tritonDetails) {
                this.setState({ tritonDetails: true });
            } else {
                this.setState({ tritonDetails: false });
            }
        });
        hfpCard.addEventListener('click', () => {
            this.setState({ tritonDetails: false });
        })

    }
    tritonDeets = () => {
        if (this.state.tritonDetails) {
            return <Container fluid>
                <Row style={{ padding: '0px', display: 'flex', justifyContent: 'center', marginTop: '70px' }}>
                    <Col md={4}>
                        <p style={{ color: 'white', fontFamily: 'InterMed', fontSize: '20px', marginTop: '70px' }}>
                            <span style={{ marginLeft: '25px' }}>When</span> I first started developing Triton, it was as an assignment from
                            CodeStack Academy. As the course progressed and months went on, my passion for Triton grew as more
                            functionality and design pieces started coming together and by the end
                            of our course, I was determined to continue working and releasing updates.
                            Triton is currently available on the Google Play Store for Android and
                            will be available for IOS in the near future. </p>
                        <a style={{ textDecoration: 'none', border: 'none' }} target="_blank" rel="noreferrer" href="http://play.google.com/store/apps/details?id=io.ionic.TritonFull">
                            <Button style={{ color: 'white', backgroundColor: '#18181d', border: 'none', fontFamily: 'InterMed', marginLeft: '110px' }}>Google Play Store Listing</Button>
                        </a>
                    </Col>
                    <Col md={3} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image style={{ borderRadius: '12px' }} src={TritonHome}></Image>
                    </Col>
                    <Col md={3} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image style={{ borderRadius: '12px' }} src={Index}></Image>
                    </Col>
                </Row>

            </Container>
        } else {
            return null
        }
    }
    render() {
        return (
            <>
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
                                    <Nav.Link aria-label="LinkedIn" rel="noreferrer" active={false} target="_blank" href="https://www.linkedin.com/in/trevorwjr98/" style={{ color: 'white', fontFamily: 'InterMed', border: '0px' }}><FontAwesomeIcon  icon={faLinkedin} size="2x"/></Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="growLarger">
                                    <Nav.Link  aria-label="Instagram" rel="noreferrer" active={false} target="_blank" href="https://www.instagram.com/twomack_development/" style={{ color: 'white', fontFamily: 'InterMed', border: '0px' }}><FontAwesomeIcon icon={faInstagram} size="2x" /></Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="growLarger">
                                    <Nav.Link  aria-label="GitHub" rel="noreferrer" active={false} target="_blank" href="https://github.com/TrevorW98" style={{ color: 'white', fontFamily: 'InterMed', border: '0px' }}><FontAwesomeIcon icon={faGithub} size="2x" /></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '100px', display: 'flex', justifyContent: 'center' }}>
                        <Col md={5} style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '100px' }}>
                            <h1 style={{ marginLeft: '10px', color: 'white', fontFamily: 'InterBold', fontSize: '70px' }}>
                                Hi! I'm Trevor Womack: {' '}
                                <span style={{ color: 'White', fontFamily: 'Tech', fontSize: '70px' }}>
                                    {/* Style will be inherited from the parent element */}
                                    <Typewriter
                                        words={[' Developer', ' Designer', ' Chef', ' Cat Dad', ' Hiker']}
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
                        <Col md={4} className="d-none d-xl-block" style={{ display: 'flex', justifyContent: 'flex-end'}}>
                            <Image src={Headshot} style={{ borderRadius: '50px', boxShadow: '8px 8px 10px' }} alt="Trevor Womack Jr's Headshot, he looks stunning and beautiful, and so do you."></Image>
                        </Col>
                    </Row>
                    <div id="AboutMe"></div>
                </Container>
                <Container fluid style={{ marginBottom: '300px' }}>
                    <Row style={{ display: 'flex', justifyContent: 'center' }}>
                        <Col md={6} style={{ marginRight: '50px' }}>
                            <Carousel fade controls={false} pause='hover' indicators={false} style={{ borderRadius: '50px', boxShadow: '8px 8px 10px' }} >
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
                        <Col md={4} style={{marginLeft: '30px'}}>
                            <h2 id="main" style={{ color: 'white', fontWeight: 'lighter', fontFamily: 'InterBold', fontSize: '90px', marginBottom: '40px', marginTop: '40px' }}>About Me</h2>
                            <p style={{ color: 'white', fontFamily: 'InterMed', fontSize: '18' }}>
                                <span style={{ marginLeft: '25px' }}>I</span> am a <a rel="noreferrer" href="https://www.instagram.com/stocktonca/?hl=en" target='_blank' aria-label="Link to Stockton California instagram" style={{ color: 'Cyan' }}>Stockton, California</a> based software engineer and freelance
                                web developer. Having recently graduated from CodeStack Academy and receiving my certification in software
                                engineering, I have since been honing my coding skills, releasing updates to my full-stack mobile application,
                                <a aria-label="Link to Triton's listing on the Google Play Store" rel="noreferrer" target="_blank" href="http://play.google.com/store/apps/details?id=io.ionic.TritonFull" style={{ color: 'Cyan' }}> Triton</a> , and learning new languages and frameworks by building out projects.</p>
                            <p style={{ color: 'white', fontFamily: 'InterMed', fontSize: '18' }}><span style={{ marginLeft: '25px' }}>Through</span> the teachings of CodeStack and my personal growth as a
                                developer, I have become proficient in learning and using modern, frequently updated frameworks and libraries. A couple examples of this include this website, which is built in the latest version of React
                                - 17.0.2 and Triton, built with the latest iteration of Angular - 12. While knowing and staying up to date with the latest technology, I also have
                                a deep understanding of the fundamentals - JavaScript, HTML, and CSS. </p>
                        </Col>
                    </Row>
                    <div id="Skills"></div>
                </Container>
                <Container fluid style={{ marginBottom: '300px' }}>
                    <Row style={{ marginBottom: '40px' }}>
                        <Col md={4} style={{ marginLeft: '160px' }}>
                            <h2 style={{ color: 'white', fontWeight: 'lighter', fontFamily: 'InterBold', fontSize: '90px' }}>Skills and Services</h2>
                            <p style={{ color: 'white', fontFamily: 'InterMed', fontSize: '18', marginLeft: '8px' }}>Select a badge to view official documentation</p>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '100px', display: 'flex', justifyContent: 'space-evenly' }}>
                        <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Tilt tiltReverse={true}>
                                <a rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
                                    <Image className="growLarger" style={{ width: '120px' }} src={HTML} alt="The HTML 5 logo"></Image>
                                </a>
                            </Tilt>
                        </Col>
                        <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Tilt tiltReverse={true}>
                                <a rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                                    <Image className="growLarger" style={{ width: '100px' }} src={CSS} alt="The HTML 5 logo"></Image>
                                </a>
                            </Tilt>
                        </Col>
                        <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Tilt tiltReverse={true}>
                                <a rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                                    <Image className="growLarger" style={{ width: '100px' }} src={CSHARP} alt="The HTML 5 logo"></Image>
                                </a>
                            </Tilt>
                        </Col>
                        <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Tilt tiltReverse={true}>
                                <a rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                                    <Image className="growLarger" style={{ width: '100px' }} src={JS} alt="The HTML 5 logo"></Image>
                                </a>
                            </Tilt>
                        </Col>
                        <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Tilt tiltReverse={true}>
                                <a rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                                    <Image className="growLarger" style={{ width: '100px' }} src={TS} alt="The HTML 5 logo"></Image>
                                </a>
                            </Tilt>
                        </Col>
                        <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Tilt tiltReverse={true}>
                                <a rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                                    <Image className="growLarger" style={{ width: '100px' }} src={IONIC} alt="The HTML 5 logo"></Image>
                                </a>
                            </Tilt>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '100px', display: 'flex', justifyContent: 'space-evenly' }}>
                        <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Tilt tiltReverse={true}>
                                <a rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                                    <Image className="growLarger" style={{ width: '110px' }} src={REACT} alt="The HTML 5 logo"></Image>
                                </a>
                            </Tilt>
                        </Col>
                        <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Tilt tiltReverse={true}>
                                <a rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                                    <Image className="growLarger" style={{ width: '120px' }} src={ANGULAR} alt="The HTML 5 logo"></Image>
                                </a>
                            </Tilt>
                        </Col>
                        <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Tilt tiltReverse={true}>
                                <a rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                                    <Image className="growLarger" style={{ width: '90px', height: '90px', marginTop: '20px' }} src={BOOT} alt="The HTML 5 logo"></Image>
                                </a>
                            </Tilt>
                        </Col>
                        <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Tilt tiltReverse={true} style={{backgroundColor: 'white', borderRadius: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <a  rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                                    <Image className="growLarger" style={{ width: '290px' }} src={UNITY} alt="The HTML 5 logo"></Image>
                                </a>
                            </Tilt>
                        </Col>
                        <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Tilt tiltReverse={true}>
                                <a rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                                    <Image className="growLarger" style={{ width: '100px', height: '100px', marginTop: '5px' }} src={JIRA} alt="The HTML 5 logo"></Image>
                                </a>
                            </Tilt>
                        </Col>
                        <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Tilt tiltReverse={true}>
                                <a rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                                    <Image className="growLarger" style={{ width: '100px', height: '100px', marginTop: '5px' }} src={VSCode} alt="The HTML 5 logo"></Image>
                                </a>
                            </Tilt>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '100px', display: 'flex', justifyContent: 'space-evenly' }}>
                        <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Tilt tiltReverse={true} style={{backgroundColor: 'white', borderRadius: '50px', height: '95px'}}>
                                <a rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                                    <Image className="growLarger" style={{ width: '96px' }} src={Github} alt="The HTML 5 logo"></Image>
                                </a>
                            </Tilt>
                        </Col>
                        <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Tilt tiltReverse={true}>
                                <a rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                                    <Image className="growLarger" style={{ width: '100px' }} src={Slack} alt="The HTML 5 logo"></Image>
                                </a>
                            </Tilt>
                        </Col>
                        <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Tilt tiltReverse={true}>
                                <a rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                                    <Image className="growLarger" style={{ width: '100px' }} src={Notion} alt="The HTML 5 logo"></Image>
                                </a>
                            </Tilt>
                        </Col>
                        <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Tilt tiltReverse={true}>
                                <a rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                                    <Image className="growLarger" style={{ width: '100px' }} src={Native} alt="The HTML 5 logo"></Image>
                                </a>
                            </Tilt>
                        </Col>
                        <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Tilt tiltReverse={true}>
                                <a rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                                    <Image className="growLarger" style={{ width: '100px' }} src={FileZilla} alt="The HTML 5 logo"></Image>
                                </a>
                            </Tilt>
                        </Col>
                        <Col md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Tilt tiltReverse={true}>
                                <a rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                                    <Image className="growLarger" style={{ width: '100px' }} src={Postman} alt="The HTML 5 logo"></Image>
                                </a>
                            </Tilt>
                        </Col>
                    </Row>
                </Container>
                <Container fluid style={{ marginBottom: '300px' }}>
                    <Row style={{ marginBottom: '40px', display: 'flex', justifyContent: 'flex-end' }}>
                        <Col md={3} style={{ marginRight: '140px' }}>
                            <h2 style={{ color: 'white', fontFamily: 'InterBold', fontSize: '90px' }}>Projects and Work</h2>
                        </Col>
                    </Row>
                    <Row style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Col md={5} style={{ display: 'flex', justifyContent: 'center' }}>
                            <Tilt tiltReverse={true}>
                                <Card id="tritonCard" style={{ width: '35rem', border: 'none', borderRadius: "13px", boxShadow: '5px 5px 8px #18181d', backgroundColor: '#18181d' }}>
                                    <Card.Img style={{ borderRadius: '12px 12px 0px 0px' }} variant="top" src={Triton} alt="The logo for Triton, a paw print on a square, teal background" />
                                    <Card.Body>
                                        <Card.Title style={{ color: 'white', fontFamily: 'InterMed', fontSize: '25px', textAlign: 'center' }}>Triton</Card.Title>
                                        <Card.Text style={{ color: 'white', fontFamily: 'InterReg', fontSize: '18px', textAlign: 'center' }}>
                                            A full-stack mobile application which gives users access to an index of animals and the information needed to care for them, along with other pet-care focused features.
                                        </Card.Text>
                                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', padding: '0px' }}>
                                            <span class="badge bg-danger" style={{ color: 'white', marginRight: '8px', fontSize: '16px' }}>Angular 11</span>
                                            <span class="badge" style={{ backgroundColor: '#004fa3', color: 'white', marginRight: '8px', fontSize: '16px' }}>TypeScript</span>
                                            <span class="badge bg-secondary" style={{ color: 'white', marginRight: '8px', fontSize: '16px' }}>Material UI</span>
                                            <span class="badge" style={{backgroundColor: '#1e7c34' ,color: 'white', marginRight: '8px', fontSize: '16px' }}>Android SDK</span>
                                            <span class="badge" style={{backgroundColor: '#004fa3',  color: 'white', marginRight: '8px', fontSize: '16px' }}>SQL Server</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Tilt>
                        </Col>
                        <Col md={5} style={{ display: 'flex', justifyContent: 'center' }}>
                            <a id="hfpCard" href="https://www.healthforcepartners.net/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                                <Tilt tiltReverse={true}>
                                    <Card  style={{ width: '35rem', border: 'none', borderRadius: "13px", boxShadow: '5px 5px 8px #18181d', backgroundColor: '#18181d' }}>
                                        <Card.Img style={{ borderRadius: '12px 12px 0px 0px' }} variant="top" src={HFP} alt="The logo for HealthForce Partners, and also a link to their website." />
                                        <Card.Body>
                                            <Card.Title style={{ color: 'white', fontFamily: 'InterMed', fontSize: '25px', textAlign: 'center' }}>HealthForce Partners</Card.Title>
                                            <Card.Text style={{ color: 'white', fontFamily: 'InterReg', fontSize: '18px', textAlign: 'center' }}>
                                                During my internship at HealthForce Partners, I worked on designing, developing, and deploying the companies new website with Wix technologies.
                                            </Card.Text>
                                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                                <span class="badge bg-warning" style={{ color: 'black', marginRight: '8px', fontSize: '16px' }}>Velo</span>
                                                <span class="badge bg-light" style={{ color: 'black', marginRight: '8px', fontSize: '16px' }}>Wix</span>
                                                <span class="badge bg-danger" style={{ color: 'white', marginRight: '8px', fontSize: '16px' }}>Adobe XD</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Tilt>
                            </a>
                        </Col>
                    </Row>
                    <Row style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                        <Col style={{ display: 'flex', justifyContent: 'center' }}>
                            <this.tritonDeets />
                        </Col>
                    </Row>
                </Container>
                <Container fluid style={{}}>
                    <Row style={{ marginBottom: '40px', display: 'flex', justifyContent: 'flex-start' }}>
                        <Col md={4} style={{ marginLeft: '200px' }}>
                            <h2 style={{ color: 'white', fontFamily: 'InterBold', fontSize: '90px' }}>Contact Me</h2>
                        </Col>
                    </Row>
                    <Row className="center whiteBG" style={{display: 'flex', justifyContent: 'flex-start'}}>
                        <Col lg={6} className="mb-5" style={{ marginLeft: '200px' }}>
                            <ContactUs></ContactUs>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}


export default Home;


/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
