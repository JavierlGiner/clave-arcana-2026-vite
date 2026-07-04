import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { AssetsProvider } from "./contexts/AssetContext";
import AssetLoader from "./components/AssetLoader";

import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  immediate: true,

  onNeedRefresh() {
    updateSW(true);
  },

  onOfflineReady() {
    console.log("Arcane Code listo para funcionar offline.");
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AssetsProvider>
      <AssetLoader>
        <App />
      </AssetLoader>
    </AssetsProvider>
  </React.StrictMode>,
);
