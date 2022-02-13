import React from "react";
import { SmartDevice } from "../../model";
import {
  StyledConnectionState,
  StyledContainer,
  StyledDeviceIcon,
  StyledDeviceName,
} from "./styled";
interface Props {
  item: SmartDevice;
  onClick: () => void;
}

export const DeviceItem: React.FC<Props> = ({ item, onClick }) => {
  return (
    <StyledContainer onClick={onClick}>
      <StyledDeviceIcon type={item.type} />
      <StyledDeviceName>{item.name}</StyledDeviceName>
      <StyledConnectionState state={item.connectionState} />
    </StyledContainer>
  );
};
