import React from "react";
import { SmartDevice } from "../../model";

interface Props {
  item: SmartDevice;
  onClick: () => void;
}

export const DeviceItem: React.FC<Props> = ({ item, onClick }) => {
  return (
    <button
      onClick={onClick}
    >{`${item.name} ${item.type} ${item.id} ${item.connectionState}`}</button>
  );
};
