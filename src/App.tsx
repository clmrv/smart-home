import React, { useEffect, useReducer } from "react";
import styled from "@emotion/styled";
import DeviceDetails from "./components/DeviceDetails";
import DeviceList from "./components/DeviceList";
import { SmartDeviceDetails } from "./model";
import { COLORS, WEBSOCKET_API } from "./constants";
import { initialState, reducer } from "./store";
import { fetchDeviceDetails, fetchDevices } from "./helpers";

const StyledContainer = styled.div`
  background: linear-gradient(
    to bottom right,
    ${COLORS.PURPLE},
    ${COLORS.PURPLE2}
  );
  min-height: 100vh;
  padding: 0 0.85rem 0.85rem 0.85rem;
`;

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDeviceRefresh = ({ data }: { data: string }) => {
    const refreshedDevice: SmartDeviceDetails = JSON.parse(data);
    dispatch({ type: "refreshedDevice", device: refreshedDevice });
  };

  useEffect(() => {
    fetchDevices((data) => dispatch({ type: "loadedDevices", devices: data }));

    const socket = new WebSocket(`${WEBSOCKET_API}/api/v1/refresh`);
    socket.addEventListener("message", handleDeviceRefresh);
  }, []);

  const handleItemSelection = (id: string) =>
    fetchDeviceDetails(id, (data) =>
      dispatch({ type: "selectedDevice", device: data })
    );

  return (
    <StyledContainer>
      <DeviceList
        devices={state.devices}
        onItemSelection={handleItemSelection}
      />
      <DeviceDetails
        onClose={() => dispatch({ type: "closedModal" })}
        open={state.isModalOpen}
        device={state.selectedDevice}
      />
    </StyledContainer>
  );
};

export default App;
