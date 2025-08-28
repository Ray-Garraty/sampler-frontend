import React from "react";

import HeaderOneBtn from "../common/HeaderOneBtn.jsx";

const NewProgram = ({ onExit }) => (
  <HeaderOneBtn
    btnTitle="Вернуться назад"
    mainTitle="ОТЧЁТ ПО ПРОБАМ"
    onBtnClk={onExit}
  />
);

export default NewProgram;
