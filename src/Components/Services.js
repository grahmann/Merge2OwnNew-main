import React from 'react';
import { Container, Row, } from "react-bootstrap";
import 'animate.css';

export const Services = () => {

  return (
    <section className="service" id="services">
      <Container className='text-center text-black' style={{ backgroundColor: '#f1f1f1' }}>
        <Row>
              <div>
                <h2>About Us</h2>
                <p className='text-black'>Merge 2 Own is an early-stage startup that recently won the
                Greenhouse Inc Social Impact Fund Pitch Competition Award. The
                platform is designed to address the limited personal network,
                counterparty trust, and home affordability concerns of
                first-time homebuyers and others who encounter significant
                barriers to home ownership in Canada. Are you experiencing
                challenges in buying your own home or interested in providing
                services to enable people buy their own home? If you are excited
                as we are in finding creative solutions, please sign up to stay
                informed when we Go Live.</p>
              </div>
        </Row>
      </Container>
    </section>
  )
}