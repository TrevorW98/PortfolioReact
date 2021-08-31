import React from 'react';
import emailjs from 'emailjs-com';
import { Col, Form, Button } from 'react-bootstrap';
import './contact.css';

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false
        }
    }

    sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_dl3r77e', 'template_oimfx7b', e.target, 'user_7SFNjmTDqZzB0jjBfimqp')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };


    onSubmitForm = () => {
        console.log(this.state.submitted);
        if (!this.state.submitted) {
            this.setState({ submitted: true });
        }
    };


    formSection = () => {
        if (!this.state.submitted) {
            return <Form onSubmit={this.sendEmail}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Control required id="NameInput" style={{ fontFamily: 'InterReg' }} type="text" name="name" placeholder="Name" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control required id="EmailInput" style={{ fontFamily: 'InterReg' }} type="email" name="email" placeholder="Email" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridSubject">
                        <Form.Control required id="SubjectInput" style={{ fontFamily: 'InterReg' }} type="text" name="subject" placeholder="Subject" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridMessage">
                        <Form.Control required id="MessageInput" style={{ fontFamily: 'InterReg' }} as="textarea" type="text" placeholder="Message" name="message" />
                    </Form.Group>
                </Form.Row>
                <Button onClick={this.onSubmitForm} style={{ width: '200px', borderRadius: '5px', fontFamily: 'InterMed', backgroundColor: '#18181d' }} className="Home" variant="primary" type="submit" value="Send">
                    Submit
                </Button>
            </Form >
        }
        else {
            return <p style={{fontSize: '30px', fontFamily: 'InterBold', textAlign: 'center', color: 'white'}}>Thank you for the submission!</p>
        }
    }

    render() {
        return (
            <>
                <this.formSection></this.formSection>
            </>
        );
    }

}
export default ContactUs;