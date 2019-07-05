import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';

const ContactInfo = () => {
  return (
    <>
      <Jumbotron>
        <h2>Contact</h2>
        <hr className="my-4" />
        <ListGroup>
          <ListGroup.Item action href="tel:15192828028" variant="light">
            +1 519-282-8028
          </ListGroup.Item>
          <br />
          <ListGroup.Item action href="mailto:jarod@burchilldevelopment.com" variant="light">
            jarod@burchilldevelopment.com
          </ListGroup.Item>
          <br />
          <ListGroup.Item action href="https://www.linkedin.com/in/jarodburchill/" variant="light">
            LinkedIn
          </ListGroup.Item>
          <br />
          <ListGroup.Item action href="https://www.freelancer.ca/u/jarodburchill" variant="light">
            Freelancer
          </ListGroup.Item>
          <br />
          <ListGroup.Item action href="https://github.com/jarodburchill" variant="light">
            GitHub
          </ListGroup.Item>
          <br />
          <ListGroup.Item action href="https://twitter.com/jarodburchill" variant="light">
            Twitter
          </ListGroup.Item>
          <br />
          <ListGroup.Item action href="https://www.instagram.com/burchilldevelopment/" variant="light">
            Instagram
          </ListGroup.Item>
          <br />
        </ListGroup>
      </Jumbotron>
    </>
  );
}

export default ContactInfo;