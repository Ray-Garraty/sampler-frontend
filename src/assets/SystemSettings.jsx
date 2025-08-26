import React from "react";

import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const SystemSettings = ({ returnToMainMenu }) => (
  <React.Fragment>
    <Container>
      <Row>
        <Col sm={8}>
          <h2 className="my-4 text-center fw-bold text-secondary">
            СИСТЕМНЫЕ НАСТРОЙКИ
          </h2>
        </Col>
        <Col sm={4}>
          <Button
            className="my-3 fs-4 fw-bold"
            onClick={returnToMainMenu}
            variant="danger"
          >
            Выйти в главное меню
          </Button>
        </Col>
      </Row>
    </Container>
    <Accordion>
      <Accordion.Item eventKey={1}>
        <Accordion.Header>
          <div className="ms-5 fw-bold fs-3">
            Напоминание об износе трубки насоса
          </div>
        </Accordion.Header>
        <Accordion.Body>Здесь будут настройки</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey={2}>
        <Accordion.Header>
          <div className="ms-5 fw-bold fs-3">Сетевые подключения</div>
        </Accordion.Header>
        <Accordion.Body>Здесь будут настройки</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey={3}>
        <Accordion.Header>
          <div className="ms-5 fw-bold fs-3">Калибровка расходомера</div>
        </Accordion.Header>
        <Accordion.Body>Здесь будут настройки</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey={4}>
        <Accordion.Header>
          <div className="ms-5 fw-bold fs-3">Пароли и пользователи</div>
        </Accordion.Header>
        <Accordion.Body>Здесь будут настройки</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey={5}>
        <Accordion.Header>
          <div className="ms-5 fw-bold fs-3">Дата и время</div>
        </Accordion.Header>
        <Accordion.Body>Здесь будут настройки</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </React.Fragment>
);

export default SystemSettings;
