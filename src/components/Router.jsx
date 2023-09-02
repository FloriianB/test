import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Overview from "../pages/Overview"
import NoPage from "../pages/NoPage"
import Sensors from "../pages/Sensors"

import About from "../pages/About"
import Learning from "../pages/Learning"
import Navbar from "./Navbar";
import '../styles/styles.css'
=======
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

>>>>>>> 6788e6ba75244219330a18cc134b1128ee10fd91

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Navbar />}>
          <Route index element={<Overview />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/sensors" element={<Sensors />} />
     
          <Route path="/sensors" element={<Sensors />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
=======
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
>>>>>>> 6788e6ba75244219330a18cc134b1128ee10fd91
      </Routes>
    </BrowserRouter>
  );
}
