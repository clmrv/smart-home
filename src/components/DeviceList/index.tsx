import React, { useEffect, useState } from "react";
import { DeviceItem } from "../DeviceItem";
import { SmartDevice } from "../../model";

interface Props {
  onItemSelection: (id: string) => void;
}

const DeviceList: React.FC<Props> = ({ onItemSelection }) => {
  const [devices, setDevices] = useState<SmartDevice[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/devices")
      .then((res) => res.json())
      .then((data: SmartDevice[]) => setDevices(data));
  }, []);

  return (
    <div>
      <p>My devices</p>
      <div>
        {devices.map((dev, index) => (
          <DeviceItem
            key={index}
            item={dev}
            onClick={() => onItemSelection(dev.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default DeviceList;
