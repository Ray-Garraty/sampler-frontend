import React, { useState } from "react";

import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Stack,
  Table,
} from "react-bootstrap";
import {
  Bell,
  CalendarDate,
  ClipboardData,
  Cpu,
  Diagram3,
  Moisture,
  Pen,
  People,
  Tools,
  XSquare,
} from "react-bootstrap-icons";

import HeaderOneBtn from "../common/HeaderOneBtn";

const settings = [
  {
    title: "Дата и время",
    icon: <CalendarDate className="me-3" color="brown" size={40} />,
  },
  {
    title: "Сетевые подключения",
    icon: <Diagram3 className="me-3" color="seagreen" size={40} />,
  },
  {
    title: "Калибровка насоса",
    icon: <Moisture className="me-3" color="blue" size={40} />,
  },
  {
    title: "Калибровка расходомера",
    icon: <Tools className="me-3" color="purple" size={40} />,
  },
  {
    title: "Пользователи и пароли",
    icon: <People className="me-3" color="crimson" size={40} />,
  },
  {
    title: "Обновление прошивки",
    icon: <Cpu className="me-3" color="teal" size={40} />,
  },
  {
    title: "Напоминания о ТО",
    icon: <Bell className="me-3" color="goldenrod" size={40} />,
  },
  {
    title: "Системный лог",
    icon: <ClipboardData className="me-3" color="slateblue" size={40} />,
  },
];

const SystemSettings = ({ onExit }) => {
  const [show, setShow] = useState(false);
  const [activeSetting, setActiveSetting] = useState(null);

  const handleOpen = (setting) => {
    setActiveSetting(setting);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const renderModalContent = () => {
    if (!activeSetting) return null;

    switch (activeSetting.title) {
      case "Дата и время":
        return (
          <Form className="fs-4 fw-bold">
            <Form.Group className="mb-3">
              <Form.Label>Дата</Form.Label>
              <Form.Control
                className="fs-4 fw-bold"
                defaultValue="2025-09-03"
                type="date"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Время</Form.Label>
              <Form.Control
                className="fs-4 fw-bold"
                defaultValue="12:00"
                type="time"
              />
            </Form.Group>
            <Button className="fw-bold fs-4" size="lg" variant="primary">
              Сохранить
            </Button>
          </Form>
        );

      case "Сетевые подключения":
        return (
          <React.Fragment>
            <Form.Group className="mb-3 fw-bold fs-4">
              <Form.Label>Выберите порт</Form.Label>
              <Form.Select className="mb-3 fw-bold fs-4">
                <option>USB0</option>
                <option>USB1</option>
                <option>USB2</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label className="mb-3 fw-bold fs-4">
                Мониторинг порта
              </Form.Label>
              <Form.Control
                readOnly
                as="textarea"
                className="mb-3 fw-bold fs-4"
                rows={8}
                value="> Данные с порта..."
              />
            </Form.Group>
          </React.Fragment>
        );

      case "Калибровка насоса":
        return (
          <div className="d-grid gap-2">
            <Button className="fw-bold fs-3 py-3" variant="danger">
              Сбросить калибровку
            </Button>
            <Button className="fw-bold fs-3 py-3" variant="primary">
              Калибровка по объёму
            </Button>
            <Button className="fw-bold fs-3 py-3" variant="success">
              Калибровка по расходомеру
            </Button>
          </div>
        );

      case "Калибровка расходомера":
        return (
          <Form>
            <Form.Group className="mb-3 fw-bold fs-4">
              <Form.Label>Заданный объём (мл)</Form.Label>
              <Form.Control
                className="fw-bold fs-4"
                placeholder="Введите объём"
                type="number"
              />
            </Form.Group>
            <Form.Group className="mb-3 fw-bold fs-4">
              <Form.Label>Фактический объём (мл)</Form.Label>
              <Form.Control
                className="fw-bold fs-4"
                placeholder="Введите объём"
                type="number"
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button className="fw-bold fs-3 py-3" variant="primary">
                Запустить калибровку
              </Button>
              <Button className="fw-bold fs-3 py-3" variant="success">
                Сохранить и закрыть
              </Button>
            </div>
          </Form>
        );

      case "Пользователи и пароли":
        return (
          <Table bordered hover>
            <thead className="fs-4 text-center">
              <tr>
                <th className="text-primary">Пользователь</th>
                <th className="text-primary">Группа прав доступа</th>
                <th className="text-primary">Изменить</th>
              </tr>
            </thead>
            <tbody className="fw-bold fs-4">
              <tr>
                <td>Admin</td>
                <td>Администратор</td>
                <td className="text-center">
                  <Button>
                    <Pen size={32} />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>User1</td>
                <td>Простой пользователь</td>
                <td className="text-center">
                  <Button>
                    <Pen size={32} />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Guest</td>
                <td>Гость</td>
                <td className="text-center">
                  <Button>
                    <Pen size={32} />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        );

      case "Обновление прошивки":
        return (
          <Form>
            <p className="text-center">
              <Form.Group className="mb-3 fw-bold fs-4">
                <Form.Label>Выберите файл с прошивкой:</Form.Label>
                <Form.Control
                  className="fw-bold fs-4 border-primary"
                  type="file"
                />
              </Form.Group>
              <Button className="fw-bold fs-4" variant="warning">
                Обновить прошивку
              </Button>
            </p>
          </Form>
        );

      case "Напоминания о ТО":
        return (
          <Form>
            <Form.Check
              className="mb-3 fw-bold fs-4"
              id="reminderCheck"
              label="Включить напоминание"
              type="checkbox"
            />
            <Form.Group className="mb-3 fw-bold fs-4">
              <Stack className="mx-2 my-3" direction="horizontal" gap={1}>
                <Form.Label>Интервал (дней):</Form.Label>
                <Form.Control
                  className="w-50 ms-3 mb-2 fw-bold fs-4"
                  defaultValue={30}
                  type="number"
                />
              </Stack>
            </Form.Group>
            <p className="text-center">
              <Button className="fw-bold fs-4" variant="primary">
                Сохранить
              </Button>
            </p>
          </Form>
        );

      case "Системный лог":
        return (
          <Form.Control
            readOnly
            as="textarea"
            className="fs-5"
            rows={12}
            style={{ fontFamily: "monospace" }}
            value={`29.08.2025, 09:50: питание включено
29.08.2025, 08:03: сбой насоса
28.08.2025, 09:22: предупреждение о необходимости замены трубки насоса
28.08.2025, 05:20: сбой карусели
27.08.2025, 12:08: низкое напряжение батарейки RTC
26.08.2025, 12:08: выполнен вход в систему пользователя 'Guest'
25.08.2025, 09:32: приостановлена программа отбора № 3
24.08.2025, 10:00: отобрана проба № 2
24.08.2025, 09:00: отобрана проба № 1
24.08.2025, 07:02: запущена программа отбора № 3
20.08.2025, 07:03: температурный режим в главной камере нормализован
20.08.2025, 05:00: сбой температурного режима в главной камере`}
          />
        );

      default:
        return "Нет данных";
    }
  };

  return (
    <React.Fragment>
      <HeaderOneBtn
        btnTitle="Выйти в главное меню"
        icon="Gear"
        mainTitle="СИСТЕМНЫЕ НАСТРОЙКИ"
        onBtnClk={onExit}
      />
      <Container fluid className="p-2" style={{ maxWidth: "1024px" }}>
        <style>{`
        .custom-menu-btn:active {
          background-color: #e7f1ff !important;
        }
        hr.divider {
          border-top: 2px solid #dee2e6;
          margin: 0.5rem 0;
        }
      `}</style>

        <Row className="g-2">
          {settings.map((setting, idx) => (
            <React.Fragment key={idx}>
              <Col md={6} xs={12}>
                <Card
                  className="shadow-sm h-100"
                  style={{ minHeight: "150px" }}
                >
                  <Card.Body className="d-flex align-items-center">
                    <Button
                      className="w-100 py-4 fs-2 fw-bold d-flex align-items-center justify-content-start shadow-sm custom-menu-btn"
                      onClick={() => handleOpen(setting)}
                      variant="light"
                    >
                      {setting.icon}
                      {setting.title}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </React.Fragment>
          ))}
        </Row>

        <Modal centered scrollable onHide={handleClose} show={show} size="lg">
          <Modal.Header>
            <Modal.Title className="fs-2 fw-bold mx-auto">
              {activeSetting ? activeSetting.title : ""}
            </Modal.Title>
            <XSquare className="text-danger" onClick={handleClose} size={50} />
          </Modal.Header>
          <Modal.Body style={{ fontSize: "1.2rem" }}>
            {renderModalContent()}
          </Modal.Body>
        </Modal>
      </Container>
    </React.Fragment>
  );
};

export default SystemSettings;
