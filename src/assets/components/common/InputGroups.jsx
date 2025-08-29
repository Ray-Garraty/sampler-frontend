import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

export const TxtNumInputGroup = ({ title, defaultValue }) => (
  <InputGroup className="w-50 m-1">
    <InputGroup.Text className="fs-4 fw-bold">{title}</InputGroup.Text>
    <Button className="fs-4 fw-bold" id="button-addon1" variant="primary">
      &nbsp;&nbsp;-&nbsp;&nbsp;
    </Button>
    <Form.Control
      aria-describedby="basic-addon1"
      aria-label="Example text with button addon"
      className="fs-4 fw-bold text-center"
      value={defaultValue}
    />
    <Button className="fs-4 fw-bold" id="button-addon2" variant="primary">
      &nbsp;&nbsp;+&nbsp;&nbsp;
    </Button>
  </InputGroup>
);

export const RadioBtnsHoriz = ({ groupName, options }) => (
  <ToggleButtonGroup
    className="w-50 m-1"
    defaultValue={1}
    name={groupName}
    type="radio"
  >
    {options.map((option) => (
      <ToggleButton
        key={option}
        className="fw-bold fs-4"
        id={option}
        value={option}
        variant="outline-primary"
      >
        {option}
      </ToggleButton>
    ))}
  </ToggleButtonGroup>
);
