export type Connection = "connected" | "disconnected" | "poorConnection";
export type DeviceType = "bulb" | "outlet" | "temperatureSensor";
export type SmartDeviceDetails =
  | SmartBulb
  | SmartOutlet
  | SmartTemperatureSensor;

export interface SmartDevice {
  type: DeviceType;
  id: string;
  name: string;
  connectionState: Connection;
}

export interface SmartBulb extends SmartDevice {
  type: "bulb";
  isTurnedOn: boolean;
  brightness: number; // <0, 100>
  color: string; // in the CSS formats
}

export interface SmartOutlet extends SmartDevice {
  type: "outlet";
  isTurnedOn: boolean;
  powerConsumption: number; // in watts
}

export interface SmartTemperatureSensor extends SmartDevice {
  type: "temperatureSensor";
  temperature: number; // in Celsius
}
