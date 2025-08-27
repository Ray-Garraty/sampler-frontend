import React from "react";

import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import Tabs from "react-bootstrap/Tabs";

const RS485Status = () => (
  <div className="p-3">Здесь будет отображаться состояние USB-RS485</div>
);

const ModbusLog = () => (
  <div className="p-3">
    Здесь будет выводиться лог обмена сообщениями MODBUS
  </div>
);

const SensorTable = ({ title, values }) => (
  <Table bordered hover striped>
    <thead>
      <tr className="text-center">
        <th colSpan={values.length}>{title}</th>
      </tr>
    </thead>
    <tbody>
      <tr className="text-center">
        {values.map((t, i) => (
          <td key={i}>{t}</td>
        ))}
      </tr>
    </tbody>
  </Table>
);

const menuItems = [
  { title: "RS485", components: [RS485Status(), ModbusLog()] },
  {
    title: "Датчики",
    components: [
      SensorTable({ title: "t° ЦП", values: [40] }),
      SensorTable({ title: "t° RTC", values: [30] }),
      SensorTable({ title: "t° в хол. камере", values: [4, 4.5, 3.5] }),
      SensorTable({ title: "Датчик жидкости", values: ["HIGH"] }),
      SensorTable({ title: "Расходомер", values: [100] }),
    ],
  },
  { title: "ШД", components: [] },
  { title: "Сервопривод", components: [] },
  { title: "Пельтье", components: [] },
];

const DebugMenu = ({ returnToMainMenu }) => (
  <React.Fragment>
    <Stack direction="horizontal" gap={1}>
      <h2 className="mx-auto pt-2 text-center fw-bold text-secondary">
        РЕЖИМ РАЗРАБОТЧИКА
      </h2>
      <div className="p-3">
        <Button
          className="fs-4 fw-bold"
          onClick={returnToMainMenu}
          variant="danger"
        >
          Выйти в главное меню
        </Button>
      </div>
    </Stack>
    <Tabs
      justify
      className="mb-3 fw-bold fs-3"
      defaultActiveKey="RS485"
      id="uncontrolled-tab-example"
    >
      {menuItems.map(({ title, components }) => (
        <Tab
          key={title}
          className="px-3 fw-bold fs-3 text-start"
          eventKey={title}
          title={title}
        >
          <Stack direction="horizontal" gap={2}>
            {components}
          </Stack>
        </Tab>
      ))}
    </Tabs>
  </React.Fragment>
);

export default DebugMenu;
