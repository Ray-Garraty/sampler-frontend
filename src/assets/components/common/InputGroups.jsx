import React, { useState } from "react";

import {
  Button,
  Col,
  Form,
  InputGroup,
  Row,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";

export const NumberInput = ({
  label,
  name,
  min,
  max,
  value,
  onChange,
  step = 1,
}) => (
  <Form.Group as={Row} className="align-items-center mb-2">
    <Form.Label column className="fs-4 fw-bold text-truncate" xs={7}>
      {label}
    </Form.Label>
    <Col xs={5}>
      <InputGroup>
        <Button
          className="px-2 fs-4 fw-bold"
          disabled={value <= min}
          variant="primary"
          onClick={() =>
            onChange({
              target: { name, value: Math.max(min, value - step) },
            })
          }
        >
          −
        </Button>
        <Form.Control
          className="fs-4 fw-bold text-center"
          max={max}
          min={min}
          name={name}
          onChange={onChange}
          step={step}
          type="number"
          value={value}
        />
        <Button
          className="px-2 fs-4 fw-bold"
          disabled={value >= max}
          variant="primary"
          onClick={() =>
            onChange({
              target: { name, value: Math.min(max, Number(value) + step) },
            })
          }
        >
          +
        </Button>
      </InputGroup>
    </Col>
  </Form.Group>
);

export const TxtNumInputGroup = ({
  title,
  defaultValue,
  disabledByParent = false,
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
    <InputGroup
      className="m-2"
      style={{
        height: "40px",
        lineHeight: "1",
        maxWidth: "490px",
      }}
    >
      <InputGroup.Text
        className={`fs-4 fw-bold text-${disabledByParent ? "secondary" : "dark"}`}
        style={{
          lineHeight: "1",
          width: "290px",
        }}
      >
        {title}
      </InputGroup.Text>
      <Button
        className="fs-4 fw-bold"
        disabled={disabledByParent || val - increment < min}
        onClick={decreaseVal}
        variant={disabledByParent ? "secondary" : "primary"}
      >
        &nbsp;-&nbsp;
      </Button>
      <Form.Control
        readOnly
        aria-describedby="basic-addon1"
        aria-label="Example text with button addon"
        className={`fs-4 fw-bold text-center text-${disabledByParent ? "secondary" : "dark"}`}
        disabled={disabledByParent}
        value={val}
        style={{
          lineHeight: "1",
        }}
      />
      <Button
        className="fs-4 fw-bold"
        disabled={disabledByParent || val + increment > max}
        onClick={increaseVal}
        variant={disabledByParent ? "secondary" : "primary"}
      >
        &nbsp;+&nbsp;
      </Button>
    </InputGroup>
  );
};

export const NumInputGroup = ({
  defaultValue,
  disabledByParent = false,
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
    <InputGroup
      className="my-2"
      style={{
        height: "40px",
        lineHeight: "1",
        maxWidth: "200px",
      }}
    >
      <Button
        className="fs-4 fw-bold"
        disabled={disabledByParent || val - increment < min}
        onClick={decreaseVal}
        variant={disabledByParent ? "secondary" : "warning"}
      >
        &nbsp;-&nbsp;
      </Button>
      <Form.Control
        readOnly
        aria-describedby="basic-addon1"
        aria-label="Example text with button addon"
        className={`fs-4 fw-bold text-center text-${disabledByParent ? "secondary" : "dark"}`}
        disabled={disabledByParent}
        value={val}
        style={{
          lineHeight: "1",
        }}
      />
      <Button
        className="fs-4 fw-bold"
        disabled={disabledByParent || val + increment > max}
        onClick={increaseVal}
        variant={disabledByParent ? "secondary" : "warning"}
      >
        &nbsp;+&nbsp;
      </Button>
    </InputGroup>
  );
};

export const RadioBtnsHoriz = ({ groupName, options, width = 50 }) => (
  <ToggleButtonGroup
    className={`w-${width} m-1`}
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
  <InputGroup
    className="m-1"
    style={{
      height: "40px",
      lineHeight: "1",
      maxWidth: "500px",
    }}
  >
    <Form.Control readOnly className="fw-bold fs-4 text-end" value={title} />
    <InputGroup.Checkbox
      defaultChecked
      className="fw-bold fs-4"
      style={{ height: "30px", lineHeight: "1", width: "40px" }}
    />
  </InputGroup>
);
