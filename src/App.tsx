import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import StaleState from "./routes/StaleState";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stale-state" element={<StaleState />} />
      </Routes>
    </BrowserRouter>
  );
}
