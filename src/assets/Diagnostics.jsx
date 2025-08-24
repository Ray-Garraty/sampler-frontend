import React from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";

const Diagnostics = ({ returnToMainMenu }) => (
  <React.Fragment>
    <Container>
      <Row>
        <Col sm={8}>
          <h2 className="mx-auto my-4 py-4 text-center fw-bold">
            АППАРАТНАЯ ДИАГНОСТИКА
          </h2>
        </Col>
        <Col sm={3}>
          <Button
            className="my-4 fs-4 fw-bold"
            onClick={returnToMainMenu}
            variant="danger"
          >
            Выйти в главное меню
          </Button>
        </Col>
      </Row>
    </Container>
    <Nav fill className="fw-bold fs-4" variant="tabs">
      <Nav.Item>
        <Nav.Link eventKey="link-1">Карусель</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Насос</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Охладитель</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4">Тачскрин</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-5">Датчики жидкости</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-6">Термодатчики</Nav.Link>
      </Nav.Item>
    </Nav>
    <div className="p-3 fs-3">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
      dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
      nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
      Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu
    </div>
  </React.Fragment>
);

export default Diagnostics;
