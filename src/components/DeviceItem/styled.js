import styled from "@emotion/styled";
import { BREAKPOINTS, COLORS, SHADOW } from "../../constants";
import ConnectionState from "../ConnectionState";
import DeviceIcon from "../DeviceIcon";

export const StyledContainer = styled.div`
  background-color: ${COLORS.WHITE};
  box-shadow: ${SHADOW};
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 1em;
  padding: 1.5em 1.5em;

  ${BREAKPOINTS.tablet} {
    font-size: 1.25rem;
  }

  ${BREAKPOINTS.laptop} {
    font-size: 1.5rem;
  }
`;

export const StyledConnectionState = styled(ConnectionState)`
  position: absolute;
  right: 0;
  top: 0;

  width: 1.25em;
  height: 1.25em;
  padding: 0.75em;
`;

export const StyledDeviceName = styled.div`
  margin: 0 1em;
`;

export const StyledDeviceIcon = styled(DeviceIcon)`
  font-size: 1.25em;
`;
