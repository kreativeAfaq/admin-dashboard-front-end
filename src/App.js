import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Managment from "./pages/Managment";
import ViewManagment from "./pages/ViewManagment";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/managment/:id" element={<Managment />} />
          <Route path="/view/managment/:id" element={<ViewManagment />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
