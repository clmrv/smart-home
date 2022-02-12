import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { SmartDeviceDetails } from "../../model";
import { setupInteract } from "./helpers";

const draggableClass = "deviceDetailsWindow";

const StyledModal = styled.div`
  position: relative;
  border: 2px solid red;
  padding: 100px;
`;

const StyledCloseButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

interface Props {
  open: boolean;
  onClose: () => void;
  device: SmartDeviceDetails | null;
}

const DeviceDetails: React.FC<Props> = ({ open, onClose, device }) => {
  useEffect(() => {
    setupInteract(draggableClass);
  }, []);

  const StyledWrapper = styled.div`
    display: ${open ? "flex" : "none"};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    justifycontent: center;
    alignitems: center;
  `;

  return (
    <StyledWrapper>
      <StyledModal className={draggableClass}>
        <div>{device?.id}</div>
        <div>{device?.name}</div>
        <div>{device?.type}</div>
        <StyledCloseButton onClick={onClose}>X</StyledCloseButton>
      </StyledModal>
    </StyledWrapper>
  );
};

export default DeviceDetails;
