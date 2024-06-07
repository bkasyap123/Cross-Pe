import React from "react";
import api from "../../service/api.js";
import { useState, useEffect, useContext } from "react";
import Kyc from "../Profile/Kyc";
import Account from "../Profile/Account";
import { AuthContext } from "../../Context.jsx";

function Dashboard() {
  const [user, setUser] = useState({});
  const { isLoggedIn } = useContext(AuthContext);

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

  return (
    <div>
      <Kyc value={user} />
      {/* <Account /> */}
    </div>
  );
}

export default Dashboard;
