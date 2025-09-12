import React from "react";

import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import {
  ClipboardData,
  ClipboardPlus,
  LayoutTextSidebarReverse,
  RocketTakeoff,
  XSquare,
} from "react-bootstrap-icons";

const HeaderTwoBtns = ({
  mainTitle,
  icon,
  isLeftBtnDisabled,
  leftBtnTitle,
  onLeftBtnClk,
  onRightBtnClk,
}) => (
  <Stack className="mx-2 my-3" direction="horizontal" gap={1}>
    <Button
      className="fs-3 fw-bold shadow py-2"
      disabled={isLeftBtnDisabled}
      onClick={onLeftBtnClk}
      variant="primary"
    >
      {leftBtnTitle}
    </Button>
    <h2 className="mx-auto pt-2 text-center fw-bold text-secondary">
      {icon === "ClipboardPlus" && <ClipboardPlus className="me-4 mb-1" />}
      {icon === "ClipboardData" && <ClipboardData className="me-4 mb-1" />}
      {icon === "RocketTakeoff" && <RocketTakeoff className="me-4 mb-1" />}
      {icon === "LayoutTextSidebarReverse" && (
        <LayoutTextSidebarReverse className="me-4 mb-1" />
      )}
      {mainTitle}
    </h2>
    <div>
      <XSquare className="text-danger" onClick={onRightBtnClk} size={60} />
    </div>
  </Stack>
);

export default HeaderTwoBtns;
