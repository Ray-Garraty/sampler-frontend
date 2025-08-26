import React from "react";

import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const menuItems = ["RS485", "Датчики", "ШД", "Сервопривод", "Пельтье"];

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
      {menuItems.map((item) => (
        <Tab
          key={item}
          className="px-3 fw-bold fs-3 text-center"
          eventKey={item}
          title={item}
        >
          Здесь будут всяческие органы управления
        </Tab>
      ))}
    </Tabs>
  </React.Fragment>
);

export default DebugMenu;
