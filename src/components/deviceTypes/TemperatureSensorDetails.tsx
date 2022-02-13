import React from "react";
import { SmartTemperatureSensor } from "../../model";
import { Styled2ColGrid, StyledInfoLabel } from "./styled";

interface Props {
  device: SmartTemperatureSensor;
}

const TemperatureSensorDetails: React.FC<Props> = ({ device }) => {
  return (
    <Styled2ColGrid>
      <StyledInfoLabel>temperature</StyledInfoLabel>
      <div>{`${device.temperature}°C`}</div>
    </Styled2ColGrid>
  );
};

export default TemperatureSensorDetails;
