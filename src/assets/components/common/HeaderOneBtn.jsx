import React from "react";

import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { Cpu, Gear, PersonWalking } from "react-bootstrap-icons";

const HeaderOneBtn = ({ mainTitle, btnTitle, onBtnClk, icon }) => (
  <Stack className="m-2" direction="horizontal" gap={1}>
    <h3 className="mx-auto pt-2 text-center fw-bold text-secondary">
      {icon === "PersonWalking" && <PersonWalking className="me-3 mb-1" />}
      {icon === "Cpu" && <Cpu className="me-3 mb-1" />}
      {icon === "Gear" && <Gear className="me-3 mb-1" />}
      {mainTitle}
    </h3>
    <div>
      <Button className="fs-4 fw-bold" onClick={onBtnClk} variant="danger">
        {btnTitle}
      </Button>
    </div>
  </Stack>
);

export default HeaderOneBtn;
