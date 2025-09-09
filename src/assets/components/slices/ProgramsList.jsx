/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import React, { useEffect, useState } from "react";

import {
  Accordion,
  Button,
  Col,
  ListGroup,
  Row,
  Spinner,
} from "react-bootstrap";
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

const onStart = (e, progNum, activeN, setActive) => {
  e.stopPropagation();
  const substr1 = `Вы уверены, что хотите запустить программу № ${progNum}?`;
  const substr2 = activeN
    ? `При этом программа №${activeN} будет остановлена!`
    : "";
  if (confirm(substr1 + substr2)) {
    setActive(progNum);
  }
};

const onStop = (e, progNum, setActive) => {
  e.stopPropagation();
  if (confirm(`Вы уверены, что хотите остановить программу №${progNum}?`)) {
    setActive(null);
  }
};

const MainContent = ({ renderList, activeNum, setActivePrN }) => (
  <Accordion alwaysOpen className="border-2 mx-2">
    {renderList.map((program, idx) => {
      const key = idx.toString();
      return (
        <Accordion.Item key={key} className="mb-2" eventKey={key}>
          <Accordion.Header
            className={`border border-3 rounded border-${activeNum === program.num ? "primary" : null}`}
          >
            <div className="d-flex justify-content-between align-items-center w-100">
              <span className="fw-bold fs-2">
                Программа отбора № {program.num} от{" "}
                {program.createdAt.split(",")[0]}
              </span>
              {activeNum === program.num ? (
                <Spinner animation="grow" variant="success" />
              ) : null}
              {activeNum === program.num ? (
                <Button
                  className="me-5 fs-5 fw-bold d-flex align-items-center"
                  onClick={(e) => onStop(e, program.num, setActivePrN)}
                  variant="outline-danger"
                >
                  <StopFill className="me-2" size={30} />
                  Остановить
                </Button>
              ) : (
                <Button
                  className="me-5 fs-5 fw-bold d-flex align-items-center"
                  variant="outline-success"
                  onClick={(e) =>
                    onStart(e, program.num, activeNum, setActivePrN)
                  }
                >
                  <PlayFill className="me-2" size={30} />
                  Запустить
                </Button>
              )}
            </div>
          </Accordion.Header>

          <Accordion.Body>
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
                  .filter(([k]) => k !== "num" && k !== "createdAt")
                  .map(([k, v]) => (
                    <Col key={k}>
                      <ListGroup variant="flush">
                        <ListGroup.Item className="d-flex justify-content-between align-items-center py-1 px-3 fs-5">
                          <strong className="me-2">{labels[k] || k}:</strong>
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
                onClick={() => console.log("Switching to editing mode...")}
                size="lg"
                variant="primary"
              >
                <PencilSquare className="me-3" size={30} />
                Редактировать
              </Button>
              <Button
                className="px-4 py-2 fw-bold shadow"
                onClick={() => console.log("Switching to editing mode...")}
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
);

const ProgramsList = ({ onExit, onCreateNew, onEdit }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [activePrgNum, setActivePrgNum] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/fetchPrograms");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        console.dir(result);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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
      {isLoading ? (
        <div className="text-center">
          <Spinner variant="info" />
        </div>
      ) : (
        <MainContent
          activeNum={activePrgNum}
          renderList={data}
          setActivePrN={setActivePrgNum}
        />
      )}
    </React.Fragment>
  );
};

export default ProgramsList;
