import React from "react";
import { SmartBulb } from "../../model";

interface Props {
  device: SmartBulb;
}

const BulbDetails: React.FC<Props> = ({ device }) => {
  return (
    <>
      <div>{device.color}</div>
      <div>{device.brightness}</div>
    </>
  );
};

export default BulbDetails;
