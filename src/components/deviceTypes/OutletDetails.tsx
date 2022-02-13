import React from "react";
import { SmartOutlet } from "../../model";

interface Props {
  device: SmartOutlet;
}

const OutletDetails: React.FC<Props> = ({ device }) => {
  return (
    <>
      <div>{device.isTurnedOn}</div>
      <div>{device.powerConsumption}</div>
    </>
  );
};

export default OutletDetails;
