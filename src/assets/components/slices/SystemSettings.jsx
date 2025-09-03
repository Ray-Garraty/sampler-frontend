import React from "react";

import Accordion from "react-bootstrap/Accordion";

import HeaderOneBtn from "../common/HeaderOneBtn";

const SystemSettings = ({ onExit }) => (
  <React.Fragment>
    <HeaderOneBtn
      btnTitle="Выйти в главное меню"
      icon="Gear"
      mainTitle="СИСТЕМНЫЕ НАСТРОЙКИ"
      onBtnClk={onExit}
    />
    <Accordion>
      <Accordion.Item eventKey={1}>
        <Accordion.Header>
          <div className="ms-3 fw-bold fs-3">Дата и время</div>
        </Accordion.Header>
        <Accordion.Body>Здесь будут настройки</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey={2}>
        <Accordion.Header>
          <div className="ms-3 fw-bold fs-3">Сетевые подключения</div>
        </Accordion.Header>
        <Accordion.Body>Здесь будут настройки</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey={3}>
        <Accordion.Header>
          <div className="ms-3 fw-bold fs-3">Калибровка насоса</div>
        </Accordion.Header>
        <Accordion.Body>
          Сбросить старую калибровку / Калибровка по объёму / Калибровка по
          расходомеру
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey={4}>
        <Accordion.Header>
          <div className="ms-3 fw-bold fs-3">Калибровка расходомера</div>
        </Accordion.Header>
        <Accordion.Body>Здесь будут настройки</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey={5}>
        <Accordion.Header>
          <div className="ms-3 fw-bold fs-3">Пароли и пользователи</div>
        </Accordion.Header>
        <Accordion.Body>Здесь будут настройки</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey={6}>
        <Accordion.Header>
          <div className="ms-3 fw-bold fs-3">Обновление прошивки</div>
        </Accordion.Header>
        <Accordion.Body>Здесь будут настройки</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey={7}>
        <Accordion.Header>
          <div className="ms-3 fw-bold fs-3">
            Напоминание об износе трубки насоса
          </div>
        </Accordion.Header>
        <Accordion.Body>Здесь будут настройки</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey={8}>
        <Accordion.Header>
          <div className="ms-3 fw-bold fs-3">Системный лог</div>
        </Accordion.Header>
        <Accordion.Body>
          События: питание вкл. / Сбой насоса / Сбой карусели / Низкое
          напряжение батарейки RTC / Вход пользователя / Программа запущена,
          приостановлена, возобновлена, завершена / Проба отобрана / Пора
          заменить трубку насоса / Сбой температурного режима / Сбой устранён
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey={9}>
        <Accordion.Header>
          <div className="ms-3 fw-bold fs-3">Лог MODBUS</div>
        </Accordion.Header>
        <Accordion.Body>Здесь будет лог команд и ответов MODBUS</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </React.Fragment>
);

export default SystemSettings;
