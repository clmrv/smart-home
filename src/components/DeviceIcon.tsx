import React from "react";
import { Lightbulb, Outlet, ThermometerHalf } from "react-bootstrap-icons";
import { DeviceType } from "../model";

interface Props {
  type: DeviceType;
  [x: string]: any;
}

const DeviceIcon: React.FC<Props> = ({ type, ...props }) => {
  switch (type) {
    case "bulb":
      return <Lightbulb {...props} />;

    case "outlet":
      return <Outlet {...props} />;

    case "temperatureSensor":
      return <ThermometerHalf {...props} />;
  }
};

export default DeviceIcon;
