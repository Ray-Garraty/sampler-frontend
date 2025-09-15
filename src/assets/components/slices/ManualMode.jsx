/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from "react";

import {
  Button,
  Col,
  Container,
  Nav,
  Pagination,
  Row,
  Stack,
  Tab,
} from "react-bootstrap";
import {
  CheckCircleFill,
  Circle,
  DropletHalf,
  GearWideConnected,
  Grid,
  SlashCircle,
  Snow,
} from "react-bootstrap-icons";

import HeaderOneBtn from "../common/HeaderOneBtn";
import { RadioBtnsHoriz, TxtNumInputGroup } from "../common/InputGroups";

const ActionBtn = ({ title }) => (
  <Button
    className="ms-2 py-3 fs-4 fw-bold w-75"
    id="button-addon1"
    variant="info"
  >
    {title}
  </Button>
);

const TempCells = ({ temps }) => (
  <Pagination size="lg">
    <Pagination.Item key={"title"}>
      <span className="fs-2 fw-bold text-dark">Темп-ры в камере, °C:</span>
    </Pagination.Item>
    {temps.map((temp, i) => (
      <Pagination.Item key={i} className="my-auto">
        <span className="fs-2 fw-bold">{temp}</span>
      </Pagination.Item>
    ))}
  </Pagination>
);

const ManualMode = ({ onExit }) => {
  const [sensorsData, setSensorsData] = useState({
    temperature: {
      cpu: null,
      rtc: null,
      chamber: [],
    },
    flow: null,
    liquid: null,
  });

  const menuItems = [
    {
      title: "Отбор пробы",
      icon: <DropletHalf size={32} />,
      children: [
        <TxtNumInputGroup
          key="№ бутыли:"
          defaultValue={10}
          increment={1}
          max={24}
          min={1}
          title="№ бутыли:"
        />,
        <TxtNumInputGroup
          key="Объём пробы, мл:"
          defaultValue={1000}
          increment={10}
          max={1000}
          min={10}
          title="Объём пробы, мл:"
        />,
        <ActionBtn key="Отобрать пробу" title="Отобрать пробу" />,
      ],
    },
    {
      title: "Насос",
      icon: <SlashCircle size={32} />,
      children: [
        <p key="flow" className="fs-4 fw-bold">
          Показания расходомера: {sensorsData.flow}
        </p>,
        <p key="liquidSensor" className="fs-4 fw-bold">
          Наличие воды в трубке: {sensorsData.liquid ? "Да" : "Нет"}
        </p>,
        <TxtNumInputGroup
          key="Скорость:"
          defaultValue={100}
          increment={100}
          max={8000}
          min={100}
          title="Скорость:"
        />,
        <TxtNumInputGroup
          key="Время, с:"
          defaultValue={30}
          increment={10}
          max={6000}
          min={10}
          title="Время, с:"
        />,
        <div key="Pump mode" className="ms-1">
          <RadioBtnsHoriz
            groupName="Pump mode"
            options={["По часовой", "Против часовой"]}
            width={75}
          />
        </div>,
        <ActionBtn key="Запустить насос" title="Запустить насос" />,
      ],
    },
    {
      title: "Карусель",
      icon: <GearWideConnected size={32} />,
      children: [
        <TxtNumInputGroup
          key="Угол, °:"
          defaultValue={180}
          increment={1}
          max={360}
          min={0}
          title="Угол, °:"
        />,
        <TxtNumInputGroup
          key="№ бутыли:"
          defaultValue={1}
          increment={1}
          max={24}
          min={1}
          title="№ бутыли:"
        />,
        <div key="Carousel mode" className="ms-1">
          <RadioBtnsHoriz
            groupName="Carousel mode"
            options={["По углу", "По номеру бутыли"]}
            width={75}
          />
        </div>,
        <ActionBtn
          key="Перевести на заданную позицию"
          title="Перевести на заданную позицию"
        />,
      ],
    },
    {
      title: "Охладитель",
      icon: <Snow size={32} />,
      children: [
        <TempCells key="temps" temps={sensorsData.temperature.chamber} />,
        <TxtNumInputGroup
          key="Целевая температура, °C:"
          defaultValue={4}
          increment={0.1}
          max={20}
          min={0}
          title="Целевая темп-ра, °C:"
        />,
        <ActionBtn key="Запустить охладитель" title="Запустить охладитель" />,
      ],
    },
    {
      title: "Прочее",
      icon: <Grid size={32} />,
      rtcTemp: null,
      cpuTemp: null,
      children: [
        <p key="rtcT" className="fs-3 fw-bold">
          Температура RTC: {sensorsData.temperature.rtc}°C
        </p>,
        <p key="cpuT" className="fs-3 fw-bold">
          Температура ЦП: {sensorsData.temperature.cpu}°C
        </p>,
      ],
    },
  ];

  const [key, setKey] = useState(menuItems[0].title);
  const [isConnected, setIsConnected] = useState(false);
  const wsRef = useRef(null);
  const reconnectTimeoutRef = useRef(null);

  useEffect(() => {
    let shouldReconnect = true;

    const connect = () => {
      const ws = new WebSocket("ws://localhost:8080");
      wsRef.current = ws;

      ws.onopen = () => {
        console.log("Connected to WebSocket server");
        setIsConnected(true);
      };

      ws.onmessage = (event) => {
        try {
          const message = JSON.parse(event.data);
          if (message.type === "SENSOR_UPDATE") {
            setSensorsData(message.data);
          }
        } catch (err) {
          console.error("Bad message:", err);
        }
      };

      ws.onclose = () => {
        console.log("Disconnected from WebSocket server");
        setIsConnected(false);
        if (shouldReconnect) {
          reconnectTimeoutRef.current = setTimeout(connect, 2000);
        }
      };

      ws.onerror = (err) => {
        console.error("WebSocket error:", err);
        ws.close();
      };
    };

    connect();

    return () => {
      shouldReconnect = false;
      clearTimeout(reconnectTimeoutRef.current);
      wsRef.current.close();
    };
  }, []);

  const tabStyle = {
    fontSize: "2.0rem",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "0.8rem",
    padding: "1.2rem 1rem",
    width: "100%",
  };

  return (
    <React.Fragment>
      <HeaderOneBtn
        btnTitle="Выйти в главное меню"
        icon="PersonWalking"
        mainTitle="РУЧНОЕ УПРАВЛЕНИЕ"
        onBtnClk={onExit}
      />
      <Container
        fluid
        className="p-2"
        style={{ backgroundColor: "#f8f9fa", height: "100vh" }}
      >
        <Tab.Container
          activeKey={key}
          id="main-menu-tabs"
          onSelect={(k) => setKey(k)}
        >
          <Row className="h-100">
            <Col className="border-end p-0" lg={4} md={3} sm={4} xs={5}>
              <Nav className="flex-column h-100 w-100" variant="pills">
                {menuItems.map(({ title, icon }) => (
                  <Nav.Item
                    key={title}
                    className="border border-primary rounded w-100"
                  >
                    <Nav.Link
                      className="w-100 text-start"
                      eventKey={title}
                      style={tabStyle}
                    >
                      {icon}
                      {title}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>

            <Col className="p-3" lg={8} md={9} sm={8} xs={7}>
              <Tab.Content className="h-100 fs-4">
                {menuItems.map(({ title, children }) => (
                  <React.Fragment key={title}>
                    <Tab.Pane eventKey={title}>
                      <Stack gap={3}>
                        <div
                          className={`text-center ${isConnected ? "text-success" : "text-danger"}`}
                        >
                          {isConnected ? (
                            <React.Fragment>
                              <CheckCircleFill /> Соединение установлено
                            </React.Fragment>
                          ) : (
                            <React.Fragment>
                              <Circle /> Нет соединения
                            </React.Fragment>
                          )}
                        </div>
                        {children}
                      </Stack>
                    </Tab.Pane>
                  </React.Fragment>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </React.Fragment>
  );
};

export default ManualMode;
