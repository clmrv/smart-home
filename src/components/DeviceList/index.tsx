import React from "react";
import { DeviceItem } from "../DeviceItem";
import { SmartDevice } from "../../model";
import { StyledContainer, StyledDeviceList, StyledHeader } from "./styled";
import FullscreenLoading from "../FullscreenLoading";

interface Props {
  devices: SmartDevice[];
  onItemSelection: (id: string) => void;
  loading: boolean;
}

const DeviceList: React.FC<Props> = ({ onItemSelection, devices, loading }) => {
  return (
    <StyledContainer>
      <StyledHeader>My devices</StyledHeader>
      {loading ? (
        <FullscreenLoading />
      ) : (
        <StyledDeviceList>
          {devices.map((dev, index) => (
            <DeviceItem
              key={index}
              item={dev}
              onClick={() => onItemSelection(dev.id)}
            />
          ))}
          {devices.length === 0 && "You have no devices"}
        </StyledDeviceList>
      )}
    </StyledContainer>
  );
};

export default DeviceList;
