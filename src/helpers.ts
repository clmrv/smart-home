import { API } from "./constants";
import { SmartDevice, SmartDeviceDetails } from "./model";

export const isTheSameDevice = (
  device1: SmartDevice | SmartDeviceDetails,
  device2: SmartDevice | SmartDeviceDetails
) => device1.id === device2.id;

export const fetchDeviceDetails = (
  id: string,
  callback: (data: SmartDeviceDetails) => void
) => {
  fetch(`${API}/api/v1/devices/${id}`)
    .then((res) => res.json())
    .then((data: SmartDeviceDetails) => callback(data));
};

export const fetchDevices = (callback: (data: SmartDevice[]) => void) => {
  fetch(`${API}/api/v1/devices`)
    .then((res) => res.json())
    .then((data: SmartDevice[]) => callback(data));
};
