import React from "react";

import CloseButton from "react-bootstrap/CloseButton";

const ManageProgram = ({ returnToMainMenu }) => (
  <React.Fragment>
    <h3>Пуск / Остановка программы</h3>
    <CloseButton onClick={returnToMainMenu} />
  </React.Fragment>
);

export default ManageProgram;
