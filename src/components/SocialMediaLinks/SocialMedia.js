import React from 'react';
import { Col, Button, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './social.css'

class SocialMedia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const linkedIn = () => {
            window.open("https://www.linkedin.com/in/trevorwjr98/", '_blank');
        }
        const gitHub = () => {
            window.open("https://github.com/TrevorW98", '_blank');
        }
        const instaGram = () => {
            window.open("https://www.instagram.com/trevorwombat98/", '_blank');
        }

        return (
            <>
                <Row className="center mb-5">
                    <Col lg={1} className="mt-3 center">
                        <Button aria-label="Linked In Profile" className="buttonStyle" onClick={linkedIn}><FontAwesomeIcon icon={faLinkedin} size="3x" /></Button>
                    </Col>
                    <Col lg={1} className="mt-3 center">
                        <Button aria-label="Github Profile" className="buttonStyle" onClick={gitHub}><FontAwesomeIcon icon={faGithub} size="3x" /></Button>
                    </Col>
                    <Col lg={1} className="mt-3 center">
                        <Button aria-label="Instagram Profile" className="buttonStyle" onClick={instaGram}><FontAwesomeIcon icon={faInstagram} size="3x" /></Button>
                    </Col>
                </Row>
            </>
        )
    }
}
export default SocialMedia;