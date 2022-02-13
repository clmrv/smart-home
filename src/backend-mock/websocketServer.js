const { clearInterval } = require("timers");
const WebSocketServer = require("ws");
const port = 3002;
const updateInterval = 2000;
const server = new WebSocketServer.Server({ port, path: "/api/v1/refresh" });

const updateDevices = (ws, data) => {
  data.forEach((device) => ws.send(JSON.stringify(device)));
};

server.on("connection", (ws) => {
  console.log("new client connected");
  let data = data1;
  const intervalID = setInterval(() => {
    updateDevices(ws, data);
    data = data === data1 ? data2 : data1;
  }, updateInterval);

  ws.on("close", () => {
    console.log("client disconnected");
    clearInterval(intervalID);
  });
});
console.log(`The WebSocket server is running on port ${port}`);

const data1 = [
  {
    type: "bulb",
    id: "1",
    name: "Livingroom light",
    connectionState: "connected",
    isTurnedOn: true,
    brightness: 75,
    color: "yellow",
  },
  {
    type: "bulb",
    id: "2",
    name: "Bedroom light",
    connectionState: "poorConnection",
    isTurnedOn: true,
    brightness: 10,
    color: "blue",
  },
  {
    type: "outlet",
    id: "3",
    name: "PC",
    connectionState: "poorConnection",
    isTurnedOn: false,
    powerConsumption: 0,
  },
  {
    type: "outlet",
    id: "4",
    name: "TV",
    connectionState: "disconnected",
    isTurnedOn: false,
    powerConsumption: 0,
  },
  {
    type: "temperatureSensor",
    id: "5",
    name: "Kitchen thermometer",
    connectionState: "connected",
    temperature: 21,
  },
  {
    type: "temperatureSensor",
    id: "6",
    name: "Garage thermometer with very long name",
    connectionState: "poorConnection",
    temperature: 16,
  },
];

const data2 = [
  {
    type: "bulb",
    id: "1",
    name: "Livingroom light",
    connectionState: "connected",
    isTurnedOn: true,
    brightness: 50,
    color: "white",
  },
  {
    type: "bulb",
    id: "2",
    name: "Bedroom light",
    connectionState: "connected",
    isTurnedOn: false,
    brightness: 0,
    color: "rgb(255,10,15)",
  },
  {
    type: "outlet",
    id: "3",
    name: "PC",
    connectionState: "connected",
    isTurnedOn: true,
    powerConsumption: 230,
  },
  {
    type: "outlet",
    id: "4",
    name: "TV",
    connectionState: "poorConnection",
    isTurnedOn: false,
    powerConsumption: 0,
  },
  {
    type: "temperatureSensor",
    id: "5",
    name: "Kitchen thermometer",
    connectionState: "connected",
    temperature: 20,
  },
  {
    type: "temperatureSensor",
    id: "6",
    name: "Garage thermometer with very long name",
    connectionState: "disconnected",
    temperature: 0,
  },
];
