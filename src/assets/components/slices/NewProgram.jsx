import React, { useRef, useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Stack from "react-bootstrap/Stack";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

import HeaderTwoBtns from "../common/HeaderTwoBtns";
import { TextWithCheckInput, TxtNumInputGroup } from "../common/InputGroups";

const StartDelayInput = () => {
  const inputRef = useRef(null);
  const [startDelayOptions, setStartDelayOptions] = useState(0);
  const renderDelayOptions = () => {
    const val = inputRef.current.value;
    setStartDelayOptions(Number(val));
  };
  return (
    <React.Fragment>
      <Form.Select
        ref={inputRef}
        className={`m-1 fw-bold fs-4 text-${startDelayOptions ? "primary" : "secondary"}`}
        onChange={renderDelayOptions}
      >
        <option className="fw-bold text-secondary" value={0}>
          Отложенный старт: не выбран (неактивен)
        </option>
        <option className="fw-bold text-primary" value={1}>
          Отложенный старт по дате / времени
        </option>
        <option className="fw-bold text-primary" value={2}>
          Отложенный старт по счётчику импульсов
        </option>
      </Form.Select>
      {startDelayOptions === 1 && (
        <React.Fragment>
          <label className="mx-1 my-auto fw-bold fs-4" htmlFor="myDate">
            Укажите дату:
            <input
              className="mx-1 fw-bold fs-4"
              id="myDate"
              name="delayDate"
              type="date"
            />
          </label>

          <label className="mx-1 my-auto fw-bold fs-4" htmlFor="myTime">
            и время:
            <input
              className="mx-1 fw-bold fs-4"
              id="myTime"
              name="delayTime"
              type="time"
            />
          </label>
        </React.Fragment>
      )}
      {startDelayOptions === 2 && (
        <TxtNumInputGroup
          defaultValue={1000}
          increment={100}
          max={1000000}
          min={100}
          title="Число импульсов:"
        />
      )}
    </React.Fragment>
  );
};

const TimeAlgOptions = () => (
  <InputGroup className="m-1">
    <label className="mx-1 my-auto fw-bold fs-4" htmlFor="myTime">
      Интервал между пробами:
      <input
        className="mx-1 fw-bold fs-4"
        defaultValue="00:10"
        id="myTime"
        name="delayTime"
        type="time"
      />
    </label>
    <InputGroup.Checkbox defaultChecked className="fw-bold fs-4" />
    <Form.Control className="fw-bold fs-4" value="Начинать отбор сразу" />
  </InputGroup>
);

const PulsesAlgOptions = () => (
  <InputGroup className="m-1">
    <TxtNumInputGroup
      defaultValue={10000}
      increment={1000}
      max={1000000}
      min={1000}
      title="Число импульсов:"
    />
    <InputGroup.Checkbox defaultChecked className="fw-bold fs-4" />
    <Form.Control className="fw-bold fs-4" value="Отбор сразу" />
    <InputGroup.Checkbox defaultChecked className="fw-bold fs-4" />
    <label className="mx-1 my-auto fw-bold fs-4" htmlFor="myTime">
      Max время:
      <input
        className="mx-1 fw-bold fs-4"
        defaultValue="00:10"
        id="myTime"
        name="delayTime"
        type="time"
      />
    </label>
  </InputGroup>
);

const TriggerInput = () => {
  const radioRef = useRef(null);
  const [activeOptions, setActiveOptions] = useState(0);
  const options = ["по времени", "по счётчику импульсов"];
  const renderOptions = () => {
    const isFirstChecked = radioRef.current.children[1].checked;
    if (isFirstChecked) {
      setActiveOptions(0);
    } else {
      setActiveOptions(1);
    }
  };

  return (
    <React.Fragment>
      <ToggleButtonGroup
        ref={radioRef}
        className="m-1"
        defaultValue={options[0]}
        name="Trigger selector"
        onChange={renderOptions}
        type="radio"
      >
        <Button className="fw-bold fs-4" variant="outline-dark">
          Выберите триггер отбора:
        </Button>
        {options.map((option) => (
          <ToggleButton
            key={option}
            className="fw-bold fs-4"
            id={option}
            value={option}
            variant="outline-warning"
          >
            {option}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      {activeOptions ? <PulsesAlgOptions /> : <TimeAlgOptions />}
    </React.Fragment>
  );
};

const SamplingAlgorithmInput = () => {
  const radioRef = useRef(null);
  const [activeOptions, setActiveOptions] = useState(0);
  const options = ["много проб в одну ёмкость", "одна проба во много ёмкостей"];
  const renderOptions = () => {
    const isFirstChecked = radioRef.current.children[1].checked;
    if (isFirstChecked) {
      setActiveOptions(0);
    } else {
      setActiveOptions(1);
    }
  };
  return (
    <React.Fragment>
      <ToggleButtonGroup
        ref={radioRef}
        className="m-1"
        defaultValue={options[0]}
        name="Algorithm selector"
        onChange={renderOptions}
        type="radio"
      >
        <Button className="fw-bold fs-4" variant="outline-dark">
          Выберите схему отбора:
        </Button>
        {options.map((option) => (
          <ToggleButton
            key={option}
            className="fw-bold fs-4"
            id={option}
            value={option}
            variant="outline-warning"
          >
            {option}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Stack direction="horizontal" gap={1}>
        <TxtNumInputGroup
          defaultValue={1}
          disabledByParent={activeOptions}
          increment={1}
          max={100}
          min={1}
          title="Проб на одну ёмкость:"
        />
        <TxtNumInputGroup
          defaultValue={1}
          disabledByParent={!activeOptions}
          increment={1}
          max={24}
          min={1}
          title="Ёмкостей на одну пробу:"
        />
      </Stack>
    </React.Fragment>
  );
};

const NewProgram = ({ onExit }) => (
  <React.Fragment>
    <HeaderTwoBtns
      leftBtnTitle="Сохранить программу"
      mainTitle="НОВАЯ ПРОГРАММА"
      onLeftBtnClk={() => console.log("Program saved!")}
      onRightBtnClk={onExit}
      rightBtnTitle="Вернуться к списку"
    />
    <Stack direction="horizontal" gap={1}>
      <TxtNumInputGroup
        defaultValue={12}
        increment={1}
        max={24}
        min={1}
        title="Число ёмкостей"
      />
      <TxtNumInputGroup
        defaultValue={200}
        increment={5}
        max={10000}
        min={10}
        title="Длина трубки подачи, см"
      />
    </Stack>
    <Stack direction="horizontal" gap={1}>
      <TxtNumInputGroup
        defaultValue={500}
        increment={100}
        max={1000}
        min={100}
        title="Объём ёмкости, мл"
      />
      <TxtNumInputGroup
        defaultValue={100}
        increment={50}
        max={1000}
        min={100}
        title="Объём пробы, мл"
      />
    </Stack>
    <Stack direction="horizontal" gap={1}>
      <TxtNumInputGroup
        defaultValue={5}
        increment={1}
        max={50}
        min={1}
        title="⌀ трубки внутр., мм"
      />
      <TxtNumInputGroup
        defaultValue={1}
        increment={1}
        max={3}
        min={1}
        title="Число промывок трубки"
      />
    </Stack>
    <Stack direction="horizontal" gap={1}>
      <TxtNumInputGroup
        defaultValue={1}
        increment={1}
        max={3}
        min={1}
        title="Число попыток отбора"
      />
      <TextWithCheckInput title="Дозирование по внутр. расходомеру" />
    </Stack>
    <SamplingAlgorithmInput />
    <TriggerInput />
    <StartDelayInput />
  </React.Fragment>
);

export default NewProgram;
