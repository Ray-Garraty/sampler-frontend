import React from "react";

import CloseButton from "react-bootstrap/CloseButton";

const ManualMode = ({ returnToMainMenu }) => (
  <React.Fragment>
    <h3>Ручное управление</h3>
    <CloseButton onClick={returnToMainMenu} />
  </React.Fragment>
);

export default ManualMode;
