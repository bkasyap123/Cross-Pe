import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../workers/api.js";

function Dashboard() {
  const [data, setData] = useState({ email: "", phone: "" });
  const navigate = useNavigate();
  useEffect(() => {
    api
      .get("/dashboard")
      .then((res) => {
        // setData({
        //   email: res.data.User.email || res.data.User[0].email,
        //   phone: res.data.User.phone || res.data.User[0].phone,
        // });
        setData({
          email: res.data?.User.email || res.data?.User[0].email,
          phone: res.data?.User.phone || res.data?.User[0].phone,
        });
        console.log(res.data);
      })
      .catch((err) => {
        err.response.data === "Unauthorized User" ? navigate("/login") : "";
      });
  }, []);
  return (
    <div className="text-center">
      <h1 className="text-red-600">Dashboard</h1>
      <h2>Email: {data?.email}</h2>
      <h2>Phone: {data?.phone}</h2>
    </div>
  );
}

export default Dashboard;