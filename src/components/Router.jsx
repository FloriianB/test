import { BrowserRouter, Route, Routes } from "react-router-dom";
import Overview from "../pages/Overview";
import NoPage from "../pages/NoPage";
import Sensors from "../pages/Sensors";
import Ai from "../pages/Ai";
import About from "../pages/About";
import Learning from "../pages/Learning";
import Quiz from "../pages/Quiz";  // Vergiss nicht, Quiz zu importieren, wenn du es noch nicht hast
import Navbar from "./Navbar";
import ModelApp from "../pages/Model";
import DBSCAN from "../pages/DBSCAN";


export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/sensors" element={<Sensors />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/quiz" element={<Quiz />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/model" element={<ModelApp />} />
        <Route path="/DBSCAN" element={<DBSCAN />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
