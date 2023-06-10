import React from 'react';
import { useState, useEffect } from "react";
import { Col} from "react-bootstrap";


export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
    <Col lg={12}>
  <form onSubmit={handleSubmit}>
    <div className="new-email-bx d-flex flex-column flex-md-row">
      <input className="new-email-bx mb-3 mb-md-0 mr-md-2 flex-grow-1" value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Address" style={{ flex: '1', marginRight: '2px' }} />
      <button type="submit" style={{ flex: '0' }}>Submit</button>
    </div>
  </form>
</Col>








  
  )
}