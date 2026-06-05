import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { AssetsProvider } from "./contexts/AssetContext";
import AssetLoader from "./components/AssetLoader";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AssetsProvider>
      <AssetLoader>
        <App />
      </AssetLoader>
    </AssetsProvider>
  </React.StrictMode>,
);
