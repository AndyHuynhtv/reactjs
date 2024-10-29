import { Navigate, Routes, Route } from "react-router-dom";
import HomeRouter from "./features/Home/router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home/*" element={<HomeRouter />} />
    </Routes>
  );
}

export default App;
