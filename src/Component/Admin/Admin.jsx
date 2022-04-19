import React from "react";
import "./Admin.css";
import { Card, Col, Container, Row, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <Container className="mt-2">
      <Row>
        <Col md={8} className="m-auto">
          <Card className="shadow">
            <Card.Header className=" adddevs-head ">
              <h2>All developers is here</h2>
              <Button>
                {" "}
                <Link to="/AddDevs">Add new devs</Link>
              </Button>
            </Card.Header>
            <Card.Body>
              <Table className=" table striped table table-white table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th> Name</th>
                    <th>Skill</th>
                    <th>Cell nb</th>
                    <th>Photo</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-body">
                    <td>1</td>
                    <td>shakil</td>
                    <td>java</td>
                    <td>01821683060</td>
                    <td className="team-img">
                      <img src="https://wpbeaveraddons.com/wp-content/uploads/2017/06/t1-2.png" alt="" />
                    </td>
                    <td className="action-icon">
                      <a href="">
                        <i class="fa fa-eye"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-edit"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-trash"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
