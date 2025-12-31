import { useState } from "react";
import InstallGate from "./components/InstallGate";
import NormalBoard from "./screens/NormalBoard";
import EasyBoard from "./screens/EasyBoard";
import Home from "./screens/Home";
import { TextosProvider } from "./contexts/LanguageContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [skipInstall, setSkipInstall] = useState(false);

  return (
    <TextosProvider>
      {/* INSTALL GATE */}
      {!skipInstall && <InstallGate onContinue={() => setSkipInstall(true)} />}

      {/* APP REAL */}
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
