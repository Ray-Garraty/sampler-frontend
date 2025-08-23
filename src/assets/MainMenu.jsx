/* eslint-disable import-x/extensions */
import React from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Card from "./Card.jsx";
import logo from "./logo.png";

const MainMenu = ({ switchMenu }) => (
  <Container>
    <Row>
      <Col>
        <div className="my-4">
          <img alt="Logo" src={logo} />
        </div>
      </Col>
      <Col>
        <Card
          setMenu={() => switchMenu("ProgramsList")}
          title={"Редактирование программ"}
        />
      </Col>
      <Col>
        <Card
          setMenu={() => switchMenu("ProgramStatus")}
          title={"Статус текущей программы"}
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <Card
          setMenu={() => switchMenu("ManageProgram")}
          title={"Пуск / Остановка программы"}
        />
      </Col>
      <Col>
        <Card
          setMenu={() => switchMenu("Diagnostics")}
          title={"Аппаратная диагностика"}
        />
      </Col>
      <Col>
        <Card
          setMenu={() => switchMenu("PumpCal")}
          title={"Калибровка насоса"}
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <Card
          setMenu={() => switchMenu("ManualMode")}
          title={"Ручное управление"}
        />
      </Col>
      <Col>
        <Card
          setMenu={() => switchMenu("SystemSettings")}
          title={"Системные настройки"}
        />
      </Col>
      <Col>
        <Card
          setMenu={() => switchMenu("DebugMenu")}
          title={"Режим разработчика"}
        />
      </Col>
    </Row>
  </Container>
);

export default MainMenu;
