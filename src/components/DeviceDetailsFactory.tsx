import React from "react";
import { SmartDeviceDetails } from "../model";
import BulbDetails from "./deviceTypes/BulbDetails";
import OutletDetails from "./deviceTypes/OutletDetails";
import TemperatureSensorDetails from "./deviceTypes/TemperatureSensorDetails";

interface Props {
  device: SmartDeviceDetails;
}

const DeviceDetailsFactory: React.FC<Props> = ({ device }) => {
  switch (device.type) {
    case "bulb":
      return <BulbDetails device={device} />;
    case "outlet":
      return <OutletDetails device={device} />;
    case "temperatureSensor":
      return <TemperatureSensorDetails device={device} />;
    default:
      return null;
  }
};

export default DeviceDetailsFactory;
