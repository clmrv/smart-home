import React, { useEffect } from "react";
import { SmartDeviceDetails } from "../../model";
import { setupInteract } from "./helpers";
import DeviceDetailsFactory from "../DeviceDetailsFactory";
import { StyledCloseButton, StyledModal, StyledWrapper } from "./styled";

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

  return (
    <StyledWrapper style={{ display: open ? "flex" : "none" }}>
      <StyledModal className={draggableClass}>
        <div>{device?.id}</div>
        <div>{device?.name}</div>
        <div>{device?.type}</div>
        <div>{device?.connectionState}</div>
        <StyledCloseButton onClick={onClose}>X</StyledCloseButton>
        {device && <DeviceDetailsFactory device={device} />}
      </StyledModal>
    </StyledWrapper>
  );
};

export default DeviceDetails;
