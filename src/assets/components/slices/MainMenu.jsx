import React from "react";

import { Button, Col, Container, Row } from "react-bootstrap";
import {
  Cpu,
  Gear,
  LayoutTextSidebarReverse,
  PersonWalking,
  RocketTakeoff,
} from "react-bootstrap-icons";

import logoEcoinstrument from "../../images/logo_ecoinstrument.png";

const MainMenu = ({ activateSlice }) => {
  const buttonStyle = {
    height: "250px",
    background: "linear-gradient(180deg, #0d6efd 0%, #0a58ca 100%)",
    boxShadow: "0 6px 12px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)",
    transition: "transform 0.15s ease, box-shadow 0.15s ease",
  };

  const buttonHoverStyle = {
    transform: "scale(1.03)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.35), 0 4px 8px rgba(0,0,0,0.25)",
  };

  // Button data
  const buttons = [
    {
      icon: <LayoutTextSidebarReverse className="ms-4 me-2" size={75} />,
      label: "Список программ",
      menu: "ProgramsList",
    },
    {
      icon: <RocketTakeoff className="ms-4 me-2" size={75} />,
      label: "Статус текущей программы",
      menu: "ProgramStatus",
    },
    {
      icon: <PersonWalking className="ms-4 me-2" size={75} />,
      label: "Ручное управление",
      menu: "ManualMode",
    },
    {
      icon: <Gear className="ms-4 me-2" size={75} />,
      label: "Системные настройки",
      menu: "SystemSettings",
    },
  ];

  return (
    <Container fluid className="vh-100 vw-100 d-flex flex-column bg-light">
      <Row
        className="mt-5 mb-3 justify-content-center"
        style={{ flex: "0 0 70px" }}
      >
        <Col className="text-center">
          <img
            alt="logoEcoinstrument"
            src={logoEcoinstrument}
            style={{ height: "75px" }}
          />
        </Col>
      </Row>

      <Row
        className="flex-grow-1 align-items-stretch justify-content-center"
        style={{ padding: "10px" }}
      >
        <Col className="h-100" md={11} xs={16}>
          <Row className="h-100 g-4">
            {buttons.map((btn, idx) => (
              <Col key={btn.label} className="d-flex" xs={idx === 4 ? 12 : 6}>
                <Button
                  className="w-100 flex-fill fw-bold fs-1 d-flex justify-content-center align-items-center rounded-4"
                  onClick={() => activateSlice(btn.menu)}
                  style={buttonStyle}
                  onMouseEnter={(e) =>
                    Object.assign(e.currentTarget.style, buttonHoverStyle)
                  }
                  onMouseLeave={(e) =>
                    Object.assign(e.currentTarget.style, buttonStyle)
                  }
                  onTouchEnd={(e) =>
                    Object.assign(e.currentTarget.style, buttonStyle)
                  }
                  onTouchStart={(e) =>
                    Object.assign(e.currentTarget.style, buttonHoverStyle)
                  }
                >
                  {btn.icon}
                  {btn.label}
                </Button>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainMenu;
