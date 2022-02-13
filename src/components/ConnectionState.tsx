import React from "react";
import { Connection } from "../model";
import {
  Wifi as ConnectedIcon,
  Wifi1 as PoorConnectionIcon,
  WifiOff as DisconnectedIcon,
} from "react-bootstrap-icons";
import { COLORS } from "../constants";

interface Props {
  state: Connection;
  [x: string]: any;
}

const ConnectionState: React.FC<Props> = ({ state, ...props }) => {
  switch (state) {
    case "connected":
      return <ConnectedIcon color={COLORS.GREEN} {...props} />;

    case "poorConnection":
      return <PoorConnectionIcon color={COLORS.YELLOW} {...props} />;

    case "disconnected":
      return <DisconnectedIcon color={COLORS.RED} {...props} />;
  }
};

export default ConnectionState;
