import React from "react";

import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import Stack from "react-bootstrap/Stack";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import HeaderOneBtn from "../common/HeaderOneBtn";
import { RadioBtnsHoriz, TxtNumInputGroup } from "../common/InputGroups";

const ActionBtn = ({ title }) => (
  <Button className="fs-4 fw-bold w-50" id="button-addon1" variant="info">
    {title}
  </Button>
);

const TempCells = ({ temps }) => (
  <Pagination size="lg">
    <Pagination.Item key={"title"}>
      <span className="text-dark">
        Показания датчиков температуры в камере, °C:
      </span>
    </Pagination.Item>
    {temps.map((temp, i) => (
      <Pagination.Item key={i}>{temp}</Pagination.Item>
    ))}
  </Pagination>
);

const menuItems = [
  {
    title: "Отобрать пробу",
    components: [
      TxtNumInputGroup({ title: "№ бутыли:", defaultValue: 10 }),
      TxtNumInputGroup({ title: "Объём пробы, мл:", defaultValue: 1000 }),
      ActionBtn({ title: "Отобрать пробу" }),
    ],
  },
  {
    title: "Насос",
    components: [
      TxtNumInputGroup({ title: "Скорость:", defaultValue: 100 }),
      TxtNumInputGroup({ title: "Время, с:", defaultValue: 30 }),
      RadioBtnsHoriz({
        groupName: "Pump mode",
        options: ["По часовой", "Против часовой"],
      }),
      ActionBtn({ title: "Запустить насос" }),
    ],
  },
  {
    title: "Карусель",
    components: [
      TxtNumInputGroup({ title: "Угол, °:", defaultValue: 180 }),
      TxtNumInputGroup({ title: "№ бутыли:", defaultValue: 1 }),
      RadioBtnsHoriz({
        groupName: "Carousel mode",
        options: ["По углу", "По номеру бутыли"],
      }),
      ActionBtn({ title: "Перевести на заданную позицию" }),
    ],
  },
  {
    title: "Охладитель",
    components: [
      TempCells({ temps: [4.5, 4.2, 3.9] }),
      TxtNumInputGroup({ title: "Целевая температура, °C:", defaultValue: 4 }),
      ActionBtn({ title: "Запустить охладитель" }),
    ],
  },
];

const ManualMode = ({ onExit }) => (
  <React.Fragment>
    <HeaderOneBtn
      btnTitle="Выйти в главное меню"
      mainTitle="РУЧНОЕ УПРАВЛЕНИЕ"
      onBtnClk={onExit}
    />
    <Tabs
      justify
      className="mb-3 fw-bold fs-3"
      defaultActiveKey="Отобрать пробу"
    >
      {menuItems.map(({ title, components }) => (
        <Tab
          key={title}
          className="px-3 fw-bold fs-3 text-start"
          eventKey={title}
          title={title}
        >
          <Stack gap={3}>{components}</Stack>
        </Tab>
      ))}
    </Tabs>
  </React.Fragment>
);

export default ManualMode;
