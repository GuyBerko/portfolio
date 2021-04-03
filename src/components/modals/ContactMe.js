import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Spinner,
  Alert
} from 'reactstrap';
import axios from 'axios';

import '../../style/ContactMe.css';

const ContactMe = ({ isOpen, toggle }) => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');
  const [contactForm, updateFormValue] = useState({
    name: '',
    email: '',
    message: ''
  });

  const submit = async () => {
    setLoader(true);
    const result = await axios.post('/api/contactForm', contactForm);
    setLoader(false);
    const { success } = result.data;

    if (success) {
      toggle();
    }
    else {
      setError('I am sorry but there seems to be some kind of error please try again in shortly, or contact me in different method.');
    }
  }

  const onChange = (evt) => {
    updateFormValue({ ...contactForm, [evt.target.id]: evt.target.value });
  }

  return (
    <Modal isOpen={ isOpen } toggle={ toggle } backdrop centered keyboard size="lg">
      <ModalHeader className='contact-me-header'>Get In Touch</ModalHeader>
      { error && (<Alert color='danger'>{ error }</Alert>) }
      { loader && (<div className='loader-wrapper'><Spinner size="lg" color="primary" /></div>) }
      <ModalBody className='contact-me-body'>
        <section className='left-block'>
          <h3>
            Hey there :)
                    </h3>
          <p>
            I will be happy to answer any of your questions. Just fill out the form and i will be in touch as soon as possible.
                    </p>
          <div className='or-wrapper'>
            <hr />
            <h4>Or</h4>
            <hr />
          </div>
          <h6>just send me message directly at:</h6>
          <span>Email: <a href="mailto:mailofguy@gmail.com">mailofguy@gmail.com</a></span><br />
          <span>Phone: <a href="tel:+972-548114540">+972-548114540</a></span>
        </section>
        <section className='right-block'>
          <Form className='contact-form'>
            <FormGroup>
              <input type='email' id='email' placeholder='jhon@example.com' onChange={ onChange } />
              <label htmlFor='email'>Email</label>
            </FormGroup>
            <FormGroup>
              <input type='text' id='name' placeholder='Jhon doe' onChange={ onChange } />
              <label htmlFor='name'>Name</label>
            </FormGroup>
            <FormGroup>
              <input type='textarea' id='message' placeholder='type your message here..' onChange={ onChange } />
              <label htmlFor='message'>Message</label>
            </FormGroup>
          </Form>
        </section>
      </ModalBody>
      <ModalFooter className='contact-me-footer'>
        <Button color='secondary' onClick={ toggle }>Cancel</Button>
        <Button color='primary' onClick={ submit }>Send</Button>
      </ModalFooter>
    </Modal>
  )
}

ContactMe.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
}

export default ContactMe
