import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../workers/api.js";
// import useAuth from "../authStore/zustAuth.jsx";

function Dashboard() {
  // const [data, setData] = useState({ email: "", phone: "" });
  const navigate = useNavigate();
  // const { isLoggedIn } = useAuth();

  useEffect(() => {
    api
      .get("/dashboard")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        // err.response.data === "Unauthorized User" ? navigate("/login") : "";
        console.log(err);
      });
  }, []);
  return (
    <div className="text-center">
      <h1 className="text-red-600">Dashboard</h1>
      <h2>Email: {data?.email}</h2>
      <h2>Phone: {data?.phone}</h2>
      <h1>Yes {isLoggedIn}</h1>
    </div>
  );
}

export default Dashboard;
