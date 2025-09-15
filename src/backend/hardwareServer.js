/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import http from "http";

import { WebSocketServer } from "ws";

const portNum = 8080;
const server = http.createServer();
const wss = new WebSocketServer({ server });

const interval = setInterval(() => {
  wss.clients.forEach((ws) => {
    if (!ws.isAlive) return ws.terminate();
    ws.isAlive = false;
    ws.ping();
  });
}, 30000);
wss.on("close", () => clearInterval(interval));

server.listen(portNum, () =>
  console.log(`WebSocket server running on port ${portNum}`),
);

const sensorsData = {
  temperature: {
    cpu: null,
    rtc: null,
    chamber: [],
  },
  flow: null,
  liquid: null,
};

function heartbeat() { // arrow function not to be used here
  this.isAlive = true;
}

wss.on("connection", (ws) => {
  ws.isAlive = true;
  ws.on("pong", heartbeat);

  console.log("Client connected");

  ws.send(JSON.stringify({ type: "SENSOR_UPDATE", data: sensorsData }));

  ws.on("message", (msg) => {
    try {
      const data = JSON.parse(msg);
      console.log("Received from client:", data);
    } catch (e) {
      console.error("Invalid message:", msg);
    }
  });

  ws.on("close", () => console.log("Client disconnected"));
});

const broadcast = (payload) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(payload);
    }
  });
};

// A temporary stub for debugging
setInterval(() => {
  sensorsData.temperature.cpu = (40 + Math.random() * 5).toFixed(1);
  sensorsData.temperature.rtc = (20 + Math.random() * 5).toFixed(1);
  sensorsData.temperature.chamber = [
    (3.5 + Math.random()).toFixed(1),
    (3.5 + Math.random()).toFixed(1),
    (3.5 + Math.random()).toFixed(1),
  ];
  sensorsData.flow = Math.round(Math.random() * 100);
  sensorsData.liquid = Math.round(Math.random());
  broadcast(JSON.stringify({ type: "SENSOR_UPDATE", data: sensorsData }));
}, 2000);
