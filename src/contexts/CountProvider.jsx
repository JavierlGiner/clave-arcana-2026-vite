import { useState } from "react";
import { CountContext } from "./CountContext";

const CountProvider = ({ children }) => {
  const [formattedTempo, setFormattedTempo] = useState("00:00");
  const [isCounting, setIsCounting] = useState(false);

  const updateFormattedTempo = (newtempo) => {
    setFormattedTempo(newtempo);
  };

  const stopCounting = () => {
    setIsCounting(false);
  };

  const startCounting = () => {
    setIsCounting(true);
  };

  return (
    <CountContext.Provider
      value={{
        formattedTempo,
        updateFormattedTempo,
        isCounting,
        stopCounting,
        startCounting,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};

export default CountProvider;
