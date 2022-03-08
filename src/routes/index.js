import { BrowserRouter, Routes, Route } from "react-router-dom";
import TheNavbar from "../components/navbar";
import HomePage from "../pages/Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <TheNavbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
