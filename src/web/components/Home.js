import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';

const About = () => (
  <div>
    <Row>
      <Jumbotron className="text-white">
        <h1>
          REI Campgrounds
        </h1>
        <p className="lead">
          Find your next campground using the power of Salesforce Einstein AI.
        </p>
        <p>
          This is a description, a very long one at that. I will put a description of my app here. Anyways
          did you know that Lebron James wears the number 23? Crazy right. I bet you didn't know that. Michael
          Jordan also wore number 23 when he played for the Chicago Bulls.
        </p>
      </Jumbotron>
    </Row>
    <Row className="pt-5">
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-map" />
          {' '}
          Routing
        </h3>
        <p>
          React Router is used to handle all web-side routing.
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/ReactTraining/react-router" className="btn btn-primary">
            React Router Docs
          </a>
        </p>
      </Col>
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-fire" />
          {' '}
          Firebase
        </h3>
        <p>
          Firebase is all ready to go with examples on how to read/write data to/from Firebase.
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/docs/database/web/start" className="btn btn-primary">
            Firebase Docs
          </a>
        </p>
      </Col>
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-organization" />
          {' '}
          Redux
        </h3>
        <p>
          State management the 'clean way' via Redux is setup with examples - woohoo!
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://redux.js.org/docs/introduction/" className="btn btn-primary">
            Redux Docs
          </a>
        </p>
      </Col>
    </Row>
    <Row className="pt-md-5 pb-5">
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-layers" />
          {' '}
          Redux Persist
        </h3>
        <p>
          Persist the data stored in Redux for faster load times without needing to hit the server
          each page load.
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/rt2zz/redux-persist" className="btn btn-primary">
            Redux Persist Docs
          </a>
        </p>
      </Col>
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-drop" />
          {' '}
          Web Styles
        </h3>
        <p>
          Webpack, SCSS, Bootstrap and ReactStrap - ready at your fingertips.
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://reactstrap.github.io/components/alerts/" className="btn btn-primary">
            ReactStrap Docs
          </a>
        </p>
      </Col>
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-user-following" />
          {' '}
          Auth
        </h3>
        <p>
          Most apps need user authentication. This one comes ready to go with Firebase Auth - but
          you can easily change that within the `/actions/member.js`
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/docs/auth/" className="btn btn-primary">
            Firebase Auth Docs
          </a>
        </p>
      </Col>
    </Row>
  </div>
);

export default About;
