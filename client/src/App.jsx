import "./App.css";
import { Routes, Route } from "react-router-dom";
import GoodsPage from "./pages/GoodsPage/GoodsPage";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<GoodsPage />} />
      </Routes>
    </div>
  );
}

export default App;
