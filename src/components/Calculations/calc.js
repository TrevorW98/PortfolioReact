import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Butt from '../Button/butt';
import Disp from '../Display/disp';
import './styles.css';

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
    render() {
        return (
            <Container className="mt-5">
                <Row className="d-flex justify-content-center">
                    <Col lg={2} className="d-flex justify-content-center displayBGTop">
                        <Disp message={this.state.firstInput} className="displayTxt" />
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col lg={2} className="d-flex justify-content-center displayBGMid">
                        <Disp message={this.state.operator} className="displayTxt" />
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col lg={2} className="d-flex justify-content-center displayBGMid">
                        <Disp message={this.state.secondInput} className="displayTxt" />
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col lg={2} className="d-flex justify-content-center displayBGTop">
                        <Disp message={this.state.result} className="displayTxt" />
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col className="d-flex justify-content-center">
                        <Row>
                            <Col className="mr-1">
                                <Butt number={1} onClick={this.incrementNum} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mr-1">
                                <Butt number={2} onClick={this.incrementNum} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mr-1">
                                <Butt number={3} onClick={this.incrementNum} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Butt number={"+"} onClick={this.setOperator} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col className="d-flex justify-content-center">
                        <Row>
                            <Col className="mr-1">
                                <Butt number={4} onClick={this.incrementNum} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mr-1">
                                <Butt number={5} onClick={this.incrementNum} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mr-1">
                                <Butt number={6} onClick={this.incrementNum} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Butt number={"-"} onClick={this.setOperator} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col className="d-flex justify-content-center">
                        <Row>
                            <Col className="mr-1">
                                <Butt number={7} onClick={this.incrementNum} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mr-1">
                                <Butt number={8} onClick={this.incrementNum} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mr-1">
                                <Butt number={9} onClick={this.incrementNum} />
                            </Col>
                        </Row>
                        <Row>
                            <Col >
                                <Butt number={0} onClick={this.incrementNum} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Col className="d-flex justify-content-center">
                        <Row>
                            <Col className="mr-1">
                                <Butt number={"/"} onClick={this.setOperator} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mr-1">
                                <Butt number={"*"} onClick={this.setOperator} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mr-1">
                                <Butt number={"="} onClick={this.mathMethod} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Butt number={"C"} onClick={this.clearMethod} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default CalculationButtons;
