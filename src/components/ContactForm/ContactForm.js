import React from 'react';
import emailjs from 'emailjs-com';
import {  Col, Form, Button } from 'react-bootstrap';
import './contact.css';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_dl3r77e', 'template_oimfx7b', e.target, 'user_7SFNjmTDqZzB0jjBfimqp')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }

    return (
        <>
            <Form onSubmit={sendEmail}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Control type="text" name="name" placeholder="Name" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="email" name="email" placeholder="Email" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridSubject">
                        <Form.Control type="text" name="subject" placeholder="Subject" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridMessage">
                        <Form.Control as="textarea" type="text" placeholder="Message" name="message" />
                    </Form.Group>
                </Form.Row>
                <Button className="protoBtnStyle" variant="primary" type="submit" value="Send">
                    Submit
                </Button>
            </Form>
        </>
    );
}