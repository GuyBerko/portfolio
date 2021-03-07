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
    Card,
    CardTitle,
    CardText
} from 'reactstrap';
import { Document, Page, pdfjs } from "react-pdf";
import CV from '../../assets/img/Guy-Berkovich-CV.pdf';
import github from '../../assets/img/github-icon.png';
import website from '../../assets/img/website-icon.png';
import '../../style/AboutMe.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const AboutMe = ({ isOpen, toggle }) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggleTab = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const gotoDocs = () => {
        const win = window.open('https://drive.google.com/file/d/1ekne3sA-0iQ6PawS7SdH_t8_SDBijU-K/view?usp=sharing', '_blank');
        win.focus();
    }

    const projects = [
        {
            name: 'Yazame',
            description: 'Real estate calulator',
            image: 'https://www.jimdo.com/static/6ddd0047c5c518accffa2abb6db438c9/80ee9/hero_visual_en.webp',
            links: {
                site: 'https://yazame.co.il',
                github: 'https://test.com'
            }
        },
        {
            name: 'Luckyy',
            description: 'Web application for connection tourists with travel guides',
            image: 'https://www.jimdo.com/static/6ddd0047c5c518accffa2abb6db438c9/80ee9/hero_visual_en.webp',
            links: {
                site: 'https://tipozz.herokuapp.com',
                github: 'https://test2.com'
            }
        }
    ];

    const projectsItems = [];
    for (let i = 0; i < projects.length; i += 2) {
        projectsItems.push(
            <Row key={`projects-row-${i}`}>
                {
                    projects.slice(i, i + 2).map((item, index) => (
                        <Col sm="6" key={`project-card-${index}`}>
                            <Card body className='project-card'>
                                <CardTitle>{item.name}</CardTitle>
                                <img src={item.image} alt='project image' className='project-image' />
                                <CardText>{item.description}</CardText>
                                <div className='links-wrapper'>
                                    <a href={item.links.site} target='_blank'><img className='project-link' src={website} alt='Website project link' /></a>
                                    {item.links.github && <a href={item.links.github} target='_blank'><img className='project-link' src={github} alt='Github project link' /></a>}
                                </div>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        );
    }

    return (
        <Modal isOpen={isOpen} toggle={toggle} backdrop className='about-me-modal'>
            <ModalHeader toggle={toggle} className='about-me-modal-header'>
                <Nav tabs>
                    <NavItem>
                        <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { toggleTab('1'); }}>
                            CV
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { toggleTab('2'); }}>
                            Projects
                        </NavLink>
                    </NavItem>
                </Nav>
            </ModalHeader>
            <ModalBody className='about-me-modal-body'>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <Document
                                    file={CV}
                                    className='pdf-document'
                                    onClick={gotoDocs}>
                                    <Page pageNumber={1} />
                                </Document>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        {projectsItems}
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
