import React, { useRef, useState } from "react";

import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";

import HeaderTwoBtns from "../common/HeaderTwoBtns";
import { TxtNumInputGroup } from "../common/InputGroups";

const StartDelayInput = () => {
  const inputRef = useRef(null);
  const [startDelayOptions, setStartDelayOptions] = useState(0);
  const renderDelayOptions = () => {
    const val = inputRef.current.value;
    console.log(val);
    setStartDelayOptions(val);
  };
  return (
    <React.Fragment>
      <Form.Select
        ref={inputRef}
        className="m-1 fw-bold fs-4 text-primary"
        onChange={renderDelayOptions}
      >
        <option value={0}>Отложенный старт: выберите вариант</option>
        <option value={1}>Отложенный старт по дате / времени</option>
        <option value={2}>Старт по счётчику импульсов расходомера</option>
      </Form.Select>
      {startDelayOptions === 1 && (
        <React.Fragment>
          <label className="mx-1 my-auto fw-bold fs-4" htmlFor="delayDate">
            Укажите дату:
          </label>
          <input
            className="mx-1 fw-bold fs-4"
            id="myDate"
            name="delayDate"
            type="date"
          />
          <label className="mx-1 my-auto fw-bold fs-4" htmlFor="delayTime">
            и время:
          </label>
          <input
            className="mx-1 fw-bold fs-4"
            id="myDate"
            name="delayTime"
            type="time"
          />
        </React.Fragment>
      )}
      {startDelayOptions === 2 && (
        <TxtNumInputGroup defaultValue="1000" title="Число импульсов:" />
      )}
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
    <TxtNumInputGroup defaultValue="12" title="Число ёмкостей" />
    <TxtNumInputGroup defaultValue="500" title="Объём ёмкости, мл" />
    <TxtNumInputGroup defaultValue="200" title="Длина трубки подачи, см" />
    <TxtNumInputGroup defaultValue="200" title="Внутр. ⌀ трубки, мм" />
    <StartDelayInput />
  </React.Fragment>
);

export default NewProgram;
