import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Overview from "../pages/Overview";
import NoPage from "../pages/NoPage";
import Sensors from "../pages/Sensors";
import Ai from "../pages/Ai";
import About from "../pages/About";
import Learning from "../pages/Learning";
import Navbar from "./Navbar";


export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/sensors" element={<Sensors />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/sensors" element={<Sensors />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
