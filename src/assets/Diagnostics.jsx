import React from "react";

import CloseButton from "react-bootstrap/CloseButton";

const Diagnostics = ({ returnToMainMenu }) => (
  <React.Fragment>
    <h3>Аппаратная диагностика</h3>
    <CloseButton onClick={returnToMainMenu} />
  </React.Fragment>
);

export default Diagnostics;
