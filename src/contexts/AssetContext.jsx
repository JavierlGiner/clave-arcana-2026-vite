import { createContext, useContext, useState } from "react";

const AssetsContext = createContext();

export const AssetsProvider = ({ children }) => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  return (
    <AssetsContext.Provider
      value={{
        assetsLoaded,
        setAssetsLoaded,
        progress,
        setProgress,
      }}
    >
      {children}
    </AssetsContext.Provider>
  );
};

export const useAssets = () => useContext(AssetsContext);
