import React from "react";
import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";

const AddDevs = () => {
  return (
    <Container className="mt-2">
      <Row>
        <Col md={8} className="m-auto">
          <Card className="shadow">
            <Card.Header>
              <h2 className="text-center bg-primary pt-3 pb-3 text-white">All developers is here</h2>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSkill">
                  <Form.Label>Skill</Form.Label>
                  <Form.Control type="text" placeholder="Enter your skill" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCell">
                  <Form.Label>Cell number</Form.Label>
                  <Form.Control type="number" placeholder="Enter your number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                  <Form.Label>Photo</Form.Label>
                  <Form.Control type="url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicFacebook">
                  <Form.Label>Facebook</Form.Label>
                  <Form.Control type="url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicYoutuve">
                  <Form.Label>Youtuve</Form.Label>
                  <Form.Control type="url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicInstagram">
                  <Form.Label>Instagram</Form.Label>
                  <Form.Control type="url" />
                </Form.Group>

                <Button variant="primary" className="w-100" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddDevs;
