import React from "react";

import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const HeaderTwoBtns = ({
  mainTitle,
  leftBtnTitle,
  onLeftBtnClk,
  rightBtnTitle,
  onRightBtnClk,
}) => (
  <Stack className="m-2" direction="horizontal" gap={1}>
    <div className="fs-4 fw-bold">
      <Button className="fs-4 fw-bold" onClick={onLeftBtnClk} variant="primary">
        {leftBtnTitle}
      </Button>
    </div>
    <h3 className="mx-auto pt-2 text-center fw-bold text-secondary">
      {mainTitle}
    </h3>
    <div>
      <Button className="fs-4 fw-bold" onClick={onRightBtnClk} variant="danger">
        {rightBtnTitle}
      </Button>
    </div>
  </Stack>
);

export default HeaderTwoBtns;
