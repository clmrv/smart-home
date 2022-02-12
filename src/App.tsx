import React, { useState } from "react";
import styled from "@emotion/styled";
import DeviceDetails from "./components/DeviceDetails";
import DeviceList from "./components/DeviceList";
import { SmartDeviceDetails } from "./model";

const StyledContainer = styled.div`
  width: 100vw;
  background-color: gray;
  height: 100vh;
`;

const App: React.FC = () => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] =
    useState<SmartDeviceDetails | null>(null);

  const handleItemSelection = async (id: string) => {
    const res = await fetch(`http://localhost:3001/api/v1/devices/${id}`);
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
