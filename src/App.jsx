import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Languages from "./Pages/Languages";
import Chat from "./Pages/Chat";
import Error from "./Pages/Error";
import Research from "./Pages/research";
import Careers from "./Pages/careers";
import Company from "./Pages/company";
import Contact from "./Pages/contact";

import "./App.css";

function App() {
  return (
    <div className="min-h-screen">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/language" element={<Languages />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/research" element={<Research />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
