import { useState } from "react";

function usePressedStatus() {
  const [pressedStatus, setPressedStatus] = useState(false);

  const handlePressedStatus = (status) => setPressedStatus(status);

  return { pressedStatus, handlePressedStatus };
};

export default usePressedStatus;
