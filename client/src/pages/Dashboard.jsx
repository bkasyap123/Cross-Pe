import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../workers/api.js";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/dashboard")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="text-center">
      <h1 className="text-blue-600">Welcome to Dashboard</h1>
      {/* <h2>Email: {data?.email}</h2>
      <h2>Phone: {data?.phone}</h2>
      <h1>Yes {isLoggedIn}</h1> */}
    </div>
  );
}

export default Dashboard;
