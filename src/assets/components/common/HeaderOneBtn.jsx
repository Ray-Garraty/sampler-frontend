import React from "react";

import Stack from "react-bootstrap/Stack";
import {
  Cpu,
  Gear,
  PersonWalking,
  Table,
  XSquare,
} from "react-bootstrap-icons";

const HeaderOneBtn = ({ mainTitle, btnTitle, onBtnClk, icon }) => (
  <Stack className="mx-2 my-3" direction="horizontal" gap={1}>
    <h2 className="mx-auto pt-2 text-center fw-bold text-secondary">
      {icon === "PersonWalking" && <PersonWalking className="me-3 mb-1" />}
      {icon === "Cpu" && <Cpu className="me-3 mb-1" />}
      {icon === "Gear" && <Gear className="me-3 mb-1" />}
      {icon === "Table" && <Table className="me-3 mb-1" />}
      {mainTitle}
    </h2>
    <XSquare className="text-danger" onClick={onBtnClk} size={60} />
  </Stack>
);

export default HeaderOneBtn;
