import React from "react";

import CloseButton from "react-bootstrap/CloseButton";

const SystemSettings = ({ returnToMainMenu }) => (
  <React.Fragment>
    <h3>Системные настройки</h3>
    <CloseButton onClick={returnToMainMenu} />
  </React.Fragment>
);

export default SystemSettings;
