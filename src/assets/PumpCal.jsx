import React from "react";

import CloseButton from "react-bootstrap/CloseButton";

const PumpCal = ({ returnToMainMenu }) => (
  <React.Fragment>
    <h3>Калибровка насоса</h3>
    <CloseButton onClick={returnToMainMenu} />
  </React.Fragment>
);

export default PumpCal;
