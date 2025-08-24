import React from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Card from "./Card.jsx";

const ManageProgram = ({ returnToMainMenu }) => (
  <Container>
    <Row>
      <Col sm={8}>
        <h2 className="mx-auto my-4 py-4 text-center fw-bold">
          ПУСК / ОСТАНОВКА ПРОГРАММЫ
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
    <Row>
      <Col>
        <Card title={"Запустить программу"} />
      </Col>
      <Col>
        <Card title={"Приостановить / возобновить"} />
      </Col>
      <Col>
        <Card title={"Перезапустить программу"} />
      </Col>
      <Col>
        <Card title={"Завершить программу"} />
      </Col>
    </Row>
  </Container>
);

export default ManageProgram;
