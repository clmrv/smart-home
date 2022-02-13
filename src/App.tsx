import React, { useState } from "react";
import styled from "@emotion/styled";
import DeviceDetails from "./components/DeviceDetails";
import DeviceList from "./components/DeviceList";
import { SmartDeviceDetails } from "./model";
import { API, COLORS } from "./constants";

const StyledContainer = styled.div`
  background: linear-gradient(
    to bottom right,
    ${COLORS.PURPLE},
    ${COLORS.PURPLE2}
  );
  min-height: 100vh;
  padding: 0 0.85rem;
`;

const App: React.FC = () => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] =
    useState<SmartDeviceDetails | null>(null);

  const handleItemSelection = async (id: string) => {
    const res = await fetch(`${API}/api/v1/devices/${id}`);
    const data: SmartDeviceDetails = await res.json();
    setSelectedDevice(data);
    setIsDetailsModalOpen(true);
  };

  return (
    <StyledContainer>
      <DeviceList onItemSelection={handleItemSelection} />
      <DeviceDetails
        onClose={() => setIsDetailsModalOpen(false)}
        open={isDetailsModalOpen}
        device={selectedDevice}
      />
    </StyledContainer>
  );
};

export default App;
