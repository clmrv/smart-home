export interface SmartDevice {
  type: string; // 'bulb', 'outlet' or 'temperatureSensor';
  id: string;
  name: string;
  connectionState: string; // 'connected', 'disconnected' or 'poorConnection'
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

// SmartDeviceDetails can be SmartBulb, SmartOutlet or SmartTemperatureSensor
export type SmartDeviceDetails =
  | SmartBulb
  | SmartOutlet
  | SmartTemperatureSensor;
