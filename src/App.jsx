import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import NormalBoard from "./screens/NormalBoard";
import EasyBoard from "./screens/EasyBoard";

import "./styles.css";
import { TextosProvider } from "./contexts/LanguageContext";
import PoliticayPrivacidad from "./screens/PoliticayPrivacidad";
import TerminosCondiciones from "./screens/TerminosCondiciones";

function App() {
  return (
    <TextosProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hardgame" element={<NormalBoard />} />
          <Route path="/normalgame" element={<EasyBoard />} />
          <Route path="/privacy" element={<PoliticayPrivacidad />} />
          <Route path="/terms" element={<TerminosCondiciones />} />
        </Routes>
      </Router>
    </TextosProvider>
  );
}

export default App;
