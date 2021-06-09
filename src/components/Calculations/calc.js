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
                                <Row>
                                    <Col className="center">
                                        <p className="titleStyle1 text-center d-none d-md-block">React Calculator</p>
                                        <p className="xsTitle text-center d-block d-md-none">React Calculator</p>
                                    </Col>
                                </Row>
                                <Row className="center mt-5">
                                    <Col lg={1} className="d-flex justify-content-center displayBG">
                                        <Disp className="displayTxt" message={this.state.firstInput} />
                                    </Col>
                                </Row>
                                <Row className="center">
                                    <Col lg={1} className="d-flex justify-content-center displayBG">
                                        <Disp className="displayTxt" message={this.state.operator} />
                                    </Col>
                                </Row>
                                <Row className="center">
                                    <Col lg={1} className="d-flex justify-content-center displayBG">
                                        <Disp className="displayTxt" message={this.state.secondInput} />
                                    </Col>
                                </Row>
                                <Row className="center">
                                    <Col lg={1} className="d-flex justify-content-center displayBG">
                                        <Disp className="displayTxt" message={this.state.result} />
                                    </Col>
                                </Row>
                            </Container>
                            <Container >
                                <Row className="center">
                                    <Col xl={2} lg={2} md={3} xs={6} sm={4} className="center calcBG topRow">
                                        <Butt number={1} onClick={this.incrementNum} />
                                        <Butt number={2} onClick={this.incrementNum} />
                                        <Butt number={3} onClick={this.incrementNum} />
                                        <Butt number={"+"} onClick={this.setOperator} />
                                    </Col>
                                </Row>
                                <Row className="center">
                                    <Col xl={2} lg={2} md={3} xs={6} sm={4} className="center calcBG">
                                        <Butt number={4} onClick={this.incrementNum} />
                                        <Butt number={5} onClick={this.incrementNum} />
                                        <Butt number={6} onClick={this.incrementNum} />
                                        <Butt number={"-"} onClick={this.setOperator} />
                                    </Col>
                                </Row>
                                <Row className="center">
                                    <Col xl={2} lg={2} md={3} xs={6} sm={4} className="center calcBG">
                                        <Butt number={7} onClick={this.incrementNum} />
                                        <Butt number={8} onClick={this.incrementNum} />
                                        <Butt number={9} onClick={this.incrementNum} />
                                        <Butt number={0} onClick={this.incrementNum} />
                                    </Col>
                                </Row>
                                <Row className="center">
                                    <Col xl={2} lg={2} md={3} xs={6} sm={4} className="center calcBG botRow">
                                        
                                            <Butt number={"/"} onClick={this.setOperator} />
                                            <Butt number={"*"} onClick={this.setOperator} />
                                            <Butt number={"="} onClick={this.mathMethod} />
                                            <Butt number={"C"} onClick={this.clearMethod} />
                                       
                                    </Col>
                                </Row>
                            </Container>
                            <Container fluid>
                                <Row >
                                    <Col className="noPadding">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4860A0" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,117.3C672,139,768,213,864,256C960,299,1056,309,1152,266.7C1248,224,1344,128,1392,80L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                                    </Col>
                                </Row>
                                <Row className="blueBG">
                                    <Col>
                                        <p className="secondaryHeader d-none d-md-block">This is one of the assignments I completed early on within the course to demonstrate properties and state changes within react! It's not much, but I like to look at it and think of where I came from, and how differently I used to code.</p>
                                        <p className="xsSecondaryHeader d-block d-md-none">This is one of the assignments I completed early on within the course to demonstrate properties and state changes within react! It's not much, but I like to look at it and think of where I came from, and how differently I used to code.</p>
                                    </Col>
                                </Row>
                                <Row >
                                    <Col className="noPadding">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4860A0" fill-opacity="1" d="M0,288L80,240C160,192,320,96,480,80C640,64,800,128,960,138.7C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col className="center">
                                        <Link to='/home'>
                                            <Button className="protoBtnStyle" variant="primary">Return to Home</Button>
                                        </Link>
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
