import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    occupation: '',
    currentLocation: '',
    coCreationSession: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    
    try {
      let response = await fetch('https://merge2own.netlify.app/#connect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(formDetails)
      });
  
      if (!response.ok) { // check if response went through
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      let result = await response.json();
      setFormDetails(formInitialDetails);
  
      if (result.code === 200) {
        setStatus({ success: true, message: 'Message sent successfully' });
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      }
      
    } catch (error) {
      console.error('Error:', error);
      setButtonText('Error, please try again...');
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    } finally {
      setButtonText('Send');
    }
  };
  

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img className={isVisible ? 'animate__animated animate__zoomIn' : ''} src={contactImg} alt="Contact Us" />
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                          required
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                          required
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                          required
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.occupation}
                          placeholder="Occupation"
                          onChange={(e) => onFormUpdate('occupation', e.target.value)}
                          required
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.currentLocation}
                          placeholder="Location(Province/Postal Code)"
                          onChange={(e) => onFormUpdate('currentLocation', e.target.value)}
                        />
                      </Col>
                      <Col xs={12} className="px-1">
                          <label>Would you be interested to participate in a co-creation session to discuss your needs sometime in June 2023?</label>
                          <div className="radio-buttons">
                            <div>
                              <label>
                                <input
                                  type="radio"
                                  id="coCreationYes"
                                  name="coCreationSession"
                                  value="Yes"
                                  checked={formDetails.coCreationSession === 'Yes'}
                                  onChange={(e) => onFormUpdate('coCreationSession', e.target.value)}
                                  required
                                />
                                Yes
                              </label>
                            </div>
                            <div>
                              <label>
                                <input
                                  type="radio"
                                  id="coCreationNo"
                                  name="coCreationSession"
                                  value="No"
                                  checked={formDetails.coCreationSession === 'No'}
                                  onChange={(e) => onFormUpdate('coCreationSession', e.target.value)}
                                  required
                                />
                                No
                              </label>
                            </div>
                          </div>
                        </Col>
                       <Col xs={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Send us a Message"
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                        ></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
