import React from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";

import logo from "../../images/logo.png";
import CustomCard from "../common/CustomCard";

const MainMenu = ({ activateSlice }) => (
  <Container>
    <Row>
      <Col className="text-center my-auto">
        <Figure className="mt-4">
          <Figure.Image alt="171x180" src={logo} />
        </Figure>
      </Col>
      <Col>
        <CustomCard
          onClickAction={() => activateSlice("ProgramsList")}
          title={"Список программ"}
        />
      </Col>
      <Col>
        <CustomCard
          onClickAction={() => activateSlice("ProgramStatus")}
          title={"Статус текущей программы"}
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <CustomCard
          onClickAction={() => activateSlice("Diagnostics")}
          title={"Аппаратная диагностика"}
        />
      </Col>
      <Col>
        <CustomCard
          onClickAction={() => activateSlice("ManualMode")}
          title={"Ручное управление"}
        />
      </Col>
      <Col>
        <CustomCard
          onClickAction={() => activateSlice("SystemSettings")}
          title={"Системные настройки"}
        />
      </Col>
    </Row>
  </Container>
);

export default MainMenu;
