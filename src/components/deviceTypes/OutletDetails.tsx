import React from "react";
import { SmartOutlet } from "../../model";
import { Styled2ColGrid, StyledInfoLabel } from "./styled";

interface Props {
  device: SmartOutlet;
}

const status = {
  on: "ON",
  off: "OFF",
};

const OutletDetails: React.FC<Props> = ({ device }) => {
  return (
    <Styled2ColGrid>
      <StyledInfoLabel>status</StyledInfoLabel>
      <div>{`${device.isTurnedOn ? status.on : status.off}`}</div>

      <StyledInfoLabel>power consumption</StyledInfoLabel>
      <div>{`${device.powerConsumption} V`}</div>
    </Styled2ColGrid>
  );
};

export default OutletDetails;
