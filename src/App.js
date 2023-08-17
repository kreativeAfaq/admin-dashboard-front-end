import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Schools from "./pages/Schools";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
