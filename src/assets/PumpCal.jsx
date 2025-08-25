import React from "react";

import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Stack from "react-bootstrap/Stack";

const PumpCal = ({ returnToMainMenu }) => {
  const suppressLinkOpen = (event) => {
    event.preventDefault();
  };
  return (
    <React.Fragment>
      <Stack direction="horizontal" gap={5}>
        <div className="ms-3 my-2 p-2 fs-4 fw-bold">
          <Button className="fs-4 fw-bold" variant="warning">
            Сбросить старую калибровку
          </Button>
        </div>
        <h2 className="mx-auto mt-1 text-center fw-bold">КАЛИБРОВКА НАСОСА</h2>
        <div className="p-2">
          <Button
            className="fs-4 fw-bold"
            onClick={returnToMainMenu}
            variant="danger"
          >
            Выйти в главное меню
          </Button>
        </div>
      </Stack>
      <Nav fill className="fw-bold fs-2" defaultActiveKey="/vol" variant="tabs">
        <Nav.Item>
          <Nav.Link href="/vol" onClick={suppressLinkOpen}>
            По объёму
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">По расходомеру</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="p-3 fs-3">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu
      </div>
    </React.Fragment>
  );
};

export default PumpCal;
