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
          Отложенный старт: не выбран
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
      Интервал отбора (время между пробами):
      <input
        className="mx-1 fw-bold fs-4 p-1 shadow-sm rounded-3"
        defaultValue="00:10"
        id="myTime"
        name="delayTime"
        type="time"
      />
    </label>
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
    <InputGroup.Checkbox
      defaultChecked
      className="fw-bold fs-4"
      style={{
        height: "40px",
        width: "40px",
        lineHeight: "1",
      }}
    />
    <label className="mx-1 my-auto fw-bold fs-4" htmlFor="myTime">
      Макс. интервал времени:
      <input
        className="mx-1 fw-bold fs-4 p-1 shadow-sm rounded-3"
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
      <InputGroup className="m-1">
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
        <InputGroup.Checkbox
          defaultChecked
          className="fw-bold fs-4"
          style={{
            height: "40px",
            width: "40px",
            lineHeight: "1",
          }}
        />
        <Form.Control readOnly className="fw-bold fs-4" value="1-ю сразу" />
      </InputGroup>
      {activeOptions ? <PulsesAlgOptions /> : <TimeAlgOptions />}
    </React.Fragment>
  );
};

const SamplingAlgorithmInput = () => {
  const radioRef = useRef(null);
  const [activeOptions, setActiveOptions] = useState(0);
  const options = ["Неск. проб в одну ёмкость", "Одна проба в неск. ёмкостей"];
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
        className="ms-2 mt-2"
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

const NewProgram = ({ onExit }) => {
  const [bottlesCount, setBottlesCount] = useState(1);
  const [tubeLength, setTubeLength] = useState(200);
  const [bottleVol, setBottleVol] = useState(500);
  const [sampleVol, setSampleVol] = useState(100);
  const [tubeDiam, setTubeDiam] = useState(5);
  const [rinsesCount, setRinsesCount] = useState(1);
  const [triesCount, setTriesCount] = useState(1);
  const [useFlowMeter, setUseFlowMeter] = useState(true);
  const [algorithm, setAlgorithm] = useState("Multiple samples to 1 bottle");
  const [samplesPerBottle, setSamplesPerBottle] = useState(1);
  const [bottlesPerSample, setBottlesPerSample] = useState(1);
  const [trigger, setTrigger] = useState("By timer");
  const [smplTimer, setSmplTimer] = useState("01:00");
  const [takeFirstImmediately, setTakeFirstImmediately] = useState(true);
  const [smplPulsesCount, setSmplPulsesCount] = useState("10000");
  const [smplMaxPeriod, setSmplMaxPeriod] = useState("02:00");
  const [delayMethod, setDelayMethod] = useState(null);
  const [delayDate, setDelayDate] = useState(null);
  const [delayTime, setDelayTime] = useState(null);
  const [delayPulsesCount, setDelayPulsesCount] = useState("20000");

  return (
    <React.Fragment>
      <HeaderTwoBtns
        icon="ClipboardPlus"
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
          title="Число ёмкостей:"
        />
        <TxtNumInputGroup
          defaultValue={200}
          increment={5}
          max={10000}
          min={10}
          title="Длина вх. трубки, см:"
        />
      </Stack>
      <Stack direction="horizontal" gap={1}>
        <TxtNumInputGroup
          defaultValue={500}
          increment={100}
          max={1000}
          min={100}
          title="Объём ёмкости, мл:"
        />
        <TxtNumInputGroup
          defaultValue={100}
          increment={50}
          max={1000}
          min={100}
          title="Объём пробы, мл:"
        />
      </Stack>
      <Stack direction="horizontal" gap={1}>
        <TxtNumInputGroup
          defaultValue={5}
          increment={1}
          max={50}
          min={1}
          title="⌀ трубки внутр., мм:"
        />
        <TxtNumInputGroup
          defaultValue={1}
          increment={1}
          max={3}
          min={1}
          title="Число промывок:"
        />
      </Stack>
      <Stack direction="horizontal">
        <TxtNumInputGroup
          defaultValue={1}
          increment={1}
          max={3}
          min={1}
          title="Число попыток отбора:"
        />
        <TextWithCheckInput title="Дозирование по внутр. расходомеру" />
      </Stack>
      <SamplingAlgorithmInput />
      <TriggerInput />
      <StartDelayInput />
    </React.Fragment>
  );
};

export default NewProgram;
