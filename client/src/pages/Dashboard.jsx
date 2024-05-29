import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Profile/Sidebar";
import api from "../service/api";
import Kyc from "../components/Profile/Kyc";
import Account from "../components/Profile/Account.jsx";
import { AuthContext } from "../Context.jsx";
import Head from "../components/Profile/Head.jsx";
import Profile from "../components/Main/Profile.jsx";
import Client from "../components/Main/Clients.jsx";
import Request from "../components/Main/Requests.jsx";
import Dashboardd from "../components/Main/Dashboard.jsx";

const tabs = ["Dashboard", "Requests", "Clients", "Profile"];

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
      <div className="grid sm:grid-cols-[auto,1fr]">
        <Sidebar
          value={user}
          selected={selected}
          setSelected={setSelected}
          tabs={tabs}
        />
        <div>
          {selected == "Profile" ? (
            <Profile />
          ) : selected == "Requests" ? (
            <Request />
          ) : selected == "Clients" ? (
            <Client />
          ) : (
            <Dashboardd value={user} />
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
