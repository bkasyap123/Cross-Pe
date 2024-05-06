import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../workers/api.js";

function Register() {
  const [data, setData] = useState({ email: "", pwd: "", phone: "" });
  const navigate = useNavigate();

  const handleSubmit = () => {
    api
      .post("/signup", data, { withCredentials: true })
      .then((res) => {
        if (!res.data == "Registration Successful") return navigate("/signup");
        setData({ email: "", pwd: "", phone: "" });
        navigate("/user/dashboard");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="border-black mx-auto flex flex-col max-w-[95vw] sm:max-w-[450px] my-[250px] py-8 px-3 border gap-2">
      <h2 className="text-center font-bold">SIGNUP</h2>
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
      <input
        type="number"
        value={data.phone}
        onChange={(e) => setData({ ...data, phone: e.target.value })}
        placeholder="Phone"
        maxLength={10}
        className="border hover:rounded-sm rounded-sm hover:outline-black outline-none px-1 py-1"
      />
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-slate-800 font-semibold text-[16px] active:bg-green-600 py-2"
      >
        Submit
      </button>
      <p className="text-center">
        Already have an Account?&nbsp;
        <Link className="text-green-800 font-semibold" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
}

export default Register;
