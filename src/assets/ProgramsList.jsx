import React, { useState } from "react";

import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

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

const ProgramsList = ({ returnToMainMenu }) => {
  const [activeProgram, setActiveProgram] = useState(programs[0]);
  return (
    <React.Fragment>
      <Stack className="m-2" direction="horizontal" gap={1}>
        <div className="fs-4 fw-bold">
          <Button className="fs-4 fw-bold" variant="primary">
            Новая программа
          </Button>
        </div>
        <h3 className="mx-auto pt-2 text-center fw-bold text-secondary">
          РЕДАКТИРОВАНИЕ ПРОГРАММ
        </h3>
        <div>
          <Button
            className="fs-4 fw-bold"
            onClick={returnToMainMenu}
            variant="danger"
          >
            Выйти в главное меню
          </Button>
        </div>
      </Stack>
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
