import React, { useEffect, useState } from "react";
import api from "../workers/api";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      api
        .get("/dashboard", { withCredentials: true })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.error(err.response);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="text-center">
      <div className="my-3 font-semibold border border-black">Dashboard</div>
      <div>Your Email: {user?.email || <strong>Unauthorized</strong>}</div>
      <div>Your Phone: {user?.phone || <strong>Unauthorized</strong>}</div>
    </div>
  );
}

export default Dashboard;
