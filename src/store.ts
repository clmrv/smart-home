import { isTheSameDevice } from "./helpers";
import { SmartDevice, SmartDeviceDetails } from "./model";

interface State {
  isModalOpen: boolean;
  selectedDevice: SmartDeviceDetails | null;
  devices: SmartDevice[];
  loading: boolean;
}

type Actions =
  | { type: "refreshedDevice"; device: SmartDeviceDetails }
  | { type: "selectedDevice"; device: SmartDeviceDetails }
  | { type: "closedModal" }
  | { type: "loadedDevices"; devices: SmartDevice[] };

export const initialState = {
  isModalOpen: false,
  selectedDevice: null,
  devices: [],
  loading: true,
};

export const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "loadedDevices":
      return { ...state, devices: action.devices, loading: false };

    case "refreshedDevice":
      const refreshedDevice = action.device;

      return {
        ...state,
        devices: state.devices.map((device) =>
          isTheSameDevice(device, refreshedDevice)
            ? refreshedDevice
            : { ...device }
        ),
        selectedDevice:
          state.selectedDevice &&
          isTheSameDevice(refreshedDevice, state.selectedDevice)
            ? refreshedDevice
            : state.selectedDevice,
      };

    case "selectedDevice":
      return { ...state, selectedDevice: action.device, isModalOpen: true };

    case "closedModal":
      return { ...state, isModalOpen: false };

    default:
      return state;
  }
};
