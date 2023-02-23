import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "../screens/about";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <nav>

          <Link to="/about">About Page</Link>
        </nav>
        <Routes>

          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
