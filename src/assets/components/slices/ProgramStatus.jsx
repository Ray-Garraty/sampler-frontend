import React from "react";

import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Table from "react-bootstrap/Table";

import HeaderTwoBtns from "../common/HeaderTwoBtns";

const programManageButtons = [
  { title: "Запустить", style: "success", onBtnClick: "" },
  { title: "Пауза / возобновить", style: "warning", onBtnClick: "" },
  { title: "Перезапустить", style: "primary", onBtnClick: "" },
  { title: "Завершить", style: "danger", onBtnClick: "" },
];

const ProgramStatus = ({ onViewReport, onExit }) => (
  <React.Fragment>
    <HeaderTwoBtns
      leftBtnTitle="Отчёт по пробам"
      mainTitle="СТАТУС ТЕКУЩЕЙ ПРОГРАММЫ"
      onLeftBtnClk={onViewReport}
      onRightBtnClk={onExit}
      rightBtnTitle="Выйти в главное меню"
    />
    <Stack className="mx-2 my-3" direction="horizontal" gap={2}>
      {programManageButtons.map(({ title, style, onBtnClick }) => (
        <Button
          key="title"
          className="fs-4 fw-bold mx-auto"
          onClick={onBtnClick}
          variant={style}
        >
          {title}
        </Button>
      ))}
    </Stack>
    <Table bordered striped className="my-3 fs-4 fw-bold align-middle">
      <tbody className="border-3 border-dark">
        <tr className="text-center">
          <th colSpan={3}>Сведения об активной программе</th>
          <th colSpan={3}>Сведения о следующей пробе</th>
        </tr>
        <tr className="text-center">
          <th>№</th>
          <th>Статус</th>
          <th>Ожидание</th>
          <th>№ пробы</th>
          <th>№ ёмкости</th>
          <th>Когда отбор?</th>
        </tr>
        <tr className="text-center">
          <td>1</td>
          <td className="text-success">Выполняется</td>
          <td className="text-warning">Не задано</td>
          <td className="">13</td>
          <td className="">12</td>
          <td>Через 45 мин.</td>
        </tr>
      </tbody>
    </Table>
    <Table bordered striped className="my-3 fs-4 fw-bold align-middle">
      <tbody className="border-3 border-dark">
        <tr className="text-center">
          <th>Текущие дата / время</th>
          <th>Программа была запущена</th>
          <th>Будет завершена</th>
        </tr>
        <tr className="text-center">
          <td>{new Date().toLocaleString("ru-RU")}</td>
          <td>{new Date().toLocaleString("ru-RU")}</td>
          <td>{new Date().toLocaleString("ru-RU")}</td>
        </tr>
      </tbody>
    </Table>
    <Table striped className="my-3 fs-4 fw-bold align-middle">
      <tbody className="border-3 border-dark">
        <tr className="text-center">
          <td className="text-primary">Всего попыток отбора: 10</td>
          <td className="text-danger">Пропущенных проб: 2</td>
          <td className="text-success">Осталось к отбору: 5</td>
        </tr>
      </tbody>
    </Table>
  </React.Fragment>
);

export default ProgramStatus;
