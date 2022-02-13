import React, { useEffect, useState } from "react";
import { DeviceItem } from "../DeviceItem";
import { SmartDevice } from "../../model";
import { API } from "../../constants";
import { StyledContainer, StyledDeviceList, StyledHeader } from "./styled";

interface Props {
  onItemSelection: (id: string) => void;
}

const DeviceList: React.FC<Props> = ({ onItemSelection }) => {
  const [devices, setDevices] = useState<SmartDevice[]>([]);

  useEffect(() => {
    fetch(`${API}/api/v1/devices`)
      .then((res) => res.json())
      .then((data: SmartDevice[]) => setDevices(data));
  }, []);

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
