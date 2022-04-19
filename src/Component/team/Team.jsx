import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Team.css";

export const Team = () => {
  return (
    <Container>
      <Row>
        <Col md={3} className="Card-item">
          <Card className="shadow-sm">
            <Card.Img
              className="img"
              src="data:image/jpeg;base64,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"
            />
            <Card.Body>
              <Card.Title className="text-center">Shakila</Card.Title>
              <Card.Title className="text-center">jascripts</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              <ul className="d-flex social-icon">
                <li className="social-item">
                  <a href="">
                    {" "}
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
              <Link className="btn btn-primary w-100" to="/profile">
                view profile
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
