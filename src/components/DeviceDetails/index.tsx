import React, { useEffect } from "react";
import { SmartDeviceDetails } from "../../model";
import { setupInteract } from "./helpers";
import DeviceDetailsFactory from "../DeviceDetailsFactory";
import {
  StyledCloseButton,
  StyledModal,
  StyledContainer,
  StyledIdText,
  StyledDeviceName,
  StyledDeviceIcon,
  StyledConnectionState,
  IconsWrapper,
} from "./styled";

const draggableClass = "deviceDetailsWindow";

interface Props {
  open: boolean;
  onClose: () => void;
  device: SmartDeviceDetails | null;
}

const DeviceDetails: React.FC<Props> = ({ open, onClose, device }) => {
  useEffect(() => {
    setupInteract(draggableClass);
  }, []);

  const isDeviceConnected = device && device.connectionState !== "disconnected";

  return (
    <StyledContainer style={{ display: open ? "flex" : "none" }}>
      <StyledModal className={draggableClass}>
        <StyledCloseButton onClick={onClose}>X</StyledCloseButton>
        <IconsWrapper>
          {device && (
            <>
              <StyledDeviceIcon type={device.type} />
              <StyledConnectionState state={device.connectionState} />
            </>
          )}
        </IconsWrapper>
        <StyledIdText>{`ID: ${device?.id}`}</StyledIdText>
        <StyledDeviceName>{device?.name}</StyledDeviceName>
        <div style={{ visibility: isDeviceConnected ? "visible" : "hidden" }}>
          <DeviceDetailsFactory device={device} />
        </div>
      </StyledModal>
    </StyledContainer>
  );
};

export default DeviceDetails;
