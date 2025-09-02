import React from "react";

import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import {
  ClipboardData,
  ClipboardPlus,
  LayoutTextSidebarReverse,
  RocketTakeoff,
} from "react-bootstrap-icons";

const HeaderTwoBtns = ({
  mainTitle,
  icon,
  leftBtnTitle,
  onLeftBtnClk,
  rightBtnTitle,
  onRightBtnClk,
}) => (
  <Stack className="m-2" direction="horizontal" gap={1}>
    <div className="fs-4 fw-bold">
      <Button
        className="fs-4 fw-bold shadow"
        onClick={onLeftBtnClk}
        variant="primary"
      >
        {leftBtnTitle}
      </Button>
    </div>
    <h3 className="mx-auto pt-2 text-center fw-bold text-secondary">
      {mainTitle}
      {icon === "ClipboardPlus" && <ClipboardPlus className="ms-3 mb-1" />}
      {icon === "ClipboardData" && <ClipboardData className="ms-3 mb-1" />}
      {icon === "RocketTakeoff" && <RocketTakeoff className="ms-3 mb-1" />}
      {icon === "LayoutTextSidebarReverse" && (
        <LayoutTextSidebarReverse className="ms-3 mb-1" />
      )}
    </h3>
    <div>
      <Button
        className="fs-4 fw-bold shadow"
        onClick={onRightBtnClk}
        variant="danger"
      >
        {rightBtnTitle}
      </Button>
    </div>
  </Stack>
);

export default HeaderTwoBtns;
