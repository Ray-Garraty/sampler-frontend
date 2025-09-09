/* eslint-disable no-alert */
import React, { useState } from "react";

import {
  Col,
  Form,
  Row,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import {
  Activity,
  Alarm,
  ArrowRight,
  DropletFill,
  MeasuringCup,
  Toggles,
} from "react-bootstrap-icons";

import HeaderTwoBtns from "../common/HeaderTwoBtns";
import { NumberInput } from "../common/InputGroups";

const NewProgram = ({ onExit }) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [formData, setFormData] = useState({
    numContainers: 1,
    inletTubeLength: 10,
    containerVolume: 100,
    sampleVolume: 100,
    tubeDiameter: 1,
    numWashings: 1,
    numAttempts: 1,
    flowmeterDosing: true,
    dosingAlgorithm: "samplesPerContainer",
    samplesPerContainer: 1,
    containersPerSample: 1,
    trigger: "time",
    firstSampleNow: true,
    sampleInterval: "10:00",
    numPulses: 1000,
    maxTimeout: "23:59",
    delayedStartEnabled: false,
    delayedStart: "datetime",
    startDateTime: tomorrow.toISOString().slice(0, 16),
    delayedNumPulses: 1000,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/saveNewProg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.table(data.data);
        alert("Программа сохранена!");
      })
      .catch((error) => {
        console.error("Error saving new program", error);
      });
  };

  return (
    <Form className="mx-3">
      <HeaderTwoBtns
        icon="ClipboardPlus"
        leftBtnTitle="Сохранить программу"
        mainTitle="НОВАЯ ПРОГРАММА"
        onLeftBtnClk={handleSubmit}
        onRightBtnClk={onExit}
        rightBtnTitle="Вернуться к списку"
      />
      <Row>
        {/* LEFT COLUMN */}
        <Col md={6}>
          <NumberInput
            label="Число ёмкостей"
            max={12}
            min={1}
            name="numContainers"
            onChange={handleChange}
            value={formData.numContainers}
          />

          <NumberInput
            label="Объём ёмкости, мл"
            max={1000}
            min={100}
            name="containerVolume"
            onChange={handleChange}
            step={100}
            value={formData.containerVolume}
          />

          <NumberInput
            label="Объём пробы, мл"
            max={1000}
            min={100}
            name="sampleVolume"
            onChange={handleChange}
            step={50}
            value={formData.sampleVolume}
          />

          <NumberInput
            label="Число промывок"
            max={3}
            min={1}
            name="numWashings"
            onChange={handleChange}
            value={formData.numWashings}
          />

          <NumberInput
            label="Число попыток отбора"
            max={3}
            min={1}
            name="numAttempts"
            onChange={handleChange}
            value={formData.numAttempts}
          />

          <ToggleButtonGroup
            className="mb-2 w-100"
            type="checkbox"
            value={formData.flowmeterDosing ? ["flowmeterDosing"] : []}
            onChange={(val) =>
              setFormData({
                ...formData,
                flowmeterDosing: val.includes("flowmeterDosing"),
              })
            }
          >
            <ToggleButton
              className="fs-4 fw-bold flex-fill"
              id="flowmeter-dosing"
              value="flowmeterDosing"
              variant="outline-success"
            >
              <Toggles />
              &nbsp;&nbsp;Дозировать по расходомеру
            </ToggleButton>
          </ToggleButtonGroup>

          {/* DELAYED START BLOCK */}
          <div
            className={`border border-3 border-primary rounded px-2 pt-2  bg-light ${
              !formData.delayedStartEnabled ? "opacity-50" : ""
            }`}
          >
            <ToggleButton
              checked={formData.delayedStartEnabled}
              className="fs-4 fw-bold w-100 mb-2"
              id="delayed-start-toggle"
              type="checkbox"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  delayedStartEnabled: e.currentTarget.checked,
                })
              }
              variant={
                formData.delayedStartEnabled ? "success" : "outline-success"
              }
            >
              Активировать отложенный старт&nbsp;&nbsp;
              <Alarm />
            </ToggleButton>

            <fieldset disabled={!formData.delayedStartEnabled}>
              <ToggleButtonGroup
                className="mb-3 w-100"
                name="delayedStart"
                type="radio"
                value={formData.delayedStart}
                onChange={(val) =>
                  setFormData({ ...formData, delayedStart: val })
                }
              >
                <ToggleButton
                  className="fs-4 fw-bold flex-fill"
                  id="start-datetime"
                  value="datetime"
                  variant="outline-primary"
                >
                  по дате-времени
                </ToggleButton>
                <ToggleButton
                  className="fs-4 fw-bold flex-fill"
                  id="start-pulses"
                  value="pulses"
                  variant="outline-primary"
                >
                  по импульсам
                </ToggleButton>
              </ToggleButtonGroup>

              {formData.delayedStart === "datetime" && (
                <Form.Group as={Row} className="align-items-center mb-2">
                  <Form.Label column className="fs-4 fw-bold" xs={5}>
                    Дата, время:
                  </Form.Label>
                  <Col xs={7}>
                    <Form.Control
                      className="fs-4 fw-bold"
                      name="startDateTime"
                      onChange={handleChange}
                      type="datetime-local"
                      value={formData.startDateTime}
                    />
                  </Col>
                </Form.Group>
              )}

              {formData.delayedStart === "pulses" && (
                <NumberInput
                  label="Число импульсов"
                  max={100000}
                  min={1000}
                  name="delayedNumPulses"
                  onChange={handleChange}
                  step={1000}
                  value={formData.delayedNumPulses}
                />
              )}
            </fieldset>
          </div>
        </Col>

        {/* RIGHT COLUMN */}
        <Col md={6}>
          <NumberInput
            label="Длина вх. трубки, см"
            max={1000}
            min={10}
            name="inletTubeLength"
            onChange={handleChange}
            step={10}
            value={formData.inletTubeLength}
          />

          <NumberInput
            label="⌀ трубки внутр., мм"
            max={100}
            min={1}
            name="tubeDiameter"
            onChange={handleChange}
            value={formData.tubeDiameter}
          />

          {/* DOSING ALGORITHM BLOCK */}
          <div className="border border-3 border-primary rounded p-2 mb-1 bg-light ">
            <Form.Label className="fs-4 fw-bold ms-1 text-center d-block">
              Выберите метод дозирования:
            </Form.Label>
            <ToggleButtonGroup
              className="mb-1 w-100"
              name="dosingMethod"
              type="radio"
              value={formData.dosingAlgorithm}
              onChange={(val) =>
                setFormData({ ...formData, dosingAlgorithm: val })
              }
            >
              <ToggleButton
                className="fs-4 fw-bold ms-2"
                id="manySamplesToOneContainer"
                value="samplesPerContainer"
                variant="outline-primary"
              >
                <DropletFill />
                <DropletFill />
                <DropletFill />
                <ArrowRight />
                <MeasuringCup />
              </ToggleButton>
              <ToggleButton
                className="fs-4 fw-bold"
                id="oneSampleToManyContainers"
                value="containersPerSample"
                variant="outline-primary"
              >
                <DropletFill />
                <ArrowRight />
                <MeasuringCup />
                <MeasuringCup />
                <MeasuringCup />
              </ToggleButton>
            </ToggleButtonGroup>

            {formData.dosingAlgorithm === "samplesPerContainer" ? (
              <NumberInput
                label="Проб на одну ёмкость:"
                max={12}
                min={1}
                name="samplesPerContainer"
                onChange={handleChange}
                value={formData.samplesPerContainer}
              />
            ) : (
              <NumberInput
                label="Ёмкостей на 1 пробу:"
                max={12}
                min={1}
                name="containersPerSample"
                onChange={handleChange}
                value={formData.containersPerSample}
              />
            )}
          </div>
          {/* SAMPLING TRIGGER BLOCK */}
          <div className="border border-3 border-primary rounded p-2 mb-3 mt-2 bg-light ">
            <Form.Label className="fs-4 fw-bold text-center d-block">
              <Activity className="me-3" />
              Выберите триггер отбора:
            </Form.Label>
            <ToggleButtonGroup
              className="mb-2 w-100"
              name="trigger"
              onChange={(val) => setFormData({ ...formData, trigger: val })}
              type="radio"
              value={formData.trigger}
            >
              <ToggleButton
                className="fs-4 fw-bold flex-fill"
                id="trigger-time"
                value="time"
                variant="outline-primary"
              >
                по времени
              </ToggleButton>
              <ToggleButton
                className="fs-4 fw-bold flex-fill"
                id="trigger-pulses"
                value="pulses"
                variant="outline-primary"
              >
                по счётчику импульсов
              </ToggleButton>
            </ToggleButtonGroup>

            <ToggleButtonGroup
              className="mb-2 w-100"
              type="checkbox"
              value={formData.firstSampleNow ? ["firstSampleNow"] : []}
              onChange={(val) =>
                setFormData({
                  ...formData,
                  firstSampleNow: val.includes("firstSampleNow"),
                })
              }
            >
              <ToggleButton
                className="fs-4 fw-bold flex-fill"
                id="first-sample-now"
                value="firstSampleNow"
                variant="outline-success"
              >
                <Toggles />
                &nbsp;&nbsp;Первую пробу отбирать сразу
              </ToggleButton>
            </ToggleButtonGroup>

            {formData.trigger === "time" && (
              <Form.Group as={Row} className="align-items-center mb-2">
                <Form.Label column className="fs-4 fw-bold" xs={6}>
                  Интервал отбора
                </Form.Label>
                <Col xs={6}>
                  <Form.Control
                    className="fs-4 fw-bold"
                    name="sampleInterval"
                    onChange={handleChange}
                    type="time"
                    value={formData.sampleInterval}
                  />
                </Col>
              </Form.Group>
            )}

            {formData.trigger === "pulses" && (
              <React.Fragment>
                <NumberInput
                  label="Число импульсов"
                  max={100000}
                  min={1000}
                  name="numPulses"
                  onChange={handleChange}
                  step={1000}
                  value={formData.numPulses}
                />

                <Form.Group as={Row} className="align-items-center">
                  <Form.Label column className="fs-4 fw-bold" xs={6}>
                    Макс. таймаут
                  </Form.Label>
                  <Col xs={6}>
                    <Form.Control
                      className="fs-4 fw-bold"
                      name="maxTimeout"
                      onChange={handleChange}
                      type="time"
                      value={formData.maxTimeout}
                    />
                  </Col>
                </Form.Group>
              </React.Fragment>
            )}
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default NewProgram;
