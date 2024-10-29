import { Routes, Route } from "react-router-dom";
import { AddEdit } from "./pages/AddEdit";
import { HomeDetail } from "./pages/HomeDetail";
import { HomePage } from "./pages/HomePage";

export default function HomeRouter() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path=":id" element={<HomeDetail />} />
      <Route path=":type/:id" element={<AddEdit />} />
    </Routes>
  );
}
