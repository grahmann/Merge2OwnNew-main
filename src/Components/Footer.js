import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <MDBFooter className='text-center text-black' style={{ backgroundColor: '#fee074' }}>
      <h2 className='p-4'>Interested to learn more? Let's talk!</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <FontAwesomeIcon icon={faPhone} />
            <p>Call us: 437-988-4141</p>
          </div>
          <div className="col-md-4">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>info@merge2own.com</p>
          </div>
          <div className="col-md-4">
            <FontAwesomeIcon icon={faMapMarker} />
            <p>Location: Waterloo</p>
          </div>
        </div>
      </div>
      
      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-dark' href='https://mdbootstrap.com/'>
          M2O
        </a>
      </div>
    </MDBFooter>
  );
}