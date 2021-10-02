import React, { useState } from 'react';
import { Row, Container, Col } from 'reactstrap';
import Layout from '../layout/Layout';
import Footer from '../layout/Footer';
import AboutMe from '../modals/AboutMe';
import ContactMe from '../modals/ContactMe';
import DescriptionBlock from '../DescriptionBlock';

import '../../style/App.css';
const profilePhoto = 'https://storage.googleapis.com/portfolio-309012/profile_photo_2.png';
const App = () => {
  const [modals, setModal] = useState({
    aboutModal: false,
    contactModal: false,
  });

  const onToggleModal = (sModalName) => {
    setModal({ ...modals, [sModalName]: !modals[sModalName] });
  }

  return (
    <div className="App">
      <Container className="app-container">
        <Layout>
          <Row className="main-row">
            <Col md="6" xs="10">
              <DescriptionBlock onToggleModal={ onToggleModal } />
            </Col>
            <Col md="6" xs="10">
              <img alt="profile" className='profile-photo nonselectable' src={ profilePhoto } />
            </Col>
          </Row>
          <Row>
            <Footer />
          </Row>
        </Layout>
      </Container>
      <AboutMe isOpen={ modals.aboutModal } toggle={ onToggleModal.bind(this, 'aboutModal') } />
      <ContactMe isOpen={ modals.contactModal } toggle={ onToggleModal.bind(this, 'contactModal') } />
    </div>
  );
}

export default App;
