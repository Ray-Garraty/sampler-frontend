/* eslint-disable import-x/extensions */
import React from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import CustomCard from "./Card.jsx";
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
        <CustomCard
          setMenu={() => switchMenu("ProgramsList")}
          title={"Редактирование программ"}
        />
      </Col>
      <Col>
        <CustomCard
          setMenu={() => switchMenu("ProgramStatus")}
          title={"Статус текущей программы"}
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <CustomCard
          setMenu={() => switchMenu("Diagnostics")}
          title={"Аппаратная диагностика"}
        />
      </Col>
      <Col>
        <CustomCard
          setMenu={() => switchMenu("ManualMode")}
          title={"Ручное управление"}
        />
      </Col>
      <Col>
        <CustomCard
          setMenu={() => switchMenu("SystemSettings")}
          title={"Системные настройки"}
        />
      </Col>
    </Row>
  </Container>
);

export default MainMenu;
