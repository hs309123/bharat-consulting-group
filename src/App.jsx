import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import { Route, Routes, Outlet } from "react-router-dom";
import Services from "./Pages/Services";
import Header from "./Components/Header";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<><Header /><Outlet /></>}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
        </Route>
      </Routes>
    </div>
  );
}
