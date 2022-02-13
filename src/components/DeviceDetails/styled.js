import styled from "@emotion/styled";
import { XCircle } from "react-bootstrap-icons";
import { COLORS, BOXSHADOW, BREAKPOINTS } from "../../constants";
import ConnectionState from "../ConnectionState";
import DeviceIcon from "../DeviceIcon";

export const StyledModal = styled.div`
  position: relative;
  background-color: ${COLORS.WHITE};
  box-shadow: ${BOXSHADOW};
  pointer-events: auto;
  border-radius: 1em;
  padding: 1.25em;

  ${BREAKPOINTS.tablet} {
    font-size: 1.25rem;
  }

  ${BREAKPOINTS.laptop} {
    font-size: 1.5rem;
  }
`;

export const StyledCloseButton = styled(XCircle)`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;

  font-size: 1.25em;
  padding: 0.6em;
`;

export const StyledContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  justify-content: center;
  align-items: center;
  pointer-events: none;

  /* chrome dev tools issue with dragging on mobile */
  -ms-touch-action: none;
  touch-action: none;
  & * {
    -ms-touch-action: none;
    touch-action: none;
  }
`;

export const IconsWrapper = styled.div`
  min-width: 10em;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
  margin-bottom: 0.75em;
`;

export const StyledDeviceIcon = styled(DeviceIcon)`
  min-width: 1.25em;
  min-height: 1.25em;
`;

export const StyledConnectionState = styled(ConnectionState)`
  width: 1.25em;
  height: 1.25em;
`;

export const StyledIdText = styled.div`
  color: ${COLORS.LIGHTGRAY};
  font-size: 0.75em;
  font-weight: 500;
`;

export const StyledDeviceName = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0.75em;
`;
