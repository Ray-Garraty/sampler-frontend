import React from "react";

import CustomTabs from "../common/CustomTabs";
import HeaderTwoBtns from "../common/HeaderTwoBtns";

const tabs = [
  { title: "Параметры ёмкости", content: "Ввод числа, Ввод объёма" },
  { title: "Параметры трубки", content: "Ввод длины, Выбор типа" },
  {
    title: "Задержка до старта",
    content:
      "Ввод даты и время старта, Ввод счётчика импульсов расходомера перед стартом",
  },
  {
    title: "Схема отбора",
    content:
      "По интервалам времени (ввод интервала + когда брать первую пробу - сразу или после 1-го интервала), По потоку (ввод интервала, выбор оверрайда по времени и ввод времени, + когда брать первую пробу - сразу или после 1-го интервала)",
  },
  {
    title: "Распределение по ёмкостям",
    content:
      "Выбор: 1 проба = 1 ёмкость или нет? Ввод числа проб. Выбор: остановка после последней пробы или вручную. Ввод числа проб на 1 ёмкость. Ввод числа ёмкостей на 1 пробу.",
  },
  { title: "Расходомер вкл. / выкл.", content: "Включен / выключен" },
  { title: "Объём пробы", content: "Ввод объёма пробы" },
  { title: "Промывка", content: "Ввод числа промывок" },
  { title: "Число повторов", content: "Ввод числа повторов при неудаче" },
  { title: "Место отбора", content: "Ввод названия места отбора" },
  { title: "Дополнительно", content: "Отдельное меню Табл. 5 с. 65" },
];

const NewProgram = ({ onExit }) => (
  <React.Fragment>
    <HeaderTwoBtns
      leftBtnTitle="Сохранить программу"
      mainTitle="НОВАЯ ПРОГРАММА"
      onLeftBtnClk={() => console.log("Program saved!")}
      onRightBtnClk={onExit}
      rightBtnTitle="Вернуться к списку"
    />
    <CustomTabs elements={tabs} fontSize="5" />
  </React.Fragment>
);

export default NewProgram;
