import React from "react";

import Card from "react-bootstrap/Card";

const CustomCard = ({ title, setMenu }) => (
  <Card
    className="text-center my-2 mx-0 bg-primary text-white"
    onClick={setMenu}
    style={{ height: "150px" }}
  >
    <div className="mt-4 mx-1 fw-bold fs-2">{title}</div>
  </Card>
);

export default CustomCard;
