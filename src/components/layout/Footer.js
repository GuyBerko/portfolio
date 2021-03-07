import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import '../../style/Footer.css';

const Footer = props => {
    return (
        <Container className="footer">
            <Row>
                <Col xl={12}>
                    Copyright &#169; 2019-{(new Date().getFullYear())} <strong>Guy Berkovich</strong>
                </Col>
            </Row>
        </Container>
    )
}

Footer.propTypes = {

}

export default Footer
