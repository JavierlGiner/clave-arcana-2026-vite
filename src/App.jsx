import NormalBoard from "./screens/NormalBoard";
import EasyBoard from "./screens/EasyBoard";
import Home from "./screens/Home";
import { TextosProvider } from "./contexts/LanguageContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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
