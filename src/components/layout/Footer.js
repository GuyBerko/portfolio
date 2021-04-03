import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../../style/Footer.css';

const Footer = () => {
    return (
        <Container className="footer nonselectable">
            <Row>
                <Col xl={ 12 }>
                    Copyright &#169; 2019-{ (new Date().getFullYear()) } <strong>Guy Berkovich</strong>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
