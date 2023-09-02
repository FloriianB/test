import { BrowserRouter, Route, Routes } from "react-router-dom";
import Overview from "../pages/Overview"
import NoPage from "../pages/NoPage"
import Sensors from "../pages/Sensors"

import About from "../pages/About"
import Learning from "../pages/Learning"
import Navbar from "./Navbar";
import '../styles/styles.css'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Overview />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/sensors" element={<Sensors />} />
     
          <Route path="/sensors" element={<Sensors />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
