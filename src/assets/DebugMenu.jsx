import React from "react";

import CloseButton from "react-bootstrap/CloseButton";

const DebugMenu = ({ returnToMainMenu }) => (
  <React.Fragment>
    <h3>Режим разработчика</h3>
    <CloseButton onClick={returnToMainMenu} />
  </React.Fragment>
);

export default DebugMenu;
