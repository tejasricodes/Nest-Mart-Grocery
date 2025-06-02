import "./index.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login";

function LoginWrapper({ onLogin }) {
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const validEmail = "tejasri@gmail.com";
    const validPassword = "tejasri123";

    if (email === validEmail && password === validPassword) {
      onLogin();
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return <Login onLogin={handleLogin} />;
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <LoginWrapper onLogin={() => setIsAuthenticated(true)} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />
          }
        />
      </Routes>
    </Router>
  );
}
