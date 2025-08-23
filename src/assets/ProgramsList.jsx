import React from "react";

import CloseButton from "react-bootstrap/CloseButton";

const ProgramsList = ({ returnToMainMenu }) => (
  <React.Fragment>
    <h3>Редактирование программ</h3>
    <CloseButton onClick={returnToMainMenu} />
  </React.Fragment>
);

export default ProgramsList;
