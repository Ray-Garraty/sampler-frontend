import React from "react";

import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

import HeaderTwoBtns from "../common/HeaderTwoBtns";

const ProgramStatus = ({ onViewReport, onExit }) => (
  <React.Fragment>
    <HeaderTwoBtns
      leftBtnTitle="Отчёт по пробам"
      mainTitle="СТАТУС ТЕКУЩЕЙ ПРОГРАММЫ"
      onLeftBtnClk={onViewReport}
      onRightBtnClk={onExit}
      rightBtnTitle="Выйти в главное меню"
    />
    <Stack className="m-2" direction="horizontal" gap={2}>
      <Button className="fs-4 fw-bold">Запустить программу</Button>
      <Button className="fs-4 fw-bold">Приостановить / возобновить</Button>
      <Button className="fs-4 fw-bold">Перезапустить программу</Button>
      <Button className="fs-4 fw-bold">Завершить программу</Button>
    </Stack>
    <Stack direction="horizontal" gap={1}>
      <div className="ms-3 me-auto p-2 border fs-4 fw-bold">
        {new Date().toLocaleString("ru-RU")}
      </div>
      <div className="ms-3 me-auto p-2 border fs-4 fw-bold">Программа № 1</div>
      <div className="ms-5 p-2 border fs-4 fw-bold">Статус:</div>
      <div className="me-auto p-2 border fs-4 fw-bold">
        <Badge bg="success" className="fs-4 mx-4 py-2">
          Выполняется
        </Badge>
      </div>
    </Stack>
    <Stack direction="horizontal" gap={1}>
      <div className="ms-3 my-2 p-2 border fs-4 fw-bold">
        Выполнение начато:
      </div>
      <div className="p-2 border fs-4 fw-bold">23.08.2025, 10:00</div>
      <div className="ms-4 p-2 border fs-4 fw-bold">Закончено:</div>
      <div className="p-2 border fs-4 fw-bold">24.08.2025, 10:00</div>
    </Stack>
    <Stack direction="horizontal" gap={1}>
      <div className="ms-5 mt-1 p-2 border fs-4 fw-bold">Ожидание:</div>
      <div className="me-auto mt-1 p-2 border fs-4 fw-bold text-secondary">
        не задано
      </div>
    </Stack>
    <Stack direction="horizontal" gap={1}>
      <div className="ms-auto mt-2 p-2 border fs-4 fw-bold text-primary">
        Всего попыток отбора: 10
      </div>
      <div className="mx-2 mt-2 p-2 border fs-4 fw-bold text-danger">
        Пропущенных проб: 2
      </div>
      <div className="me-auto mt-2 p-2 border fs-4 fw-bold text-success">
        Осталось к отбору: 5
      </div>
    </Stack>
    <Stack direction="horizontal" gap={1}>
      <div className="ms-3 my-2 p-2 border fs-4 fw-bold">
        Следующая проба №:
      </div>
      <div className="p-2 border fs-4 fw-bold">11</div>
      <div className="ms-4 p-2 border fs-4 fw-bold">Бутыль №:</div>
      <div className="p-2 border fs-4 fw-bold">11</div>
      <div className="ms-4 p-2 border fs-4 fw-bold">До отбора осталось:</div>
      <div className="p-2 border fs-4 fw-bold">56 минут</div>
    </Stack>
  </React.Fragment>
);

export default ProgramStatus;
