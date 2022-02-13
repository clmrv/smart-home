import React from "react";
import { DeviceItem } from "../DeviceItem";
import { SmartDevice } from "../../model";
import { StyledContainer, StyledDeviceList, StyledHeader } from "./styled";

interface Props {
  devices: SmartDevice[];
  onItemSelection: (id: string) => void;
}

const DeviceList: React.FC<Props> = ({ onItemSelection, devices }) => {
  return (
    <StyledContainer>
      <StyledHeader>My devices</StyledHeader>
      <StyledDeviceList>
        {devices.map((dev, index) => (
          <DeviceItem
            key={index}
            item={dev}
            onClick={() => onItemSelection(dev.id)}
          />
        ))}
      </StyledDeviceList>
    </StyledContainer>
  );
};

export default DeviceList;
