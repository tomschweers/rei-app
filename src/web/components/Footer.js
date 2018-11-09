import React from 'react';
import { Row, Col } from 'reactstrap';

const Footer = () => (
  <footer className="mt-5">
    <Row>
      <Col sm="12" className="text-right pt-3">
        <p>
          November, 2018 for Salesforce
          {' '}
          &nbsp; | &nbsp; Created by
          {' '}
          <a target="_blank" rel="noopener noreferrer" href="https://tomschweers.com">
            Tom Schweers
          </a>
          .
        </p>
      </Col>
    </Row>
  </footer>
);

export default Footer;
