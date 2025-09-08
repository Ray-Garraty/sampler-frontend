import React from "react";

import Table from "react-bootstrap/Table";

import checkImg from "../../images/green_check_32x32.png";
import crossImg from "../../images/red_cross_32x32.png";
import HeaderOneBtn from "../common/HeaderOneBtn";

const reports = [
  {
    isSuccess: true,
    fullBottle: false,
    rinseError: true,
    userAborted: false,
    carouselFault: false,
    pumpFault: true,
    purgeFail: true,
    timedOut: false,
    powerFail: true,
  },
  {
    isSuccess: false,
    fullBottle: true,
    rinseError: false,
    userAborted: true,
    carouselFault: true,
    pumpFault: false,
    purgeFail: false,
    timedOut: true,
    powerFail: false,
  },
  {
    isSuccess: true,
    fullBottle: true,
    rinseError: false,
    userAborted: true,
    carouselFault: true,
    pumpFault: true,
    purgeFail: false,
    timedOut: false,
    powerFail: false,
  },
  {
    isSuccess: true,
    fullBottle: false,
    rinseError: false,
    userAborted: false,
    carouselFault: false,
    pumpFault: false,
    purgeFail: false,
    timedOut: true,
    powerFail: false,
  },
  {
    isSuccess: true,
    fullBottle: false,
    rinseError: false,
    userAborted: false,
    carouselFault: false,
    pumpFault: false,
    purgeFail: false,
    timedOut: true,
    powerFail: false,
  },
  {
    isSuccess: true,
    fullBottle: false,
    rinseError: false,
    userAborted: false,
    carouselFault: false,
    pumpFault: false,
    purgeFail: false,
    timedOut: true,
    powerFail: false,
  },
  {
    isSuccess: true,
    fullBottle: false,
    rinseError: false,
    userAborted: false,
    carouselFault: false,
    pumpFault: false,
    purgeFail: true,
    timedOut: true,
    powerFail: false,
  },
  {
    isSuccess: true,
    fullBottle: false,
    rinseError: false,
    userAborted: true,
    carouselFault: false,
    pumpFault: false,
    purgeFail: false,
    timedOut: true,
    powerFail: false,
  },
  {
    isSuccess: true,
    fullBottle: false,
    rinseError: false,
    userAborted: false,
    carouselFault: false,
    pumpFault: false,
    purgeFail: false,
    timedOut: true,
    powerFail: false,
  },
  {
    isSuccess: false,
    fullBottle: false,
    rinseError: true,
    userAborted: false,
    carouselFault: false,
    pumpFault: false,
    purgeFail: false,
    timedOut: true,
    powerFail: false,
  },
  {
    isSuccess: false,
    fullBottle: false,
    rinseError: true,
    userAborted: false,
    carouselFault: false,
    pumpFault: false,
    purgeFail: false,
    timedOut: true,
    powerFail: false,
  },
  {
    isSuccess: false,
    fullBottle: false,
    rinseError: true,
    userAborted: false,
    carouselFault: false,
    pumpFault: false,
    purgeFail: false,
    timedOut: true,
    powerFail: false,
  },
];

const CheckOrCross = ({ isOK }) => {
  const imgSize = 16;
  if (isOK) {
    return <img alt="OK" height={imgSize} src={checkImg} width={imgSize} />;
  }
  return <img alt="Fail" height={imgSize} src={crossImg} width={imgSize} />;
};

const CrossOrNone = ({ isNotOK }) => {
  const imgSize = 16;
  if (isNotOK) {
    return <img alt="OK" height={imgSize} src={crossImg} width={imgSize} />;
  }
};

const SamplingReport = ({ onExit }) => (
  <React.Fragment>
    <HeaderOneBtn
      btnTitle="Вернуться назад"
      mainTitle="ОТЧЁТ ПО ПРОБАМ"
      onBtnClk={onExit}
    />
    <Table bordered striped className="my-3 fs-4 fw-bold align-middle">
      <tbody className="border-3 border-dark text-center">
        <tr className="border">
          <td className="border col-3">Статус / № пробы</td>
          {reports.map((report, i) => (
            <td key={i} className="border">
              {i + 1}
            </td>
          ))}
        </tr>
        <tr className="border">
          <td className="border">Отобрана?</td>
          {reports.map(({ isSuccess }, i) => (
            <td key={i} className="border">
              <CheckOrCross isOK={isSuccess} />
            </td>
          ))}
        </tr>
        <tr className="border">
          <td className="border">Ёмкость заполнена?</td>
          {reports.map(({ fullBottle }, i) => (
            <td key={i} className="border">
              <CrossOrNone isNotOK={fullBottle} />
            </td>
          ))}
        </tr>
        <tr className="border">
          <td className="border">Ошибка промывки?</td>
          {reports.map(({ rinseError }, i) => (
            <td key={i} className="border">
              <CrossOrNone isNotOK={rinseError} />
            </td>
          ))}
        </tr>
        <tr className="border">
          <td className="border">Ручная отмена?</td>
          {reports.map(({ userAborted }, i) => (
            <td key={i} className="border">
              <CrossOrNone isNotOK={userAborted} />
            </td>
          ))}
        </tr>
        <tr className="border">
          <td className="border">Сбой карусели?</td>
          {reports.map(({ carouselFault }, i) => (
            <td key={i} className="border">
              <CrossOrNone isNotOK={carouselFault} />
            </td>
          ))}
        </tr>
        <tr className="border">
          <td className="border">Сбой насоса?</td>
          {reports.map(({ pumpFault }, i) => (
            <td key={i} className="border">
              <CrossOrNone isNotOK={pumpFault} />
            </td>
          ))}
        </tr>
        <tr className="border">
          <td className="border">Сбой промывки?</td>
          {reports.map(({ purgeFail }, i) => (
            <td key={i} className="border">
              <CrossOrNone isNotOK={purgeFail} />
            </td>
          ))}
        </tr>
        <tr className="border">
          <td className="border">Превышено время?</td>
          {reports.map(({ timedOut }, i) => (
            <td key={i} className="border">
              <CrossOrNone isNotOK={timedOut} />
            </td>
          ))}
        </tr>
        <tr className="border">
          <td className="border">Сбой питания?</td>
          {reports.map(({ powerFail }, i) => (
            <td key={i} className="border">
              <CrossOrNone isNotOK={powerFail} />
            </td>
          ))}
        </tr>
      </tbody>
    </Table>
  </React.Fragment>
);

export default SamplingReport;
