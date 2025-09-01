import React from "react";

import { Button, Col, Container, Image, Row } from "react-bootstrap";
import {
  Cpu,
  Gear,
  LayoutTextSidebarReverse,
  PersonWalking,
  RocketTakeoff,
} from "react-bootstrap-icons";

/* https://images2.imgbox.com/52/16/6OiGvGQr_o.jpg */
import logoEcostab from "../../images/logo.jpg";
import logoEcoinstrument from "../../images/logo_ecoinstrument.png";
import CustomCard from "../common/CustomCard";

const MainMenu = ({ activateSlice }) => {
  const buttonStyle = {
    height: "150px", // uniform height for all buttons
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
      icon: <LayoutTextSidebarReverse className="ms-2 me-2" size={75} />,
      label: "Список программ",
      menu: "ProgramsList",
    },
    {
      icon: <RocketTakeoff className="me-3" size={75} />,
      label: "Статус текущей программы",
      menu: "ProgramStatus",
    },
    {
      icon: <PersonWalking className="me-3" size={75} />,
      label: "Ручное управление",
      menu: "ManualMode",
    },
    {
      icon: <Cpu className="ms-3" size={75} />,
      label: "Аппаратная диагностика",
      menu: "Diagnostics",
    },
    {
      icon: <Gear className="me-4" size={50} />,
      label: "Системные настройки",
      menu: "SystemSettings",
    },
  ];

  return (
    <Container fluid className="vh-100 vw-100 d-flex flex-column bg-light">
      {/* Logo Row */}
      <Row className="mt-3 py-2" style={{ flex: "0 0 70px" }}>
        <Col className="text-center">
          <Image
            alt="Logo"
            src="https://www.ecoinstrument.ru/upload/medialibrary/211/logo_300x56.png"
            style={{ height: "65px" }}
          />
        </Col>
      </Row>

      {/* Buttons Grid */}
      <Row
        className="flex-grow-1 align-items-stretch justify-content-center"
        style={{ padding: "10px" }}
      >
        <Col className="h-100" md={10} xs={12}>
          <Row className="h-100 g-3">
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
