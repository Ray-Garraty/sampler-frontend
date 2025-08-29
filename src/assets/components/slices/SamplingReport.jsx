import React from "react";

import Table from "react-bootstrap/Table";

import HeaderOneBtn from "../common/HeaderOneBtn";

const samplesReports = [
  {
    isSuccess: true,
    fullBottle: false,
    rinseError: false,
    userAborted: true,
    carouselFault: false,
    pumpFault: false,
    purgeFail: false,
    timedOut: false,
    powerFail: false,
  },
  {
    isSuccess: false,
    fullBottle: false,
    rinseError: false,
    userAborted: true,
    carouselFault: false,
    pumpFault: false,
    purgeFail: false,
    timedOut: false,
    powerFail: false,
  },
];

const NewProgram = ({ onExit }) => (
  <React.Fragment>
    <HeaderOneBtn
      btnTitle="Вернуться назад"
      mainTitle="ОТЧЁТ ПО ПРОБАМ"
      onBtnClk={onExit}
    />
    <Table bordered striped className="my-3 fs-4 fw-bold align-middle">
      <tbody className="border-3 border-dark text-center">
        <td>
          <tr className="border">
            <td className="border">Статус / № пробы</td>
            {samplesReports.map((report, i) => (
              <td key={i}>{i + 1}</td>
            ))}
          </tr>
          <tr className="border">
            <td className="border text-start">Успешно?</td>
            {samplesReports.map(({ isSuccess }, i) => (
              <td key={i}>{isSuccess ? "Да" : "Нет"}</td>
            ))}
          </tr>
          <tr className="border">
            <td className="border text-start">Ёмкость заполнена?</td>
            {samplesReports.map(({ fullBottle }, i) => (
              <td key={i}>{fullBottle ? "Да" : "Нет"}</td>
            ))}
          </tr>
          <tr className="border">
            <td className="border text-start">Ошибка промывка?</td>
            {samplesReports.map(({ rinseError }, i) => (
              <td key={i}>{rinseError ? "Да" : "Нет"}</td>
            ))}
          </tr>
          <tr className="border">
            <td className="border text-start">Ручная отмена?</td>
            {samplesReports.map(({ userAborted }, i) => (
              <td key={i}>{userAborted ? "Да" : "Нет"}</td>
            ))}
          </tr>
          <tr className="border">
            <td className="border text-start">Сбой карусели?</td>
            {samplesReports.map(({ carouselFault }, i) => (
              <td key={i}>{carouselFault ? "Да" : "Нет"}</td>
            ))}
          </tr>
          <tr className="border">
            <td className="border text-start">Сбой насоса?</td>
            {samplesReports.map(({ pumpFault }, i) => (
              <td key={i}>{pumpFault ? "Да" : "Нет"}</td>
            ))}
          </tr>
          <tr className="border">
            <td className="border text-start">Сбой промывки?</td>
            {samplesReports.map(({ purgeFail }, i) => (
              <td key={i}>{purgeFail ? "Да" : "Нет"}</td>
            ))}
          </tr>
          <tr className="border">
            <td className="border text-start">Превышено время?</td>
            {samplesReports.map(({ timedOut }, i) => (
              <td key={i}>{timedOut ? "Да" : "Нет"}</td>
            ))}
          </tr>
          <tr className="border">
            <td className="border text-start">Сбой питания?</td>
            {samplesReports.map(({ powerFail }, i) => (
              <td key={i}>{powerFail ? "Да" : "Нет"}</td>
            ))}
          </tr>
        </td>
      </tbody>
    </Table>
  </React.Fragment>
);

export default NewProgram;
