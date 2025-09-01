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
      <TxtNumInputGroup
        key={"№ бутыли:"}
        defaultValue={10}
        increment={1}
        max={24}
        min={1}
        title="№ бутыли:"
      />,
      <TxtNumInputGroup
        key="Объём пробы, мл:"
        defaultValue={1000}
        increment={10}
        max={1000}
        min={10}
        title="Объём пробы, мл:"
      />,
      <ActionBtn key="Отобрать пробу" title="Отобрать пробу" />,
    ],
  },
  {
    title: "Насос",
    components: [
      <TxtNumInputGroup
        key="Скорость:"
        defaultValue={100}
        increment={100}
        max={8000}
        min={100}
        title="Скорость:"
      />,
      <TxtNumInputGroup
        key="Время, с:"
        defaultValue={30}
        increment={10}
        max={6000}
        min={10}
        title="Время, с:"
      />,
      <RadioBtnsHoriz
        key="Pump mode"
        groupName="Pump mode"
        options={["По часовой", "Против часовой"]}
      />,
      <ActionBtn key="Запустить насос" title="Запустить насос" />,
    ],
  },
  {
    title: "Карусель",
    components: [
      <TxtNumInputGroup
        key="Угол, °:"
        defaultValue={180}
        increment={1}
        max={360}
        min={0}
        title="Угол, °:"
      />,
      <TxtNumInputGroup
        key="№ бутыли:"
        defaultValue={1}
        increment={1}
        max={24}
        min={1}
        title="№ бутыли:"
      />,
      RadioBtnsHoriz({
        groupName: "Carousel mode",
        options: ["По углу", "По номеру бутыли"],
      }),
      <ActionBtn
        key="Перевести на заданную позицию"
        title="Перевести на заданную позицию"
      />,
    ],
  },
  {
    title: "Охладитель",
    components: [
      <TempCells key="temps" temps={[4.5, 4.2, 3.9]} />,
      <TxtNumInputGroup
        key="Целевая температура, °C:"
        defaultValue={4}
        increment={0.1}
        max={20}
        min={0}
        title="Целевая температура, °C:"
      />,
      <ActionBtn key="Запустить охладитель" title="Запустить охладитель" />,
    ],
  },
];

const ManualMode = ({ onExit }) => (
  <React.Fragment>
    <HeaderOneBtn
      btnTitle="Выйти в главное меню"
      icon="PersonWalking"
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
