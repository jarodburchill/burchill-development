import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const HomeForm = () => {
  return (
    <>
      <Jumbotron>
        <h2>Project Request</h2>
        <hr className="my-4" />
        <Form action="mailto:jarod@burchilldevelopment.com" method="post" encType="text/plain">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Description of project requirements:</Form.Label>
            <Form.Control name="description" as="textarea" rows="8" placeholder="Enter description" required />
          </Form.Group>
          <Button variant="outline-dark" type="submit">
            Submit Request
          </Button>
        </Form>
      </Jumbotron>
    </>
  );
}

export default HomeForm;