import React from "react";
import { SmartBulb } from "../../model";
import { Lightbulb } from "react-bootstrap-icons";

interface Props {
  device: SmartBulb;
}

const BulbDetails: React.FC<Props> = ({ device }) => {
  return (
    <>
      <Lightbulb />
      <div>{device.isTurnedOn}</div>
      <div>{device.color}</div>
      <div>{device.brightness}</div>
    </>
  );
};

export default BulbDetails;
