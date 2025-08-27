import React from "react";

import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import Tabs from "react-bootstrap/Tabs";

const ModbusLog = () => (
  <div>
    <div className="p-1 text-center text-success">
      Состояние USB-RS485: готов / не готов
    </div>
    <div className="p-1 text-center">Лог обмена сообщениями MODBUS:</div>
    <div
      className="p-3 fs-5 scrollspy-example bg-body-tertiary"
      data-bs-smooth-scroll="true"
      data-bs-spy="scroll"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius
      augue iaculis lacus hendrerit, eu tincidunt purus maximus. Suspendisse et
      eros eget leo ultricies hendrerit porttitor eu ligula. Nunc non fermentum
      lorem. Maecenas id magna quis nulla feugiat tempor at vitae dui. Nullam
      interdum ligula leo, id vestibulum quam tempor in Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Integer varius augue iaculis lacus
      hendrerit, eu tincidunt purus maximus. Suspendisse et eros eget leo
      ultricies hendrerit porttitor eu ligula. Nunc non fermentum lorem.
      Maecenas id magna quis nulla feugiat tempor at vitae dui. Nullam interdum
      ligula leo, id vestibulum quam tempor in
    </div>
  </div>
);

const SensorTable = ({ title, values }) => (
  <Table bordered striped>
    <thead>
      <tr className="text-center fs-4">
        <th colSpan={values.length}>{title}</th>
      </tr>
    </thead>
    <tbody>
      <tr className="text-center fs-4">
        {values.map((t, i) => (
          <td key={i}>{t}</td>
        ))}
      </tr>
    </tbody>
  </Table>
);

const menuItems = [
  {
    title: "Датчики",
    components: [
      SensorTable({ title: "t° ЦП", values: [40] }),
      SensorTable({ title: "t° RTC", values: [30] }),
      SensorTable({ title: "t° в камере", values: [4, 4.5, 3.5] }),
      SensorTable({ title: "Расходомер", values: [100] }),
      SensorTable({ title: "Датчик жидкости", values: ["HIGH"] }),
    ],
  },
  { title: "MODBUS", components: [ModbusLog()] },
];

const Diagnostics = ({ returnToMainMenu }) => (
  <React.Fragment>
    <Stack direction="horizontal" gap={1}>
      <h2 className="mx-auto pt-2 text-center fw-bold text-secondary">
        АППАРАТНАЯ ДИАГНОСТИКА
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
    <Tabs justify className="mb-3 fw-bold fs-3" defaultActiveKey="Датчики">
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

export default Diagnostics;
