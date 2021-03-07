import React, { useState } from 'react';
import { Row, Container, Col, Button } from 'reactstrap';
import Layout from '../layout/Layout';
import Footer from '../layout/Footer';
import AboutMe from '../modals/AboutMe';
import ContactMe from '../modals/ContactMe';
import DescriptionBlock from '../DescriptionBlock';
import ProfilePhoto from '../../assets/img/profile_photo_2.png';

import '../../style/App.css';

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
            <Col xs="6">
              <DescriptionBlock onToggleModal={ onToggleModal } />
            </Col>
            <Col xs="6">
              <img className='profile-photo' src={ProfilePhoto} />
            </Col>
          </Row>
          <Row>
            <Footer />
          </Row>
        </Layout>
      </Container>
      <AboutMe isOpen={ modals.aboutModal } toggle={onToggleModal.bind(this, 'aboutModal')} />
      <ContactMe isOpen={ modals.contactModal } toggle={onToggleModal.bind(this, 'contactModal')} />
    </div>
  );
}

export default App;
