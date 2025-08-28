import React from "react";

import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const HeaderOneBtn = ({ mainTitle, btnTitle, onBtnClk }) => (
  <Stack className="m-2" direction="horizontal" gap={1}>
    <h3 className="mx-auto pt-2 text-center fw-bold text-secondary">
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
