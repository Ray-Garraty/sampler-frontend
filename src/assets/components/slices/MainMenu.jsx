/* eslint-disable import-x/extensions */
import React from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import logo from "../../images/logo.png";
import CustomCard from "../common/CustomCard.jsx";

const MainMenu = ({ activateSlice }) => (
  <Container>
    <Row>
      <Col>
        <div className="my-4">
          <img alt="Logo" src={logo} />
        </div>
      </Col>
      <Col>
        <CustomCard
          onClickAction={() => activateSlice("ProgramsList")}
          title={"Редактирование программ"}
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
