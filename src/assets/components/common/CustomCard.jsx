import React from "react";

import Card from "react-bootstrap/Card";

const CustomCard = ({ title, onClickAction }) => (
  <Card
    className="text-center my-2 mx-0 bg-primary text-white"
    onClick={onClickAction}
    style={{ height: "250px" }}
  >
    <div className="my-auto mx-2 fw-bold fs-1">{title}</div>
  </Card>
);

export default CustomCard;
