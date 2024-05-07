import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../workers/api";

function Login() {
  const [data, setData] = useState({ email: "", pwd: "" });

  const navigate = useNavigate();

  const handleSubmit = () => {
    try {
      api
        .post("/login", data, { withCredentials: true })
        .then((res) => {
          if (res.status == 200) return navigate("/user/dashboard");
          setData({ email: "", pwd: "" });
          navigate("/login");
        })
        .catch((err) => {
          console.error(err.response);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mx-auto flex flex-col max-w-[95vw] sm:max-w-[450px] my-[200px] py-8 px-3 border-black border rounded-md gap-2">
      <h2 className="text-center font-bold">LOGIN</h2>
      <input
        type="email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        placeholder="Email"
        className="border hover:rounded-sm rounded-sm hover:outline-black outline-none px-1 py-1"
      />
      <input
        type="password"
        value={data.pwd}
        onChange={(e) => setData({ ...data, pwd: e.target.value })}
        placeholder="Password"
        className="border hover:rounded-sm rounded-sm hover:outline-black outline-none px-1 py-1"
      />
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-slate-800 font-semibold text-[16px] active:bg-green-600 py-2"
      >
        Submit
      </button>
      <p className="text-center">
        Don't have an account? &nbsp;
        <Link className="text-green-800 font-semibold" to="/register">
          Register here
        </Link>
      </p>
    </div>
  );
}

export default Login;
