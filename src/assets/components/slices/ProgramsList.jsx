import React, { useState } from "react";

import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

import HeaderTwoBtns from "../common/HeaderTwoBtns";

const programs = [
  "Программа пробоотбора №1",
  "Программа пробоотбора №2",
  "Программа пробоотбора №3",
  "Программа пробоотбора №4",
  "Программа пробоотбора №5",
  "Программа пробоотбора №6",
  "Программа пробоотбора №7",
  "Программа пробоотбора №8",
  "Программа пробоотбора №9",
  "Программа пробоотбора №10",
];

const ProgramsList = ({ onExit, onCreateNew }) => {
  const [activeProgram, setActiveProgram] = useState(programs[0]);
  return (
    <React.Fragment>
      <HeaderTwoBtns
        leftBtnTitle="Создать новую"
        mainTitle="РЕДАКТИРОВАНИЕ ПРОГРАММ"
        onLeftBtnClk={onCreateNew}
        onRightBtnClk={onExit}
        rightBtnTitle="Выйти в главное меню"
      />
      ;
      <Stack direction="horizontal" gap={1} />
      <Accordion>
        {programs.map((programName, i) => (
          <Accordion.Item key={programName} eventKey={i}>
            <Accordion.Header>
              <div className="fw-bold fs-3">{programName}</div>
              {activeProgram === programName && (
                <Badge bg="success" className="fs-5 mx-5 py-2">
                  Активна
                </Badge>
              )}
            </Accordion.Header>
            <Accordion.Body>
              Здесь будет описание программы пробоотбора
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </React.Fragment>
  );
};

export default ProgramsList;
