import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Languages from "./Pages/Languages";
import Chat from "./Pages/Chat";
import About from "./Pages/About";
import Error from "./Pages/Error";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/language" element={<Languages />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
