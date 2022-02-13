import React from "react";
import { SmartBulb } from "../../model";
import { Styled2ColGrid, StyledColorBox, StyledInfoLabel } from "./styled";

const status = {
  on: "ON",
  off: "OFF",
};
interface Props {
  device: SmartBulb;
}

const BulbDetails: React.FC<Props> = ({ device }) => {
  return (
    <Styled2ColGrid>
      <StyledInfoLabel>status</StyledInfoLabel>
      <div>{`${device.isTurnedOn ? status.on : status.off}`}</div>

      <StyledInfoLabel>color</StyledInfoLabel>
      <StyledColorBox style={{ backgroundColor: device.color }} />

      <StyledInfoLabel>brightness</StyledInfoLabel>
      <div>{device.brightness}</div>
    </Styled2ColGrid>
  );
};

export default BulbDetails;
