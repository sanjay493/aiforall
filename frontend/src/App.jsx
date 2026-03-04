import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Architecture from "./pages/Architecture";
import Oracle from "./pages/Oracle";
import Backend from "./pages/Backend";
import Frontend from "./pages/Frontend";
import DevOps from "./pages/DevOps";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="dark bg-gray-900 text-gray-200 min-h-screen">
        <Navbar />
        <div className="p-8 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/oracle" element={<Oracle />} />
            <Route path="/backend" element={<Backend />} />
            <Route path="/frontend" element={<Frontend />} />
            <Route path="/devops" element={<DevOps />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
          </Routes> 
        </div>
      </div>
    </Router>
  );
}

export default App;