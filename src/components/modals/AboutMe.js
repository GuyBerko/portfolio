import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
    Modal,
    ModalHeader,
    ModalBody,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row,
    Col,
} from 'reactstrap';

import ProjectsCarousel from '../ProjectsCarousel';
import '../../style/AboutMe.css';

const cv = 'https://storage.googleapis.com/portfolio-309012/Guy-Berkovich-CV-1.jpg';

const AboutMe = ({ isOpen, toggle }) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggleTab = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const gotoDocs = () => {
        const win = window.open('https://storage.googleapis.com/portfolio-309012/Guy-Berkovich-CV.pdf', '_blank');
        win.focus();
    }

    return (
        <Modal isOpen={ isOpen } toggle={ toggle } backdrop className='about-me-modal'>
            <ModalHeader toggle={ toggle } className='about-me-modal-header'>
                <Nav tabs>
                    <NavItem>
                        <NavLink className={ classnames({ active: activeTab === '1' }) } onClick={ () => { toggleTab('1'); } }>
                            CV
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={ classnames({ active: activeTab === '2' }) } onClick={ () => { toggleTab('2'); } }>
                            Projects
                        </NavLink>
                    </NavItem>
                </Nav>
            </ModalHeader>
            <ModalBody className='about-me-modal-body'>
                <TabContent activeTab={ activeTab }>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <img 
                                    src={ cv } 
                                    className='cv-image'
                                    onClick={ gotoDocs }
                                    alt="resume" />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <ProjectsCarousel />
                    </TabPane>
                </TabContent>
            </ModalBody>
        </Modal>
    )
}

AboutMe.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
}

export default AboutMe
