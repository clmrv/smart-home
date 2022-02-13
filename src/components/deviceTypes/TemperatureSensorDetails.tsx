import React from "react";
import { SmartTemperatureSensor } from "../../model";

interface Props {
  device: SmartTemperatureSensor;
}

const TemperatureSensorDetails: React.FC<Props> = ({ device }) => {
  return (
    <>
      <div>{device.temperature}</div>
    </>
  );
};

export default TemperatureSensorDetails;
