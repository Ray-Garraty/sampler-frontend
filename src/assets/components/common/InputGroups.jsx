import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

export const TxtNumInputGroup = ({
  title,
  defaultValue,
  disabledByParent,
  increment,
  min,
  max,
}) => {
  const [val, setVal] = useState(defaultValue);
  const increaseVal = () => {
    const result = val + increment;
    if (val + increment <= max) {
      setVal(result);
    }
  };
  const decreaseVal = () => {
    const result = val - increment;
    if (val - increment >= min) {
      setVal(result);
    }
  };
  return (
    <InputGroup className="w-50 m-1">
      <InputGroup.Text
        className={`fs-4 fw-bold text-${disabledByParent ? "secondary" : "dark"}`}
      >
        {title}
      </InputGroup.Text>
      <Button
        className="fs-4 fw-bold"
        disabled={disabledByParent || val - increment < min}
        onClick={decreaseVal}
        variant={disabledByParent ? "secondary" : "primary"}
      >
        &nbsp;&nbsp;-&nbsp;&nbsp;
      </Button>
      <Form.Control
        aria-describedby="basic-addon1"
        aria-label="Example text with button addon"
        className={`fs-4 fw-bold text-center text-${disabledByParent ? "secondary" : "dark"}`}
        disabled={disabledByParent}
        value={val}
      />
      <Button
        className="fs-4 fw-bold"
        disabled={disabledByParent || val + increment > max}
        onClick={increaseVal}
        variant={disabledByParent ? "secondary" : "primary"}
      >
        &nbsp;&nbsp;+&nbsp;&nbsp;
      </Button>
    </InputGroup>
  );
};

export const RadioBtnsHoriz = ({ groupName, options }) => (
  <ToggleButtonGroup
    className="w-50 m-1"
    defaultValue={options[0]}
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

export const TextWithCheckInput = ({ title }) => (
  <InputGroup className="m-1 w-50">
    <Form.Control className="fw-bold fs-4 text-end" value={title} />
    <InputGroup.Checkbox defaultChecked className="fw-bold fs-4" />
  </InputGroup>
);
