import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Butt from '../Button/butt';
import Disp from '../Display/disp';
import './styles.css';
import Home from '../Home/Home.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';


class CalculationButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    render() {
        return (
            <>
                <Router>
                    <Link to='/Calculator'>
                    </Link>
                    <Switch>
                        <Route path='/Calculator'>
                            <Container className="mt-5 ">
                                <Row className="center">
                                    <Col className="center">
                                        <p className="headingOneLarge text-center d-none d-md-block">React Calculator</p>
                                        <p className="headingOneSmall text-center d-block d-md-none">React Calculator</p>
                                    </Col>
                                </Row>
                                <Row className="center mt-5 ml-2 ">
                                    <Col lg={4} xs={4} className="d-flex justify-content-center displayBG rounding">
                                        <Disp className="displayTxt" message={this.state.firstInput} />
                                        <Disp className="displayTxt" message={this.state.operator} />
                                        <Disp className="displayTxt" message={this.state.secondInput} />
                                        <Disp className="displayTxt" message={this.state.result} />
                                    </Col>
                                </Row>
                            </Container>
                            <Container className="mt-2">
                                <Row className="center">
                                    <Col lg={1} sm={2} xs={2}>
                                        <Butt className="protoBtnStyle " number={1} onClick={this.incrementNum} />
                                    </Col>
                                    <Col lg={1} sm={2} xs={2}>
                                        <Butt className="protoBtnStyle" number={2} onClick={this.incrementNum} />
                                    </Col>
                                    <Col lg={1} sm={2} xs={2}>
                                        <Butt className="protoBtnStyle" number={3} onClick={this.incrementNum} />
                                    </Col>
                                    <Col lg={1} sm={2} xs={2}>
                                        <Butt className="protoBtnStyle" number={"+"} onClick={this.setOperator} />
                                    </Col>
                                </Row>
                                <Row className="center mt-2">
                                    <Col lg={1} sm={2} xs={2}>
                                        <Butt className="protoBtnStyle" number={4} onClick={this.incrementNum} />
                                    </Col>
                                    <Col lg={1} sm={2} xs={2}>
                                        <Butt className="protoBtnStyle" number={5} onClick={this.incrementNum} />
                                    </Col>
                                    <Col lg={1} sm={2} xs={2}>
                                        <Butt className="protoBtnStyle" number={6} onClick={this.incrementNum} />
                                    </Col>
                                    <Col lg={1} sm={2} xs={2}>
                                        <Butt className="protoBtnStyle" number={"-"} onClick={this.setOperator} />
                                    </Col>
                                </Row>
                                <Row className="center mt-2">
                                    <Col lg={1} sm={2} xs={2}>
                                        <Butt className="protoBtnStyle" number={7} onClick={this.incrementNum} />
                                    </Col>
                                    <Col lg={1} sm={2} xs={2}>
                                        <Butt className="protoBtnStyle" number={8} onClick={this.incrementNum} />
                                    </Col>
                                    <Col lg={1} sm={2} xs={2}> 
                                        <Butt className="protoBtnStyle" number={9} onClick={this.incrementNum} />
                                    </Col>
                                    <Col lg={1} sm={2} xs={2}>
                                        <Butt className="protoBtnStyle" number={0} onClick={this.incrementNum} />
                                    </Col>
                                </Row>
                                <Row className="center mt-2">
                                    <Col lg={1} sm={2} xs={2}>
                                        <Butt className="protoBtnStyle" number={"/"} onClick={this.setOperator} />
                                    </Col>
                                    <Col lg={1} sm={2} xs={2}>
                                        <Butt className="protoBtnStyle" number={"*"} onClick={this.setOperator} />
                                    </Col>
                                    <Col lg={1} sm={2} xs={2}>
                                        <Butt className="protoBtnStyle" number={"="} onClick={this.mathMethod} />
                                    </Col>
                                    <Col lg={1} sm={2} xs={2}>
                                        <Butt className="protoBtnStyle" number={"C"} onClick={this.clearMethod} />
                                    </Col>
                                </Row>
                            </Container>
                            <Container fluid>
                                <Row >
                                    <Col className="noPadding">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                            <path fill="#4860A0" fill-opacity="1" d="M0,128L1440,320L1440,320L0,320Z"></path>
                                        </svg>
                                    </Col>
                                </Row>
                                <Row className="blueBG center">
                                    <Col lg={8} className="mt-5">
                                        <p className="secondaryHeader d-none d-md-block">This is one of the assignments I completed early on
                                        within CodeStack Academy to demonstrate properties and state changes within react! It's not much, but
                                        I like to look at it and think of where I came from, and how differently I used to code. Before I
                                        started the academy, I had no knowledge about coding or what it even meant. Building this calculator
                                           inspired me, I realized how many possibilities there were when coding.</p>
                                        <p className="xsSecondaryHeader d-block d-md-none">This is one of the assignments I completed early on
                                        within CodeStack Academy to demonstrate properties and state changes within react! It's not much, but
                                        I like to look at it and think of where I came from, and how differently I used to code. Before I started
                                        the academy, I had no knowledge about coding or what it even meant. Building this calculator inspired me,
                                            I realized how many possibilities there were when coding.</p>
                                    </Col>
                                </Row>
                                <Row className=" blueBG">
                                    <Col className="center mt-4">
                                        <Link to='/home'>
                                            <Button className="Home" variant="primary">Return to Home</Button>
                                        </Link>
                                    </Col>
                                </Row>
                                <Row >
                                    <Col className="noPadding">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                            <path fill="#4860A0" fill-opacity="1" d="M0,128L1440,320L1440,0L0,0Z"></path>
                                        </svg>
                                    </Col>
                                </Row>
                            </Container>
                        </Route>
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                    </Switch>
                </Router>
            </>
        )
    }
}
export default CalculationButtons;
