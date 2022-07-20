import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
import { useAuth } from "./context/AuthContext";

function App() {
  let auth = useAuth()

  return (
      <Router>
        <Routes>
          <Route path="/" element={!auth ? <Home /> : <Navigate to="/dashboard" />}/>
          <Route path="/dashboard" element={auth ? <Dashboard /> : <Navigate to="/" />}/>
        </Routes>
      </Router>
  );
}

export default App;
