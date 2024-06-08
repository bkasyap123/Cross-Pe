import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Profile/Sidebar";
import api from "../service/api";
import { AuthContext } from "../Context.jsx";
import Head from "../components/Profile/Head.jsx";

const tabs = ["Dashboard", "Invoices", "Clients", "Analytics", "Referrals"];

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [selected, setSelected] = useState(tabs[0]);
  const { setIsLoggedIn, isLoggedIn } = useContext(AuthContext);

  let usermail = import.meta.env.VITE_ADMIN;

  useEffect(() => {
    api
      .get("/dashboard", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        err.response.status == 401 ? navigate("/login") : "";
        console.log(err.response);
      });
  }, [isLoggedIn]);

  if (user.email != usermail) {
    return navigate("/waitlist");
  }

  return (
    <>
      <Head />
      <div className="grid sm:grid-cols-[auto,1fr] text-[#FFFFFF66] bg-gradient-to-b from-gradient-start to-gradient-end">
        <Sidebar
          value={user}
          selected={selected}
          setSelected={setSelected}
          tabs={tabs}
        />
        <Outlet />
      </div>
    </>
  );
}

export default Dashboard;
