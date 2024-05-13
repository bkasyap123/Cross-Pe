import React, { useCallback, useEffect, useState } from "react";
import Sidebar from "../components/Profile/Sidebar";
import api from "../service/api";
import Kyc from "../components/Profile/Kyc";
import Account from "../components/Profile/Account.jsx";

function Dashboard() {
  const [user, setUser] = useState({});

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
        console.log(err.response);
      });
  }, []);

  return (
    <div className="grid grid-cols-[auto,1fr]">
      <Sidebar value={user} />
      <div>
        <Kyc />
        <Account />
      </div>
    </div>
  );
}

export default Dashboard;
