import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { AuthContext } from "./Context.jsx";
import { useState } from "react";
import Waitlist from "./pages/Waitlist.jsx";
import Clients from "./components/Main/Clients.jsx";
import Dashboardd from "./components/Main/Dashboard.jsx";
import Profile from "./components/Main/Profile.jsx";
import Request from "./components/Main/Requests.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token"));

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/requests" element={<Request />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/clients" element={<Clients />} />
        </Route>
        <Route path="/waitlist" element={<Waitlist />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
