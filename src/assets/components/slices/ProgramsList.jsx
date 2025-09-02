import React, { useState } from "react";

import { Accordion, Button, Col, ListGroup, Row } from "react-bootstrap";
import {
  Activity,
  Circle,
  ClockHistory,
  Gear,
  MeasuringCup,
  PencilSquare,
  PlayFill,
  StopFill,
  XCircleFill,
} from "react-bootstrap-icons";

import HeaderTwoBtns from "../common/HeaderTwoBtns";

const programs = [
  {
    isActive: true,
    numContainers: 1,
    inletTubeLength: 10,
    containerVolume: 100,
    sampleVolume: 100,
    tubeDiameter: 1,
    numWashings: 1,
    numAttempts: 1,
    flowmeterDosing: true,
    samplesPerContainer: 1,
    containersPerSample: 1,
    trigger: "time",
    firstSampleNow: true,
    sampleInterval: "01:00",
    numPulses: 1000,
    maxTimeout: "23:00",
    delayedStartEnabled: false,
    delayedStart: "datetime",
    startDateTime: "05.09.2025,10:00",
    delayedNumPulses: 1000,
  },
  {
    isActive: false,
    numContainers: 1,
    inletTubeLength: 10,
    containerVolume: 100,
    sampleVolume: 100,
    tubeDiameter: 1,
    numWashings: 1,
    numAttempts: 1,
    flowmeterDosing: true,
    samplesPerContainer: 1,
    containersPerSample: 1,
    trigger: "time",
    firstSampleNow: true,
    sampleInterval: "01:00",
    numPulses: 1000,
    maxTimeout: "23:00",
    delayedStartEnabled: false,
    delayedStart: "datetime",
    startDateTime: "05.09.2025,10:00",
    delayedNumPulses: 1000,
  },
  {
    isActive: false,
    numContainers: 1,
    inletTubeLength: 10,
    containerVolume: 100,
    sampleVolume: 100,
    tubeDiameter: 1,
    numWashings: 1,
    numAttempts: 1,
    flowmeterDosing: true,
    samplesPerContainer: 1,
    containersPerSample: 1,
    trigger: "time",
    firstSampleNow: true,
    sampleInterval: "01:00",
    numPulses: 1000,
    maxTimeout: "23:00",
    delayedStartEnabled: false,
    delayedStart: "datetime",
    startDateTime: "05.09.2025,10:00",
    delayedNumPulses: 1000,
  },
  {
    isActive: false,
    numContainers: 1,
    inletTubeLength: 10,
    containerVolume: 100,
    sampleVolume: 100,
    tubeDiameter: 1,
    numWashings: 1,
    numAttempts: 1,
    flowmeterDosing: true,
    samplesPerContainer: 1,
    containersPerSample: 1,
    trigger: "time",
    firstSampleNow: true,
    sampleInterval: "01:00",
    numPulses: 1000,
    maxTimeout: "23:00",
    delayedStartEnabled: false,
    delayedStart: "datetime",
    startDateTime: "05.09.2025,10:00",
    delayedNumPulses: 1000,
  },
  {
    isActive: false,
    numContainers: 1,
    inletTubeLength: 10,
    containerVolume: 100,
    sampleVolume: 100,
    tubeDiameter: 1,
    numWashings: 1,
    numAttempts: 1,
    flowmeterDosing: true,
    samplesPerContainer: 1,
    containersPerSample: 1,
    trigger: "time",
    firstSampleNow: true,
    sampleInterval: "01:00",
    numPulses: 1000,
    maxTimeout: "23:00",
    delayedStartEnabled: false,
    delayedStart: "datetime",
    startDateTime: "05.09.2025,10:00",
    delayedNumPulses: 1000,
  },
  {
    isActive: false,
    numContainers: 1,
    inletTubeLength: 10,
    containerVolume: 100,
    sampleVolume: 100,
    tubeDiameter: 1,
    numWashings: 1,
    numAttempts: 1,
    flowmeterDosing: true,
    samplesPerContainer: 1,
    containersPerSample: 1,
    trigger: "time",
    firstSampleNow: true,
    sampleInterval: "01:00",
    numPulses: 1000,
    maxTimeout: "23:00",
    delayedStartEnabled: false,
    delayedStart: "datetime",
    startDateTime: "05.09.2025,10:00",
    delayedNumPulses: 1000,
  },
  {
    isActive: false,
    numContainers: 1,
    inletTubeLength: 10,
    containerVolume: 100,
    sampleVolume: 100,
    tubeDiameter: 1,
    numWashings: 1,
    numAttempts: 1,
    flowmeterDosing: true,
    samplesPerContainer: 1,
    containersPerSample: 1,
    trigger: "time",
    firstSampleNow: true,
    sampleInterval: "01:00",
    numPulses: 1000,
    maxTimeout: "23:00",
    delayedStartEnabled: false,
    delayedStart: "datetime",
    startDateTime: "05.09.2025,10:00",
    delayedNumPulses: 1000,
  },
  {
    isActive: false,
    numContainers: 1,
    inletTubeLength: 10,
    containerVolume: 100,
    sampleVolume: 100,
    tubeDiameter: 1,
    numWashings: 1,
    numAttempts: 1,
    flowmeterDosing: true,
    samplesPerContainer: 1,
    containersPerSample: 1,
    trigger: "time",
    firstSampleNow: true,
    sampleInterval: "01:00",
    numPulses: 1000,
    maxTimeout: "23:00",
    delayedStartEnabled: false,
    delayedStart: "datetime",
    startDateTime: "05.09.2025,10:00",
    delayedNumPulses: 1000,
  },
  {
    isActive: false,
    numContainers: 1,
    inletTubeLength: 10,
    containerVolume: 100,
    sampleVolume: 100,
    tubeDiameter: 1,
    numWashings: 1,
    numAttempts: 1,
    flowmeterDosing: true,
    samplesPerContainer: 1,
    containersPerSample: 1,
    trigger: "time",
    firstSampleNow: true,
    sampleInterval: "01:00",
    numPulses: 1000,
    maxTimeout: "23:00",
    delayedStartEnabled: false,
    delayedStart: "datetime",
    startDateTime: "05.09.2025,10:00",
    delayedNumPulses: 1000,
  },
  {
    isActive: false,
    numContainers: 1,
    inletTubeLength: 10,
    containerVolume: 100,
    sampleVolume: 100,
    tubeDiameter: 1,
    numWashings: 1,
    numAttempts: 1,
    flowmeterDosing: true,
    samplesPerContainer: 1,
    containersPerSample: 1,
    trigger: "time",
    firstSampleNow: true,
    sampleInterval: "01:00",
    numPulses: 1000,
    maxTimeout: "23:00",
    delayedStartEnabled: false,
    delayedStart: "datetime",
    startDateTime: "05.09.2025,10:00",
    delayedNumPulses: 1000,
  },
];

const labels = {
  numContainers: "Число ёмкостей",
  inletTubeLength: "Длина вх. трубки, см",
  containerVolume: "Объём ёмкости, мл",
  sampleVolume: "Объём пробы, мл",
  tubeDiameter: "⌀ трубки внутр., мм",
  numWashings: "Число промывок",
  numAttempts: "Число попыток отбора",
  flowmeterDosing: "Дозировать по расходомеру",
  samplesPerContainer: "Число проб на 1 ёмкость",
  containersPerSample: "Число ёмкостей на 1 пробу",
  trigger: "Триггер отбора",
  firstSampleNow: "Первую пробу отбирать сразу",
  sampleInterval: "Интервал отбора",
  numPulses: "Число импульсов",
  maxTimeout: "Макс. таймаут",
  delayedStartEnabled: "Отложенный старт включен",
  delayedStart: "Тип отложенного старта",
  startDateTime: "Дата, время",
  delayedNumPulses: "Число импульсов",
};

const ProgramsList = ({ onExit, onCreateNew, onEdit }) => {
  const groups = [
    {
      title: "Дозирование",
      icon: <MeasuringCup className="me-2" />,
      keys: ["containersPerSample", "samplesPerContainer"],
    },
    {
      title: "Параметры трубки",
      icon: <Circle className="me-2" />,
      keys: ["inletTubeLength", "tubeDiameter"],
    },
    {
      title: "Триггер отбора",
      icon: <Activity className="me-2" />,
      keys: [
        "trigger",
        "sampleInterval",
        "numPulses",
        "firstSampleNow",
        "maxTimeout",
      ],
    },
    {
      title: "Отложенный старт",
      icon: <ClockHistory className="me-2" />,
      keys: [
        "delayedStartEnabled",
        "delayedStart",
        "startDateTime",
        "delayedNumPulses",
      ],
    },
  ];

  return (
    <React.Fragment>
      <HeaderTwoBtns
        icon="LayoutTextSidebarReverse"
        leftBtnTitle="Создать новую"
        mainTitle="СПИСОК ПРОГРАММ"
        onLeftBtnClk={onCreateNew}
        onRightBtnClk={onExit}
        rightBtnTitle="Выйти в главное меню"
      />
      <Accordion alwaysOpen className="border-2 mx-2">
        {programs.map((program, idx) => {
          const key = idx.toString();
          return (
            <Accordion.Item key={key} className="mb-2" eventKey={key}>
              <Accordion.Header
                className="border border-primary border-2 rounded"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex justify-content-between align-items-center w-100">
                  <div className="d-flex align-items-center">
                    <span className="fw-bold fs-2">
                      Программа отбора № {idx + 1}
                    </span>
                    <span
                      className={`ms-4 fw-bold fs-4 ${
                        program.isActive ? "text-success" : "text-secondary"
                      }`}
                    >
                      {program.isActive ? "● Выполняется" : null}
                    </span>
                  </div>

                  {program.isActive ? (
                    <div onClick={(e) => e.stopPropagation()}>
                      <Button
                        className="me-5 fs-5 fw-bold d-flex align-items-center"
                        onClick={() => onEdit(program)}
                        variant="outline-danger"
                      >
                        <StopFill className="me-2" size={30} />
                        Остановить
                      </Button>
                    </div>
                  ) : (
                    <div onClick={(e) => e.stopPropagation()}>
                      <Button
                        className="me-5 fs-5 fw-bold d-flex align-items-center"
                        onClick={() => onEdit(program)}
                        variant="outline-success"
                      >
                        <PlayFill className="me-2" size={30} />
                        Запустить
                      </Button>
                    </div>
                  )}
                </div>
              </Accordion.Header>

              <Accordion.Body>
                {/* Main Settings */}
                <div className="mb-3">
                  <h6 className="fw-bold border-bottom pb-1 mb-1 d-flex align-items-center">
                    <Gear className="me-2" />
                    Основные настройки
                  </h6>
                  <Row md={2} xs={1}>
                    {Object.entries(program)
                      .filter(
                        ([k]) =>
                          k !== "isActive" &&
                          !groups.some((g) => g.keys.includes(k)),
                      )
                      .map(([k, v]) => (
                        <Col key={k}>
                          <ListGroup variant="flush">
                            <ListGroup.Item className="d-flex justify-content-between align-items-center py-1 px-3 fs-5">
                              <strong className="me-2">
                                {labels[k] || k}:
                              </strong>
                              <strong>{String(v)}</strong>
                            </ListGroup.Item>
                          </ListGroup>
                        </Col>
                      ))}
                  </Row>
                </div>

                {/* Grouped sections */}
                {groups.map((group) => (
                  <div key={group.title} className="mb-3">
                    <h6 className="fw-bold border-bottom pb-1 mb-1 d-flex align-items-center">
                      {group.icon}
                      {group.title}
                    </h6>
                    <Row md={2} xs={1}>
                      {group.keys.map(
                        (k) =>
                          k in program && (
                            <Col key={k}>
                              <ListGroup variant="flush">
                                <ListGroup.Item className="d-flex justify-content-between align-items-center py-1 px-3 fs-5">
                                  <strong className="me-2">
                                    {labels[k] || k}:
                                  </strong>
                                  <strong>{String(program[k])}</strong>
                                </ListGroup.Item>
                              </ListGroup>
                            </Col>
                          ),
                      )}
                    </Row>
                  </div>
                ))}

                <div className="text-center mt-3">
                  <Button
                    className="me-5 px-4 py-2 fw-bold shadow"
                    onClick={() => onEdit(program)}
                    size="lg"
                    variant="primary"
                  >
                    <PencilSquare className="me-3" size={30} />
                    Редактировать
                  </Button>
                  <Button
                    className="px-4 py-2 fw-bold shadow"
                    onClick={() => onEdit(program)}
                    size="lg"
                    variant="danger"
                  >
                    <XCircleFill className="me-3" size={30} />
                    Удалить программу
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </React.Fragment>
  );
};

export default ProgramsList;
