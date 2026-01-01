import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import NormalBoard from "./screens/NormalBoard";
import EasyBoard from "./screens/EasyBoard";

import LangSwitchModal from "./components/LangSwitchModal";
import InstallButton from "./components/InstallButton";

import { TextosProvider } from "./contexts/LanguageContext";

function App() {
  const [langSelected, setLangSelected] = useState(() => {
    return !!localStorage.getItem("idioma");
  });

  const [pwaAccepted, setPwaAccepted] = useState(() => {
    return localStorage.getItem("pwa-gate") === "ok";
  });

  if (!langSelected) {
    return (
      <TextosProvider>
        <LangSwitchModal
          closeLangModalOpen={() => {
            setLangSelected(true);
          }}
        />
      </TextosProvider>
    );
  }
  if (!pwaAccepted) {
    return (
      <TextosProvider>
        <InstallButton
          onContinue={() => {
            localStorage.setItem("pwa-gate", "ok");
            setPwaAccepted(true);
          }}
        />
      </TextosProvider>
    );
  }

  return (
    <TextosProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hardgame" element={<NormalBoard />} />
          <Route path="/normalgame" element={<EasyBoard />} />
        </Routes>
      </Router>
    </TextosProvider>
  );
}

export default App;
