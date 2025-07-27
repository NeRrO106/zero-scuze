import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NoPage from "./pages/NoPage";
import Hero from "./pages/Hero";
import Home from "./pages/Home";
import LogIn from "./features/auth/LogIn";
import Register from "./features/auth/Register";

function App() {
  const isLoggedIn = !!localStorage.getItem("token");
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/home" /> : <Hero />}
          />
          <Route
            path="/home"
            element={isLoggedIn ? <Home /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/home" /> : <LogIn />}
          />
          <Route
            path="/register"
            element={isLoggedIn ? <Navigate to="/home" /> : <Register />}
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
