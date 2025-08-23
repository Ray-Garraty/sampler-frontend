import React from "react";

import CloseButton from "react-bootstrap/CloseButton";

const ProgramStatus = ({ returnToMainMenu }) => (
  <React.Fragment>
    <h3>Статус текущей программы</h3>
    <CloseButton onClick={returnToMainMenu} />
  </React.Fragment>
);

export default ProgramStatus;
